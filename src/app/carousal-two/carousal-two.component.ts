import { Component, OnInit, ViewChild, ElementRef, Directive, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { Images } from '../images';
import { trigger, state, style, transition, animate, AnimationBuilder, AnimationPlayer } from '@angular/animations';

@Component({
  selector: 'app-carousal-two',
  templateUrl: './carousal-two.component.html',
  styleUrls: ['./carousal-two.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CarousalTwoComponent implements AfterViewInit {
  Images = Images;
  max = Images.length;
  currCenter = 0;

  constructor(private animationBuilder: AnimationBuilder) { }
  ngAfterViewInit(): void {
  }

  next() {
    var leftShrinkPlayer = this.shrinkLeft();
    var leftExpandPlayer = this.expandLeft();
    this.currCenter = (this.currCenter+1)%this.max;
    this.addNewImage();
  }

  prev(){
    this.shrinkRight();
    this.expandRight();
    this.currCenter = (this.currCenter-1+this.max)%this.max;
  }

  getRight(){
    return (this.currCenter+1)%this.max;
  }
  getLeft(){
    return (this.currCenter-1+this.max)%this.max;
  }

  addNewImage(){
    var division: HTMLElement =  document.getElementById('custom-carousal');
    var newImageElement = document.createElement('img') as HTMLPictureElement;
    newImageElement.setAttribute('src',Images[this.getRight()]);
    newImageElement.setAttribute('class','right');
    newImageElement.setAttribute('id','image-'+this.getRight());
    var newDivElement = document.createElement('div') as HTMLDivElement;
    newDivElement.setAttribute('class','carousal-item side-item');
    newDivElement.appendChild(newImageElement);
    division.appendChild(newDivElement);
  }

  shrinkLeft(){
    
    let animationFactory = this.animationBuilder.build([
      style({
        transformOrigin: 'center',
      }),
      animate(600,style({ 
        transform: 'matrix(0.8, 0, 0, 0.8, -600, 0)',
        opacity: 0.5,
      }),),
    ]);
    var centerId = 'image-'+this.currCenter;
    var el: HTMLPictureElement = document.getElementById(centerId);
    let leftShrinkPlayer = animationFactory.create(el);
    leftShrinkPlayer.play();
    leftShrinkPlayer.onDone(()=>{
      el.parentElement.removeAttribute('class');
      el.parentElement.setAttribute('class','carousal-item side-item');
    });
    return leftShrinkPlayer;
  }

  expandLeft(){
    let animationFactory = this.animationBuilder.build([
      style({
        opacity: 0.5,
        transform:'matrix(0.8, 0, 0, 0.8, 0, 0)',
        transformOrigin: 'center',
      }),
      animate(600,style({ 
        transform: 'matrix(1.2, 0, 0, 1.2, -250, 0)',
        opacity: 1.0,
      }),),
    ]);
    var rightId = 'image-'+this.getRight();
    var el: HTMLPictureElement = document.getElementById(rightId);
    let leftExpandPlayer = animationFactory.create(el);
    leftExpandPlayer.play();
    leftExpandPlayer.onDone(()=>{
      el.parentElement.removeAttribute('class');
      el.parentElement.setAttribute('class','carousal-item center-item');
    });
    return leftExpandPlayer;
  }

  shrinkRight(){
    let animationFactory = this.animationBuilder.build([
      style({
        // transform:'matrix(1.2, 0, 0, 1.2, 0, 0)',
        transformOrigin: 'center',
      }),
      animate(600,style({ 
        transform: 'matrix(0.8, 0, 0, 0.8, 0, 0)',
        opacity: 0.5,
        
      }),),
    ]);
    var centerId = 'image-'+this.currCenter;
    var el: HTMLPictureElement = document.getElementById(centerId);
    let rightShrinkPlayer = animationFactory.create(el);
    rightShrinkPlayer.play();
    rightShrinkPlayer.onDone(()=>{
      el.parentElement.removeAttribute('class');
      el.parentElement.setAttribute('class','carousal-item side-item');
    });
    return rightShrinkPlayer;
  }

  expandRight(){
    let animationFactory = this.animationBuilder.build([
      style({
        // transform:'matrix(0.8, 0, 0, 0.8, 0, 0)',
        transformOrigin: 'center',
      }),
      animate(600,style({ 
        transform: 'matrix(1.2, 0, 0, 1.2, -300, 0)',
        opacity: 1.0,
        
      }),),
    ]);
    var leftId = 'image-'+this.getLeft();
    var el: HTMLPictureElement = document.getElementById(leftId);
    let rightExpandPlayer = animationFactory.create(el);
    rightExpandPlayer.play();
    rightExpandPlayer.onDone(()=>{
      el.parentElement.removeAttribute('class');
      el.parentElement.setAttribute('class','carousal-item center-item');
    });
    return rightExpandPlayer;
  }
  

}
