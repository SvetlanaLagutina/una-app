import { Component, OnInit } from '@angular/core';
import { PlaceholderApi } from 'src/app/api/services/placeholder.api';
import { PostDto } from 'src/app/api/models/post.dto';
import { PostShort } from './post-short';
import { mapPostDtoToShort } from './map-post-dto-to-short.function';

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss']
})
export class PostsPageComponent implements OnInit{
  itemsPosts: PostShort[];

  constructor(private placeholderApi: PlaceholderApi) {}

  ngOnInit(): void {
    this.getDataPosts();
  }

  getDataPosts(): void {
    this.placeholderApi
        .getItemsPosts()
        .subscribe((posts: PostDto[]) => {
          this.itemsPosts = posts.map(dto => mapPostDtoToShort(dto));
          console.log(this.itemsPosts);
        })
  }
}
