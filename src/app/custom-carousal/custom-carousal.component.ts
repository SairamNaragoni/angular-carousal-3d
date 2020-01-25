import { Component, OnInit } from '@angular/core';
import {Images} from '../images';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
} from '@angular/animations';

@Component({
  host: {
    '(@slideLeft.done)': 'captureDoneEvent($event)',
  },
  selector: 'app-custom-carousal',
  templateUrl: './custom-carousal.component.html',
  styleUrls: ['./custom-carousal.component.css'],
  animations: [
    trigger('slideLeft',[
      state('shrinkLeftBegin',style({
        margin: 'auto',
        display: 'block',
        // transform:'matrix(1.2, 0, 0, 1.2, 0, 0)',
        transformOrigin: 'center',
      })),
      state('shrinkLeftEnd',style({ 
        margin: 'auto',
        display: 'block',
        // transform: 'matrix(0.8, 0, 0, 0.8, -300, 0)',
        opacity: 0.5,
        
      })),
      state('expandLeftBegin',style({
        opacity: 0.5,
        // transform:'matrix(0.8, 0, 0, 0.8, 0, 0)',
        transformOrigin: 'center',
      })),
      state('expandLeftEnd',style({ 
        // transform: 'matrix(1.2, 0, 0, 1.2, -300, 0)',
        opacity: 1.0,
        
      })),
      transition('shrinkLeftBegin => shrinkLeftEnd', [
        animate('1s', keyframes ( [
          style({transform:'matrix(1.2, 0, 0, 1.2, 0, 0)',}),
          style({transform: 'matrix(0.8, 0, 0, 0.8, -300, 0)',}),
        ]))
      ]),
      transition('shrinkLeftEnd => shrinkLeftBegin', [
        animate('1s', keyframes ( [
          style({transform: 'matrix(0.8, 0, 0, 0.8, -300, 0)',}),
          style({transform:'matrix(1.2, 0, 0, 1.2, 0, 0)',}),
        ]))
      ]),
      transition('expandLeftBegin => expandLeftEnd', [
        animate('1s', keyframes ( [
          style({transform:'matrix(0.8, 0, 0, 0.8, 0, 0)',}),
          style({transform: 'matrix(1.2, 0, 0, 1.2, -300, 0)',}),
        ]))
      ]),
      transition('expandLeftEnd => expandLeftBegin', [
        animate('1s', keyframes ( [
          style({transform: 'matrix(0.8, 0, 0, 0.8, -300, 0)',}),
          style({transform:'matrix(1.2, 0, 0, 1.2, 0, 0)',}),
        ]))
      ]),
    ]),
    trigger('slideRight',[
      state('shrinkRightBegin',style({
        margin: 'auto',
        display: 'block',
        // transform:'matrix(1.2, 0, 0, 1.2, 0, 0)',
        transformOrigin: 'center',
      })),
      state('shrinkRightEnd',style({ 
        margin: 'auto',
        display: 'block',
        // transform: 'matrix(0.8, 0, 0, 0.8, +300, 0)',
        opacity: 0.5,
        
      })),
      state('expandRightBegin',style({
        opacity: 0.5,
        // transform:'matrix(0.8, 0, 0, 0.8, 0, 0)',
        transformOrigin: 'center',
      })),
      state('expandRightEnd',style({ 
        // transform: 'matrix(1.2, 0, 0, 1.2, 300, 0)',
        opacity: 1.0,
      })),
      transition('shrinkRightBegin => shrinkRightEnd', [
        animate('1s', keyframes ( [
          style({transform:'matrix(1.2, 0, 0, 1.2, 0, 0)',}),
          style({transform: 'matrix(0.8, 0, 0, 0.8, +300, 0)',}),
        ]))
      ]),
      transition('shrinkRightEnd => shrinkRightBegin', [
        animate('1s', keyframes ( [
          style({transform: 'matrix(0.8, 0, 0, 0.8, +300, 0)',}),
          style({transform:'matrix(1.2, 0, 0, 1.2, 0, 0)',}),
        ]))
      ]),
      transition('expandRightBegin => expandRightEnd', [
        animate('1s', keyframes ( [
          style({transform:'matrix(0.8, 0, 0, 0.8, 0, 0)',}),
          style({transform: 'matrix(1.2, 0, 0, 1.2, 300, 0)',}),
        ]))
      ]),
      transition('expandRightEnd => expandRightBegin', [
        animate('1s', keyframes ( [
          style({transform: 'matrix(1.2, 0, 0, 1.2, 300, 0)',}),
          style({transform:'matrix(0.8, 0, 0, 0.8, 0, 0)',}),
        ]))
      ]),
    ]),
  ],
})
export class CustomCarousalComponent implements OnInit {

  Images = Images;
  max = Images.length;
  isNext = false;
  isPrev = false
  index = 0;

  constructor() { }

  ngOnInit() {
  }
  next(){
    this.isNext = true;
    this.isPrev = false;
  }
  prev(){
    this.isNext = false;
    this.isPrev = true;
  }
  captureLeftDoneEvent(event:AnimationEvent){
    console.log("animation ended");
    // this.index = (this.index+1)%this.max;
  }
  captureRightDoneEvent(event:AnimationEvent){
    console.log("animation ended");
    // this.index = (this.index-1+this.max)%this.max;
  }

}
