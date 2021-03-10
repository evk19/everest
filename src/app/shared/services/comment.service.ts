import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CommentSh, FbCreateResponse, Post} from '../models/interfaces';
import {FireBaseConfig} from '../../../environments/firebase.config';
import {map} from 'rxjs/operators';
import { AuthService } from "./auth.service";
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({providedIn: 'root'})
export class CommentService {
  comments: AngularFireList<Comment>;
  comment: AngularFireObject<Comment>;

  // favouriteProducts
  // favouritePosts: AngularFireList<FavouritePost>;
  constructor(private http: HttpClient,
    private authService: AuthService,
    // private db: AngularFireDatabase
    ) {}

    create(comment: CommentSh): Observable<CommentSh> {
    return this.http.post(`${FireBaseConfig.databaseURL}/comments.json`, comment)
      .pipe(map((response: FbCreateResponse) => {
        return {
          ...comment,
          id: response.name,
        };
      }));
    }

    getAll(): Observable<CommentSh[]> {
        return this.http.get(`${FireBaseConfig.databaseURL}/comments.json`)
          .pipe(map((response: {[key: string]: any}) => {
           return  Object
              .keys(response)
              .map(key => ({
                ...response[key],
                id: key,
              }));
          }));
      }


  }