import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-update',
  templateUrl: './post-update.component.html',
  styleUrls: ['./post-update.component.css']
})
export class PostUpdateComponent implements OnInit {

  @Input() displayForm: any;

  email: string = '';
  password: string = '';
  post: string ='';

  posts = [];

  constructor() { }

  ngOnInit() {
  }

  submitPost(post){
    console.log(post)
  }

  // This function must post updates to the database
  user_login () {
    console.log(`post: ${this.post}`);
    this.posts.push(this.post);
    console.log(`posts: ${this.posts}`);

  }

}
