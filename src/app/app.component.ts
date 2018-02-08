import { Component, OnInit, Input } from '@angular/core';
import { GemModel } from '../gemModel';
import { cartmodel } from '../cartmodel';
import { cartitemmodel } from '../cartitemmodel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  cart: cartmodel = {
    totalprice: 0,
    totalquantity: 0,
    items: []
  }

  ngOnInit() {
    console.log(JSON.stringify(this.gems))
  }

  gems: GemModel[] = [{
    id: 1,
    name: 'Dodecahedron',
    price: 2.95,
    description: 'Some gems have hidden qualities beyond their lustre, beyond their shine... Dodecahedron is one of those gems',
    fullImagePath: './assets/gem-01.gif',
    inventory: 10,
    colors: ["red", "green", "blue"],
    reviews: [{
      id: 1,
      createddate: "Tuesday",
      author: 'alejandro@biancucci.com',
      rating: 5,
      body: 'I love this product'
    }]
  },
  {
    id: 2,
    name: 'Dodecahedron',
    price: 2.95,
    description: 'The origin of the pentagonal gem is unknown, hence it\'s low value',
    fullImagePath: './assets/gem-02.gif',
    inventory: 0,
    colors: ["red", "green", "blue"],
    reviews: [{
      id: 6,
      createddate: "Tuesday",
      author: 'alejandro@biancucci.com',
      rating: 5,
      body: 'I love this product'
    }]
  },
  {
    id: 3,
    name: 'Dodecahedron',
    price: 2.95,
    description: 'Some gems have hidden qualities beyond their lustre, beyond their shine... Dodecahedron is one of those gems',
    fullImagePath: './assets/gem-03.gif',
    inventory: 2,
    colors: ["red", "green", "blue"],
    reviews: [{
      id: 4,
      createddate: "Monday",
      author: 'alejandro@biancucci.com',
      rating: 5,
      body: 'woooooooooop'
    }]
  }
    ,
  {
    id: 4,
    name: 'Dodecahedron',
    price: 2.95,
    description: 'Some gems have hidden qualities beyond their lustre, beyond their shine... Dodecahedron is one of those gems',
    fullImagePath: './assets/gem-04.gif',
    inventory: 4,
    colors: ["red", "green", "blue"],
    reviews: [{
      id: 3,
      createddate: "Tuesday",
      author: 'alejandro@biancucci.com',
      rating: 4,
      body: 'I love this product'
    }]
  }]
}





