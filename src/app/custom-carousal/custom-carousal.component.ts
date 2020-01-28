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

enum ItemPosition{
  left,center,right
}
@Component({
  selector: 'app-custom-carousal',
  templateUrl: './custom-carousal.component.html',
  styleUrls: ['./custom-carousal.component.css'],
})
export class CustomCarousalComponent implements OnInit {

  Images = Images;
  max = Images.length;
  currSize = 0;
  currCenter = 0;
  components = [];

  @ViewChild('ViewContainerRef', { read: ViewContainerRef,static : true }) VCR: ViewContainerRef;

  constructor(private CFR: ComponentFactoryResolver) { }

  ngOnInit() {
    this.addComponent(0,ItemPosition.left);
    this.addComponent(1,ItemPosition.left);
    this.components[0].instance.expandRight=true;
  }

  addComponent(index:number,pos:ItemPosition) {
    let componentFactory = this.CFR.resolveComponentFactory(CarousalItemComponent);
    let componentRef: ComponentRef<CarousalItemComponent> = this.VCR.createComponent(componentFactory);
    let component = componentRef.instance;
    component.srcPath = Images[index];
    switch(pos){
      case ItemPosition.left:
        component.divClassName = "side-item";
        component.imageClassName = "left";
        break;
      case ItemPosition.center:
        component.divClassName = "center-item";
        component.imageClassName = "center";
        break;
      case ItemPosition.right:
        component.divClassName = "side-item";
        component.imageClassName = "right";
        break;
    }
    component.id = "image-"+index;
    this.components.push(componentRef);
    this.currSize = this.currSize+1;
  }

  removeComponent(index: number) {
    if (this.VCR.length < 1)
      return;
    let componentRef = this.components[index];
    let component: CarousalItemComponent = <CarousalItemComponent>componentRef.instance;
    let vcrIndex: number = this.VCR.indexOf(componentRef)
    this.VCR.remove(vcrIndex);
    // this.components = this.components.slice(1,this.currSize);
    this.currSize = this.currSize-1;
    // this.components = this.components.filter(x => x.instance.id !== component.id);
  }

  next(){
    this.components[this.currCenter].instance.shrinkRight = true;
    this.components[this.getNext()].instance.expandRight = true;
    this.currCenter = (this.currCenter+1)%this.max;
    this.addComponent(this.getNext(),ItemPosition.left);
    // if(this.currSize>3)
    //   this.removeComponent(0);
  }

  prev(){
    this.removeComponent(0);
    // this.components[this.currCenter].shrinkLeft = true;
    // this.components[this.getPrev()].expandLeft = true;
  }

  getNext(){
    return (this.currCenter+1)%this.max;
  }

  getPrev(){
    return (this.currCenter-1+this.max)%this.max;
  }
  
}
