import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/products.service';
import { Router } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
  selector: 'cart',
  providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit{
  intoCart: boolean;

  constructor(private service: ProductService, private location: Location, private router: Router){}

  ngOnInit() {
    console.log(this.location.path());
    if (this.location.path() == '/cart') {
      this.intoCart = true;
    }
    else{
      this.intoCart = false;
    }
  }

  changeButton() {
    if (this.location.path() == '/cart') {
      this.router.navigate(['']);
      this.intoCart = false;
    } else {
      this.router.navigate(['/cart']);
      this.intoCart = true;
    }
  }


}
