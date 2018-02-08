import { Component, OnInit, Input } from '@angular/core';

import { GemModel } from '../../gemModel';
import { cartmodel } from '../../CartModel';



@Component({
  selector: 'app-gem',
  templateUrl: './gem.component.html',
  styleUrls: ['./gem.component.css']
})
export class GemComponent implements OnInit {

  @Input() gem: GemModel;
  @Input() cart: cartmodel;

  addToCart(){
    this.gem.inventory = this.gem.inventory - 1;
    this.cart.totalquantity = this.cart.totalquantity + 1;
  }

  constructor() { }

  ngOnInit() {
  }

}