import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousal-item',
  templateUrl: './carousal-item.component.html',
  styleUrls: ['./carousal-item.component.css']
})
export class CarousalItemComponent implements OnInit {
  imageClassName:String;
  id:String;
  srcPath:String;
  divClassName:String;

  constructor(id:String,imageClassName:String,divClassName:String,srcPath:String) {
    this.id = id;
    this.imageClassName = imageClassName;
    this.divClassName = divClassName;
    this.srcPath = srcPath;
   }

  ngOnInit() {
  }

}
