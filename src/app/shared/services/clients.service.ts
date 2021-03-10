import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FbCreateResponse, Post} from '../models/interfaces';
import {FireBaseConfig} from '../../../environments/firebase.config';
import {map} from 'rxjs/operators';
import { AuthService } from "./auth.service";
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { User } from '../models/user';

@Injectable({providedIn: 'root'})
export class ClientsService {

  constructor(private http: HttpClient,
    private authService: AuthService,
    ) {}
  getAll(): Observable<User[]> {
    return this.http.get(`${FireBaseConfig.databaseURL}/clients.json`)
      .pipe(map((response: {[key: string]: any}) => {
       return  Object
          .keys(response)
          .map(key => ({
            ...response[key],
            id: key,
            date: new Date(response[key].date)
          }));
      }));
  }
  getById(id: string): Observable<User> {
    return this.http.get<User>(`${FireBaseConfig.databaseURL}/clients/${id}.json`)
      .pipe(map((user: User) => {
        return {
          ...user,
          id,
        };
      }));
  }

}
