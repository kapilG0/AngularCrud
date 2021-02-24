import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

import { map } from 'rxjs/operators';
// import {topromise} from 'rxjs/operators'
import { User } from './user'

@Injectable({
  providedIn: 'root'
})
export class EditService {
  selectedUser1:User;
//   Users:User[];
  readonly _url='http://localhost:8000/userdatafromdb';
  constructor(private _http:HttpClient) { }
//   save(user:User){
//     return this._http.post<any>(this._url,user);
//   }
//   getUserList(){
//     return this._http.get(this._url);
//   }
//   putUser(user:User){
//     return this._http.put(this._url+ `/${user._id}`,user);
//   }
//   deleteUser(_id:string){
//     return this._http.delete(this._url+`/${_id}`)
//   }

}

