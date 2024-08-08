import { Component, OnInit } from '@angular/core';
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss',
})
export class FeaturesComponent implements OnInit {
  i: any = 0;
  arr: any;
  ngOnInit(): void {
    this.arr = this.blue;
  }

  blue: any = [
    'images/blu1.png',

    'images/blu2.png',
    'images/blu3.png',
    'images/blu4.png',
  ];
  black: any = [
    'images/bla1.png',
    'images/bla2.png',
    'images/bla3.png',
    'images/bla4.png',
  ];
  white: any = [
    'images/wh1.png',
    'images/wh2.png',
    'images/wh3.png',
    'images/wh4.png',
  ];
  red: any = [
    'images/red1.png',
    'images/red2.png',
    'images/red3.png',
    'images/red4.png',
  ];
  call1() {
    if (this.i > 0) {
      this.i = this.i - 1;
    } else {
      if (this.i == 0) {
        this.i = 3;
      }
    }
  }
  call2() {
    if (this.i < 3) {
      this.i = this.i + 1;
    } else {
      if (this.i == 3) {
        this.i = 0;
      }
    }
  }

  demo(arr1: any) {
    if (arr1 == 'black') {
      this.arr = this.black;
    } else if (arr1 == 'blue') {
      this.arr = this.blue;
    } else if (arr1 == 'red') {
      this.arr = this.red;
    } else if (arr1 == 'white') {
      this.arr = this.white;
    }
  }
}
