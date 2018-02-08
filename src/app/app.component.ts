import { Component, OnInit, Input } from '@angular/core';
import { GemModel } from '../gemModel';
import { cartmodel } from '../cartmodel';
import { cartitemmodel } from '../cartitemmodel';
import { HttpClient, HttpHeaders} from '@angular/common/http'; // <-- import first
 
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

  constructor(private httpClient: HttpClient){      // < -- create constructor second

  }

  ngOnInit() {
    // console.log(JSON.stringify(this.gems)); <--wrong way to get JSON
    
    //Angular way of requesting data 'Service'
    //bring in client service 
    // specify that "get" return <GemModel[]>
    this.httpClient.get<GemModel[]>('/assets/gems.json').subscribe(results => {this.gems=results});  // < -- get JSON third


  }

  gems: GemModel[];
}





