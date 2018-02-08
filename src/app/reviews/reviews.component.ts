import { Component, OnInit, Input } from '@angular/core';

import { GemModel }from '../../gemModel';
import { ReviewModel} from '../../ReviewModel';
import { Md5} from 'ts-md5/dist/md5';


@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  @Input() gem: GemModel;
  newReview: ReviewModel;


  constructor() {  }
  //TODO: this does not save reviews! I should figure out a way to send my new review to a "persisted data store"
  
  generateAvatarUrl(email: string) {
    return "https://2.gravatar.com/avatar/" + Md5.hashStr(email);
  }
  
  
  submitClicked() {
    this.gem.reviews.push(this.newReview);
    
    this.ngOnInit();
  }

  // md5 fucntions
 

  ngOnInit() {
    this.newReview = {
      id: -1,
      createddate: "",
      body: "",
      rating: 0,
      author: ""
    }
  }

}
