import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/pages/post-details/post';
import { PostDto } from 'src/app/api/models/post.dto';
import { mapPostDtoToFull } from './map-post-dto-to full.function';
import { PlaceholderApi } from 'src/app/api/services/placeholder.api';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  post: Post;

  constructor(
    private route: ActivatedRoute,
    private placeholderApi: PlaceholderApi,
  ) {}

  ngOnInit() {
    this.getDataPost();
  }

  getDataPost(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.placeholderApi.getItemsPost(id)
      .subscribe((dto: PostDto) => {
        this.post = mapPostDtoToFull(dto);
        console.log(this.post);
      });
  }
}
