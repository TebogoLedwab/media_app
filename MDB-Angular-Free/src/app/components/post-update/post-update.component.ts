import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-update',
  templateUrl: './post-update.component.html',
  styleUrls: ['./post-update.component.css']
})
export class PostUpdateComponent implements OnInit {

  //@Input() displayForm: any;

 
  post: string ='';

  posts = [];

  constructor() { }

  ngOnInit() {
  }

  // This function must post updates to the database
  submitPost () {
    console.log(`post: ${this.post}`);
    this.posts.push(this.post);
    console.log(`posts: ${this.posts}`);

  }

}
