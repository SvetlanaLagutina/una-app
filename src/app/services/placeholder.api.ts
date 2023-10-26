import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IPost } from "../models/post";
import { IUser } from "../models/user";
import { IComment } from "../models/comment";

@Injectable({ providedIn: 'root' })
export class PlaceholderApi {
    private apiUrl = 'https://jsonplaceholder.org/';

    constructor(private http: HttpClient) { }

    getItemsPosts(): Observable<IPost[]> {
        return this.http.get<IPost[]>(`${this.apiUrl}posts`);
    }

    getItemsPost(id: number): Observable<IPost> {
        const url = `${this.apiUrl}posts/${id}`
        return this.http.get<IPost>(url)
    }

    getItemsUsers(): Observable<IUser[]> {
        return this.http.get<IUser[]>(`${this.apiUrl}users`);
    }

    getItemsComments(): Observable<IComment[]> {
        return this.http.get<IComment[]>(`${this.apiUrl}comments`);
    }
}
