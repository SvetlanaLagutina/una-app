import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/pages/post-details/post';
import { User } from 'src/app/models/user';
import { Comment } from 'src/app/models/comment';
import { PostDto } from 'src/app/api/models/post.dto';
import { map, tap, catchError } from 'rxjs/operators';
import { mapPostDtoToFull } from './map-post-dto-to full.function';
import { PlaceholderApi } from 'src/app/api/services/placeholder.api';
import { Observable, combineLatest, of } from 'rxjs';

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

    combineLatest([
      this.getDataPosts(),
      this.getDataComments(), 
      this.getDataUsers()
    ])
      .pipe(
        map(arr => (
          {
            postCount: arr[0].length,
            userCount: arr[1].length,
            commentCount: arr[2].length,
          }
        )),
        tap((v) => console.log(v))
      )
      .subscribe() //{ postCount: number, userCount: number, commentCount: number}

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

  getDataUsers(): Observable<User[]> {
    return this.placeholderApi
               .getItemsUsers()
  }

  getDataComments(): Observable<Comment[]> {
    return this.placeholderApi
               .getItemsComments()
  }

  getDataPosts(): Observable<PostDto[]> {
    return this.placeholderApi
               .getItemsPosts()
  }
}
