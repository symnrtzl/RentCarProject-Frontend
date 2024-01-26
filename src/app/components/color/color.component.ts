import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Color } from '../../models/color';
import { ColorService } from '../../services/color.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-color',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './color.component.html',
  styleUrl: './color.component.css'
})
export class ColorComponent implements OnInit {

  colors: Color[] = [];
  currentColor : Color ;
  dataLoaded = false;

  constructor(private colorService:ColorService){}

  ngOnInit(): void {
    this.getColors();
  }

  getColors(){
    this.colorService.getColors().subscribe( response => {
      this.colors = response.data;
    })
  }

  setCurrentColor(color:Color){
    this.currentColor=color;
  }

  getCurrentColorClass(color:Color){
    if(color == this.currentColor){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }

  getAllColorClass(){
    if(!this.currentColor){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }

  }
/*
  clearCurrentColor(){ 
    this.currentColor = undefined; 
  }
*/
}
