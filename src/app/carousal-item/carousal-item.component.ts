import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

// export interface myinterface {
//   removeComponent(index: number);
// }

@Component({
  selector: 'app-carousal-item',
  templateUrl: './carousal-item.component.html',
  styleUrls: ['./carousal-item.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('slideLeftShrink',[
      state('shrinkLeftBegin',style({
        margin: 'auto',
        display: 'block',
        // transform:'matrix(1.2, 0, 0, 1.2, 0, 0)',
        transformOrigin: 'center',
      })),
      state('shrinkLeftEnd',style({ 
        margin: 'auto',
        display: 'block',
        transform: 'matrix(0.8, 0, 0, 0.8, 0, 0)',
        opacity: 0.5,
      })),
      transition('shrinkLeftBegin => shrinkLeftEnd', [
        animate('1s')
      ]),
      transition('shrinkLeftEnd => shrinkLeftBegin', [
        animate('1s')
      ]),
    ]),
    trigger('slideLeftExpand',[
      state('expandLeftBegin',style({
        opacity: 0.5,
        // transform:'matrix(0.8, 0, 0, 0.8, 0, 0)',
        transformOrigin: 'center',
      })),
      state('expandLeftEnd',style({ 
        transform: 'matrix(1.2, 0, 0, 1.2, 0, 0)',
        opacity: 1.0,
      })),
      transition('expandLeftBegin => expandLeftEnd', [
        animate('1s')
      ]),
      transition('expandLeftEnd => expandLeftBegin', [
        animate('1s')
      ]),
    ]),
    trigger('slideRightShrink',[
      state('shrinkRightBegin',style({
        // transform:'matrix(1.2, 0, 0, 1.2, 0, 0)',
        transformOrigin: 'center',
      })),
      state('shrinkRightEnd',style({ 
        transform: 'matrix(0.8, 0, 0, 0.8, +600, 0)',
        opacity: 0.5,
        
      })),
      transition('shrinkRightBegin => shrinkRightEnd', [
        animate('1s ease-out'),
      ]),
      transition('shrinkRightEnd => shrinkRightBegin', [
        animate('1s ease-in')
      ]),
    ]),

    trigger('slideRightExpand',[
      state('expandRightBegin',style({
        opacity: 0.5,
        // transform:'matrix(0.8, 0, 0, 0.8, 0, 0)',
        transformOrigin: 'center',
      })),
      state('expandRightEnd',style({ 
        transform: 'matrix(1.2, 0, 0, 1.2, 300, 0)',
        opacity: 1.0,
      })),
      transition('expandRightBegin => expandRightEnd', [
        animate('1s')
      ]),
      transition('expandRightEnd => expandRightBegin', [
        animate('1s')
      ]),
    ]),
  ],
})
export class CarousalItemComponent implements OnInit {
  imageClassName:string;
  id:string;
  srcPath:string;
  divClassName:string;
  expandRight=false;
  shrinkRight=false;
  expandLeft=false;
  shrinkLeft=false;

  // public selfRef: CarousalItemComponent;
  // public compInteraction: myinterface;

  constructor() {
   }

  ngOnInit() {
  }
  getDivClassName(){
    return "carousal-item "+this.divClassName;
  }

  animationDone(event:AnimationEvent){
    
    // this.expandLeft = false;
    // this.expandRight = false;
    // this.shrinkLeft = false;
    // this.shrinkRight = false;
  }

  animationRightShrinkDone(event:AnimationEvent){
    // console.log("shrinkright done");
    // this.shrinkRight=false;
    // this.divClassName="side-item";
    // this.imageClassName="right";
  }

  // removeComponent(index) {
  //   this.compInteraction.removeComponent(index);
  // }

}
