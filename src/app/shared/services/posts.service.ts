import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FbCreateResponse, Post} from '../models/interfaces';
import {FireBaseConfig} from '../../../environments/firebase.config';
import {map} from 'rxjs/operators';
import { AuthService } from "./auth.service";
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({providedIn: 'root'})
export class PostsService {
  products: AngularFireList<Post>;
  product: AngularFireObject<Post>;

  // favouriteProducts
  // favouritePosts: AngularFireList<FavouritePost>;
  constructor(private http: HttpClient,
    private authService: AuthService,
    // private db: AngularFireDatabase
    ) {}


  create(post: Post): Observable<Post> {
    return this.http.post(`${FireBaseConfig.databaseURL}/posts.json`, post)
      .pipe(map((response: FbCreateResponse) => {
        return {
          ...post,
          id: response.name,
          date: new Date(post.date)
        };
      }));
  }
  getAll(): Observable<Post[]> {
    return this.http.get(`${FireBaseConfig.databaseURL}/posts.json`)
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
  getById(id: string): Observable<Post> {
    return this.http.get<Post>(`${FireBaseConfig.databaseURL}/posts/${id}.json`)
      .pipe(map((post: Post) => {
        return {
          ...post,
          id,
          date: new Date(post.date)
        };
      }));
  }
  remove(id: string): Observable<void> {
    return this.http.delete<void>(`${FireBaseConfig.databaseURL}/posts/${id}.json`)
  }

  update(post: Post): Observable<Post> {
    return this.http.patch<Post>(`${FireBaseConfig.databaseURL}/posts/${post.id}.json`, post);
  }


  /*
   ----------  Favourite Post Function  ----------
  */

  // Get Favourite Product based on userId
  // async getUsersFavouritePost() {
  //   const user = await this.authService.user$.toPromise();
  //   this.favouritePosts = this.db.list("favouritePosts", (ref) =>
  //     ref.orderByChild("userId").equalTo(user.$key)
  //   );
  //   return this.favouritePosts;
  // }

  // // Adding New product to favourite if logged else to localStorage
  // addFavouritePost(data: Post): void {
  //   const a: Post[] = JSON.parse(localStorage.getItem("avf_item")) || [];
  //   a.push(data);
  //   setTimeout(() => {
  //     localStorage.setItem("avf_item", JSON.stringify(a));
  //   }, 1500);
  // }

  // // Fetching unsigned users favourite proucts
  // getLocalFavouritePost(): Post[] {
  //   const posts: Post[] =
  //     JSON.parse(localStorage.getItem("avf_item")) || [];

  //   return posts;
  // }

  // // Removing Favourite Product from Database
  // removeFavouritePost(key: string) {
  //   this.favouritePosts.remove(key);
  // }

  // // Removing Favourite Product from localStorage
  // removeLocalFavouritePost(product: Post) {
  //   const posts: Post[] = JSON.parse(localStorage.getItem("avf_item"));

  //   for (let i = 0; i < posts.length; i++) {
  //     if (posts[i].postId === product.postId) {
  //       posts.splice(i, 1);
  //       break;
  //     }
  //   }
  //   // ReAdding the products after remove
  //   localStorage.setItem("avf_item", JSON.stringify(posts));
  // }



}
