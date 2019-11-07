import { ProductServiceService } from './../../product-service.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  i:number=0;
  j:number=0;
  
  constructor(ser : ProductServiceService ) {this.i++;
    this.i= ser.count++;
  }
  
  ngOnInit() {
    
    this.j++;
    
    alert(this.i);
  }

  ngOnDestroy(){
    alert("destroyed")
  }
  
}
