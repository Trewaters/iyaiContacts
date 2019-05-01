import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { cntIyai } from '../Models/contact';

const httpOptions ={
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const uriCnt = 'http://localhost:4200/contact/';

@Injectable({
  providedIn: 'root'
})
export class CntMongoService {

  // uri = ''
  uri: string = uriCnt;
  //uri: string = 'http://localhost:4200/contact/';
  //uri = './contact/newCnt'; // add contact to mongodb

  contact: cntIyai;

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?:T){
    return(error:any): Observable<T> => {
      console.error(error); // log error to console
      return of (result as T);
    }
  }

  addContact(vContact) {
    this.uri= 'http://localhost:4200/contact/addCnt/';
    // this.uri += 'addCnt/';
    // console.log("vContact...", vContact);
    this.contact = vContact;
    this.http.post<cntIyai>(this.uri, this.contact)
      .subscribe(res => console.log('addContact api call...Done'));
  }

  getContacts() {
    this.uri= 'http://localhost:4200/contact/getCnts/';
    // this.uri += 'getCnts/';
    return this.http.get(this.uri).map(res => {
      return res;
    });
  };

  searchContacts(nmFull) {
    // console.log('CntMongoService-searchContacts-nmFull...\n',nmFull.value);
    this.uri= 'http://localhost:4200/contact/searchCnts/' + nmFull.value;
    // this.uri += 'searchCnts/' + nmFull.value;
    return this
      .http
      .get(this.uri)
      .map(res => {
        // console.log('CntMongoService-searchContacts-res...\n', res); // returns an array of objects [{}]
        return res;
      })
  }

  editContact(vEditContact) {
    this.uri= 'http://localhost:4200/contact/editCnt/' + vEditContact.nmFull;
    // this.uri += 'editCnt/' + vEditContact.nmFull;

    // console.log('CntMongoService-vEditContact...\n', vEditContact);

    this.contact = vEditContact;

    return this
      .http
      .post<cntIyai>(this.uri, this.contact)
      .subscribe((res) => { console.log("editContact... done") })
  };

  deleteContact(vId) {
    this.uri= 'http://localhost:4200/contact/deleteCnt/' + vId;
    // this.uri += 'deleteCnt/' + vId;

    console.log("deleteContact...this.uri...", this.uri);

    return this
    .http
    .get(this.uri)
    .map(res =>{
      return res;
    })
   };
}
