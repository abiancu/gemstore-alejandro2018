import { Component, OnInit, Input } from '@angular/core';

import { navModel } from "../../navModel";
import { GemModel} from "../../gemModel";
import { cartmodel } from '../../CartModel';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
 @Input()cart: cartmodel;
  links : navModel[] = [{
    text: 'Home',
    href: '/Home'
  }, {
    text: 'Account',
    href: '/Account'
  }, {
    text: 'Cart',
    href: '/Cart'
  }];

  constructor() { }

  ngOnInit() {
    
  }

}
