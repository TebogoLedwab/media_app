import { Component, OnInit } from '@angular/core';
import { Post } from '../../social';
import { POST } from '../../mock-post';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent implements OnInit {

  title = 'social-connect';
  posts: Post[] = POST;
  constructor() { }

  ngOnInit(): void {
  }

}
