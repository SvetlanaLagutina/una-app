import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/pages/post-details/post';
import { User } from 'src/app/models/user';
import { Comment } from 'src/app/models/comment';
import { PostDto } from 'src/app/api/models/post.dto';
import { map, tap } from 'rxjs/operators';
import { mapPostDtoToFull } from './map-post-dto-to full.function';
import { PlaceholderApi } from 'src/app/api/services/placeholder.api';
import { combineLatest } from 'rxjs';

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

  constructor(
    private route: ActivatedRoute,
    private placeholderApi: PlaceholderApi,
  ) {}

  ngOnInit() {
    this.getDataPost();

    // this.getDataPosts();
    // this.getDataUsers();
    // this.getDataComments();

    // combineLatest(this.getDataPosts(), this.getDataUsers(), this.getDataComments() )
    //   .pipe(
    //     //...
    //     tap(x => console.log(x)), //{ postCount: number, userCount: number, commentCount: number}
    //   )
    //   .subscribe();
  }

  getDataPost(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.placeholderApi
      .getItemsPost(id)
      .pipe(
        map((dto: PostDto) => mapPostDtoToFull(dto)),
        map(obj => this.post = obj),
        tap(() =>console.log(this.post)),
      )
      .subscribe();
  }

  // getDataUsers(): void {
  //   this.placeholderApi
  //       .getItemsUsers()
  //       .subscribe((data: User[]) => {
  //         this.itemsUsers = data;
  //         console.log(this.itemsUsers);
  //       })
  // }

  // getDataComments(): void {
  //   this.placeholderApi
  //       .getItemsComments()
  //       .subscribe((data: Comment[]) => {
  //         this.itemsComments = data;
  //         console.log(this.itemsComments);
  //       })
  // }

  // getDataPosts(): void {
  //   this.placeholderApi
  //       .getItemsPosts()
  //       .subscribe((data: PostDto[]) => {
  //         this.itemsPosts = data;
  //         console.log(this.itemsPosts);
  //       })
  // }
}
