import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/pages/post-details/post';
import { User } from 'src/app/models/user';
import { Comment } from 'src/app/models/comment';
import { PostDto } from 'src/app/api/models/post.dto';
import { map, tap, catchError } from 'rxjs/operators';
import { mapPostDtoToFull } from './map-post-dto-to full.function';
import { PlaceholderApi } from 'src/app/api/services/placeholder.api';
import { combineLatest, of } from 'rxjs';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  post: Post;
  itemsPosts: PostDto[];
  itemsUsers: User[] = [];
  itemsComments: Comment[] = [];
  latest: unknown;

  constructor(
    private route: ActivatedRoute,
    private placeholderApi: PlaceholderApi,
  ) {}

  ngOnInit() {
    this.getDataPost();

    this.getDataPosts();
    this.getDataUsers();
    this.getDataComments();

    combineLatest<[PostDto, User, Comment]>([
      this.itemsPosts, this.itemsUsers, this.itemsComments,
    ])
      .pipe(
        // map(([posts, users, comments]) => ([posts.id, users.id, comments.id])),
        catchError( err => of(`Error: ${err}`)),
        tap(val => console.log(val)),
        tap(([postCount, userCount, commentCount]) => console.log(
          `Posts Latest: ${postCount},
           Users Latest: ${userCount},
           Comments Latest: ${commentCount}`
       )),
      )
      .subscribe(); //{ postCount: number, userCount: number, commentCount: number}

  }

  getDataPost(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.placeholderApi
      .getItemsPost(id)
      .pipe(
        map((dto: PostDto) => mapPostDtoToFull(dto)),
        tap(obj => {
          this.post = obj;
          console.log(this.post);
        }),
      )
      .subscribe();
  }

  getDataUsers(): void {
    this.placeholderApi
        .getItemsUsers()
        .subscribe((data: User[]) => {
          this.itemsUsers = data;
        })
  }

  getDataComments(): void {
    this.placeholderApi
        .getItemsComments()
        .subscribe((data: Comment[]) => {
          this.itemsComments = data;
        })
  }

  getDataPosts(): void {
    this.placeholderApi
        .getItemsPosts()
        .subscribe((data: PostDto[]) => {
          this.itemsPosts = data;
        })
  }
}
