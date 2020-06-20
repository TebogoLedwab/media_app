import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like-button',
  templateUrl: './like-button.component.html',
  styleUrls: ['./like-button.component.scss']
})
export class LikeButtonComponent implements OnInit {

  counter: any;
  count: any = 0;
  constructor() { }

  ngOnInit(): void {
  }

  clickCount() {
    if (this.count === 0) {
      this.count = this.count + 1;
      this.counter = this.count;
      console.log(this.counter);
    } else {
      this.count = this.count - 1;
      this.counter = this.count;
      console.log(this.counter);
    }
  }
}
