import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post';
import { PlaceholderApi } from 'src/app/api/services/placeholder.api';
import { Location } from '@angular/common';

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
    private location: Location
  ) {}

  ngOnInit() {
    this.getDataPost();
  }

  getDataPost(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.placeholderApi.getItemsPost(id)
      .subscribe(post => this.post = post);
  }
  
  goBack(): void {
    this.location.back();
  }
}
