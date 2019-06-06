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

import { Injectable } from '@angular/core';

// <--Add this service here-->
import { HttpClient } from '@angular/common/http';
// <--Add end-->


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) { }
  createBag(newBag: any) {
    console.log('Adding a Bag!', newBag);
    return this._http.post('/api/createBag', newBag);
  }
  SerReadBag() {
    console.log('Reading a Bag!');
    return this._http.post('/api/readBag', null);
  }
  SerSendWholeBag(wholeBag) {
    console.log('sending this bag to backend: ', wholeBag);
    return this._http.post('/api/createBag', wholeBag);
  }
  SerDelete(id) {
    return this._http.delete('api/delete/' + id);
  }

}

// These are the routes to hit
// app.post('/api/readBag', disasters.readBag);
// app.post('/api/createBag', disasters.createBag);

