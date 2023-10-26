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

  data: any;
  options: any;
  
  constructor(private placeholderApi: PlaceholderApi) { }

  ngOnInit(): void {
    this.getDataPosts();
    this.getDataUsers();
    this.getDataComments();

    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
          {
              label: 'First dataset',
              backgroundColor: '#B0E0E6',
              borderColor: '#00BFFF',
              data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
              label: 'Second dataset',
              backgroundColor: '#D8BFD8',
              borderColor: '#9932CC',
              data: [28, 48, 40, 19, 86, 27, 90]
          }
      ]
  };

  this.options = {
      indexAxis: 'y',
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
          legend: {
              labels: {
                  color: '#191970'
              }
          }
      },
      scales: {
          x: {
              ticks: {
                  color: '#191970',
                  font: {
                      weight: 500
                  }
              },
              grid: {
                  color: '#191970',
                  drawBorder: false
              }
          },
          y: {
              ticks: {
                  color: '#191970'
              },
              grid: {
                  color: '#191970',
                  drawBorder: false
              }
          }
      }
    };
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
