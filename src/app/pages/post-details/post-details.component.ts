import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/pages/post-details/post';
import { User } from 'src/app/models/user';
import { Comment } from 'src/app/models/comment';
import { PostDto } from 'src/app/api/models/post.dto';
import { map, tap } from 'rxjs/operators';
import { mapPostDtoToFull } from './map-post-dto-to full.function';
import { PlaceholderApi } from 'src/app/api/services/placeholder.api';
import { Observable, combineLatest} from 'rxjs';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  post: Post;

  basicData: any;
  basicOptions: any;
  data: {postCount: number, userCount: number, commentCount: number};
  combined$: any;

  constructor(
    private route: ActivatedRoute,
    private placeholderApi: PlaceholderApi,
  ) {}

  ngOnInit() {
    this.getDataPost();

    this.combined$ = combineLatest([
      this.getDataPosts(),
      this.getDataComments(), 
      this.getDataUsers()
    ])
      .pipe(
        map(arr => (
          {
            labels: ['postCount', 'userCount', 'commentCount'],
            datasets: [
                {
                    label: 'Counts',
                    data: [arr[0].length, arr[1].length, arr[2].length],
                    backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)'],
                    borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)'],
                    borderWidth: 1
                }
            ]
          }
        ))
      )

    this.basicOptions = {
        plugins: {
            legend: {
                labels: {
                    color: '#C71585'
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    color: '#CD5C5C'
                },
                grid: {
                    color: '#DA70D6',
                    drawBorder: false
                }
            },
            x: {
                ticks: {
                    color: '#CD5C5C'
                },
                grid: {
                    color: '#DA70D6',
                    drawBorder: false
                }
            }
        }
    };
  }

  getDataPost(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.placeholderApi
      .getItemsPost(id)
      .pipe(
        map((dto: PostDto) => mapPostDtoToFull(dto)),
        tap(obj => {
          this.post = obj;
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
