import { Component } from '@angular/core';
import { EnrollementService } from './enrollement.service';
import {User} from './user'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // user=new User('','','','','','')
  // constructor(private _enrollementservice:EnrollementService){}
  // Register(regForm:any){  
  //   console.log(regForm); 
  //   console.log(regForm.value,'jh') 
  // } 
  // onSubmit(){
  //   this._enrollementservice.save(this.user).subscribe(data=>console.log('success',data),error=>console.error(error));
    
    
  //   //  console.log(this.user,'m')
  // }
}
