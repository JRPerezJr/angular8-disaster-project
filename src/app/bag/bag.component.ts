/**
Copyright 2019 Juan Perez

//    Licensed under the Apache License, Version 2.0 (the "License");
//    you may not use this file except in compliance with the License.
//    You may obtain a copy of the License at

//        http://www.apache.org/licenses/LICENSE-2.0

//    Unless required by applicable law or agreed to in writing, software
//    distributed under the License is distributed on an "AS IS" BASIS,
//    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//    See the License for the specific language governing permissions and
//    limitations under the License.
*/

import { Component, OnInit, Input } from '@angular/core';

// <--Add these modules here-->
import { HttpService } from './../http.service';
import { Router } from '@angular/router';
// <--Add end-->

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.css']
})
export class BagComponent implements OnInit {
  @Input() receivedBag: {};
  newBag: any; // <--You will need these here newPlay is coming from the HTML-->
  // receivedBag = {};
  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    this.readBag();
    this.newBag = {item: '', weight: ''};
    // <--This is where the form data is picked up. MAKE SURE THEY MATCH YOUR MODELS!!!!-->
  }
  addBag() {
    this._httpService.createBag(this.newBag).subscribe(data => {
      console.log('API RESPONSE BABY!', data);
      console.log(data);
      this.newBag = {item: '', weight: ''};
      this._router.navigate(['/disaster/bag']); // <--send them back to the main page-->
    });
  }

  readBag() {
    var tempObservable = this._httpService.SerReadBag();
    tempObservable.subscribe((data:any)=>{
      this.receivedBag = data;
      console.log('we read the backend bag:', data);
      console.log('stored in receivedBag:', this.receivedBag);
      // if(!data.errors){
      //   this._router.navigate(['/disaster/checklist']);
      // }
    })
  }

  deleteItem(id:any) {
    console.log('id', id);
    // this._httpService.SerDelete(id);
    // console.log('bags delete');

    var observable = this._httpService.SerDelete(id);
    observable.subscribe((data:any) => {
      console.log(data);
      this.readBag();
      // if(!data.errors){
      //   this._router.navigate(['/checklist']);
      // }
    })
  }
  // readBag(){

  // }
}
