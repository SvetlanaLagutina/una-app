import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IPost } from "../models/post";
import { IUser } from "../models/user";
import { IComment } from "../models/comment";

@Injectable({ providedIn: 'root' })
export class PlaceholderApi {
    constructor(private http: HttpClient) { }

    getItemsPosts(): Observable<IPost[]> {
        return this.http.get<IPost[]>('https://jsonplaceholder.org/posts');
    }

    getItemsUsers(): Observable<IUser[]> {
        return this.http.get<IUser[]>('https://jsonplaceholder.org/users');
    }

    getItemsComments(): Observable<IComment[]> {
        return this.http.get<IComment[]>('https://jsonplaceholder.org/comments');
    }
}
