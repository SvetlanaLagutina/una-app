import { Component, OnInit } from '@angular/core';
import { IPost } from '../../models/post';
import { IUser } from '../../models/user';
import { IComment } from '../../models/comment';
import { PlaceholderApi } from 'src/app/services/placeholder.api';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  mainText = 'Main page';

  itemsPosts: IPost[] = [];
  itemsUsers: IUser[] = [];
  itemsComments: IComment[] = [];

  constructor(private placeholderApi: PlaceholderApi) { }

  ngOnInit(): void {
    this.getDataPosts();
    this.getDataUsers();
    this.getDataComments();
  }

  getDataPosts(): void {
    this.placeholderApi
        .getItemsPosts()
        .subscribe((data: IPost[]) => {
          this.itemsPosts = data;
          console.log(this.itemsPosts);
        })
  }

  getDataUsers(): void {
    this.placeholderApi
        .getItemsUsers()
        .subscribe((data: IUser[]) => {
          this.itemsUsers = data;
          console.log(this.itemsUsers);
        })
  }

  getDataComments(): void {
    this.placeholderApi
        .getItemsComments()
        .subscribe((data: IComment[]) => {
          this.itemsComments = data;
          console.log(this.itemsComments);
        })
  }
}
