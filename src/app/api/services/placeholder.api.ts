import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PostDto } from "../models/post.dto";
import { User } from "../../models/user";
import { Comment } from "../../models/comment";

@Injectable({ providedIn: 'root' })
export class PlaceholderApi {
    private apiUrl = 'https://jsonplaceholder.org';

    constructor(private http: HttpClient) { }

    getItemsPosts(): Observable<PostDto[]> {
        return this.http.get<PostDto[]>(`${this.apiUrl}/posts`);
    }

    getItemsPost(id: number): Observable<PostDto> {
        const url = `${this.apiUrl}/posts/${id}`
        return this.http.get<PostDto>(url)
    }

    getItemsUsers(): Observable<User[]> {
        return this.http.get<User[]>(`${this.apiUrl}/users`);
    }

    getItemsComments(): Observable<Comment[]> {
        return this.http.get<Comment[]>(`${this.apiUrl}/comments`);
    }
}
