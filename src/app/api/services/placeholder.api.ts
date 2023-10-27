import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Post } from "../../models/post";
import { User } from "../../models/user";
import { Comment } from "../../models/comment";

@Injectable({ providedIn: 'root' })
export class PlaceholderApi {
    private apiUrl = 'https://jsonplaceholder.org';

    constructor(private http: HttpClient) { }

    getItemsPosts(): Observable<Post[]> {
        return this.http.get<Post[]>(`${this.apiUrl}/posts`);
    }

    getItemsPost(id: number): Observable<Post> {
        const url = `${this.apiUrl}/posts/${id}`
        return this.http.get<Post>(url)
    }

    getItemsUsers(): Observable<User[]> {
        return this.http.get<User[]>(`${this.apiUrl}/users`);
    }

    getItemsComments(): Observable<Comment[]> {
        return this.http.get<Comment[]>(`${this.apiUrl}/comments`);
    }
}
