import { Component, OnInit, ComponentFactoryResolver, ComponentRef, ViewChild, ViewContainerRef, Type } from '@angular/core';
import {Images} from '../images';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { CarousalItemComponent } from '../carousal-item/carousal-item.component';
import { CarousalDirectiveDirective } from '../carousal-directive.directive';

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
        transform:'matrix(1.2, 0, 0, 1.2, 0, 0)',
        transformOrigin: 'center',
      })),
      state('shrinkLeftEnd',style({ 
        margin: 'auto',
        display: 'block',
        transform: 'matrix(0.8, 0, 0, 0.8, -300, 0)',
        opacity: 0.5,
        
      })),
      state('expandLeftBegin',style({
        opacity: 0.5,
        transform:'matrix(0.8, 0, 0, 0.8, 0, 0)',
        transformOrigin: 'center',
      })),
      state('expandLeftEnd',style({ 
        transform: 'matrix(1.2, 0, 0, 1.2, -300, 0)',
        opacity: 1.0,
      })),
      transition('shrinkLeftBegin => shrinkLeftEnd', [
        animate('1s')
      ]),
      transition('shrinkLeftEnd => shrinkLeftBegin', [
        animate('1s')
      ]),
      transition('expandLeftBegin => expandLeftEnd', [
        animate('1s')
      ]),
      transition('expandLeftEnd => expandLeftBegin', [
        animate('1s')
      ]),
    ]),
    trigger('slideRight',[
      state('shrinkRightBegin',style({
        margin: 'auto',
        display: 'block',
        transform:'matrix(1.2, 0, 0, 1.2, 0, 0)',
        transformOrigin: 'center',
      })),
      state('shrinkRightEnd',style({ 
        margin: 'auto',
        display: 'block',
        transform: 'matrix(0.8, 0, 0, 0.8, +300, 0)',
        opacity: 0.5,
        
      })),
      state('expandRightBegin',style({
        opacity: 0.5,
        transform:'matrix(0.8, 0, 0, 0.8, 0, 0)',
        transformOrigin: 'center',
      })),
      state('expandRightEnd',style({ 
        transform: 'matrix(1.2, 0, 0, 1.2, 300, 0)',
        opacity: 1.0,
      })),
      transition('shrinkRightBegin => shrinkRightEnd', [
        animate('1s')
      ]),
      transition('shrinkRightEnd => shrinkRightBegin', [
        animate('1s')
      ]),
      transition('expandRightBegin => expandRightEnd', [
        animate('1s')
      ]),
      transition('expandRightEnd => expandRightBegin', [
        animate('1s')
      ]),
    ]),
  ],
})
export class CustomCarousalComponent implements OnInit {

  Images = Images;
  max = Images.length;
  currCenter = 0;
  components = [];
  @ViewChild(CarousalDirectiveDirective, {static: true}) appCarousalDirective: CarousalDirectiveDirective;
  @ViewChild('ViewContainerRef', { read: ViewContainerRef,static : true }) VCR: ViewContainerRef;

  constructor(private CFR: ComponentFactoryResolver) { }

  ngOnInit() {
    this.createComponent();
  }
  addComponent() {
    const componentFactory = this.CFR.resolveComponentFactory(CarousalItemComponent);
    const viewContainerRef = this.appCarousalDirective.viewContainerRef;
    const componentRef = viewContainerRef.createComponent(componentFactory);
    const component = (<CarousalItemComponent>componentRef.instance);
    component.srcPath = Images[0];
    component.divClassName = "carousal-item center-item";
    component.id = "image-0";
    component.imageClassName = "center";
    this.components.push(component);
  }

  createComponent() {

      let componentFactory = this.CFR.resolveComponentFactory(CarousalItemComponent);
      let componentRef: ComponentRef<CarousalItemComponent> = this.VCR.createComponent(componentFactory);
      let component = componentRef.instance;

      component.srcPath = Images[0];
    component.divClassName = "carousal-item center-item";
    component.id = "image-0";
    component.imageClassName = "center";
    component.right=false;
    this.components.push(component);


    // this.componentsReferences.push(componentRef);
  }

  next(){
    // var carousal = new CarousalItemComponent("1","","","");
    // this.addComponent();
    // this.createComponent();
    // this.components[0].srcPath = Images[1];
    this.components[0].right = true;
  }

  prev(){
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
  
  captureLeftDoneEvent(event:AnimationEvent){
    
  }
  captureRightDoneEvent(event:AnimationEvent){
    
  }

}
