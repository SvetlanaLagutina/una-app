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

  dataBar: any;
  optionsBar: any;

  dataLine: any;
  optionsLine: any;
  
  constructor(private placeholderApi: PlaceholderApi) { }

  ngOnInit(): void {
    this.getDataPosts();
    this.getDataUsers();
    this.getDataComments();

    this.dataBar = {
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

  this.optionsBar = {
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

    this.dataLine = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
          {
              type: 'line',
              label: 'Dataset 1',
              borderColor: '#008080',
              borderWidth: 2,
              fill: false,
              tension: 0.4,
              data: [50, 25, 12, 48, 56, 76, 42]
          },
          {
              type: 'bar',
              label: 'Dataset 2',
              backgroundColor: '#20B2AA',
              data: [21, 84, 24, 75, 37, 65, 34],
              borderColor: 'white',
              borderWidth: 2
          },
          {
              type: 'bar',
              label: 'Dataset 3',
              backgroundColor: '#FF8C00',
              data: [41, 52, 24, 74, 23, 21, 32]
          }
      ]
  };
  
  this.optionsLine = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
          legend: {
              labels: {
                  color: '#4682B4'
              }
          }
      },
      scales: {
          x: {
              ticks: {
                  color: '#4682B4'
              },
              grid: {
                  color: '#5F9EA0'
              }
          },
          y: {
              ticks: {
                  color: '#4682B4'
              },
              grid: {
                  color: '#5F9EA0'
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
