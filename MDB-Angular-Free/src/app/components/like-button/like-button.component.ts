import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like-button',
  templateUrl: './like-button.component.html',
  styleUrls: ['./like-button.component.scss']
})
export class LikeButtonComponent implements OnInit {
  // Variables
  counter: any;
  count: any = 0;
  isActive: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  // Method for liking and unliking a post
  // Fix the button color activation
  clickCount() {
    if (this.count === 0) {
      this.count = this.count + 1;
      this.counter = this.count;
      this.isActive = !this.isActive;
      console.log(this.counter);
    } else {
      this.count = this.count - 1;
      this.counter = this.count;
      console.log(this.counter);
    }
  }
}
