import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url: string;
  constructor(private http : HttpClient) {
    this.url = "localhost:5050/"
   }

   getPosts(){
     return this.http.get(this.url);
   }

   newPost(post: object){
    const newPost = '/post'
     return this.http.post(this.url + newPost, post)
   }

   deletePost() {
    const deletePost = '/postDelete';
    return this.http.delete(this.url + deletePost);
  }

  updateLikes(likeUpdate: string){
    const likes = '/likes';
    return this.http.patch(this.url + likes, likeUpdate)
  }
}



