import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Brand } from '../../models/brand/brand';
import { BrandService } from '../../services/brand.service';

@Component({
  selector: 'app-brand',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './brand.component.html',
  styleUrl: './brand.component.css'
})
export class BrandComponent implements OnInit {

  brands: Brand[] = [];
  dataLoaded=false;

  constructor(private brandService:BrandService){}

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response => {
      this.brands=response.data;
      this.dataLoaded=true;
    })
  }

}
