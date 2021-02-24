import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Observable,Subject} from 'rxjs';

import { map } from 'rxjs/operators';
// import {topromise} from 'rxjs/operators'
import { User } from './user'

@Injectable({
  providedIn: 'root'
})
export class EnrollementService {
  selectedUser:User;
  Users:User[];
  private _userdetailsource=new Subject<any>();
  userdetailsource$=this._userdetailsource.asObservable()
  readonly _url='http://localhost:8000/userdatafromdb';
  constructor(private _http:HttpClient) { }
  save(user:User){
    return this._http.post<any>(this._url,user);
  }
  getUserList(){
    return this._http.get(this._url);
  }
  putUser(user:User){
    return this._http.put(this._url+ `/${user._id}`,user);
  }
  deleteUser(_id:string){
    return this._http.delete(this._url+`/${_id}`)
  }
  getCurrentData(_id:string){
    console.log(_id,'get id')
    return this._http.get(this._url+`/${_id}`)
  }
  updateData(id,data){
    return this._http.put(this._url+`/${id}`,data)
  }
  // setter(user:User){
  //   this.selectedUser=user;
  // }
  // private eventCallback=new Subject<any>();
  // eventCallback$=this.eventCallback.next(this.getter)
  // getter(user:User){
  // console.log(user,'this is selected user')
  //   // return (user);
  //   this._userdetailsource.next(user);
  // }
  // getter(){
  //   return this.selectedUser;
  // }
}

