import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {EnrollementService} from '../enrollement.service';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router'
import {EditService} from '../edit.service'
declare var M:any;
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {

  constructor(private enrollementService:EnrollementService,private router:Router,private editService:EditService){}

  ngOnInit() {
    this.resetForm();
    this.refreshUserList();
  }

  // Register(regForm:any){  
  //   console.log(regForm); 
  //   console.log(regForm.value,'jh') 
  // } 
  resetForm(form?:NgForm){
    if(form)
      form.reset();
    this.enrollementService.selectedUser={
      _id:"",
      FirstName:"",
      LastName:"",
      PhoneNumber:"",
      Email:"",
      Password:"",
      ConfirmPassword:""
      }
    
  }
  onSubmit(form:NgForm){
    if(form.value._id==""){
    console.log(form.value,'val');
   this.enrollementService.save(form.value).subscribe((data)=>{
     console.log(data,'data')
    //  console.log('success',data),error=>console.error(error)
    this.resetForm(form);
    this.refreshUserList();

    M.toast({html:'saved successfully',classes:'rounded'})
    });
  }else{
    this.enrollementService.putUser(form.value).subscribe((data)=>{
      this.resetForm(form);
      this.refreshUserList();
      M.toast({html:'updated successfully',classes:'rounded'})
    })
  }
  }
  refreshUserList(){
    this.enrollementService.getUserList().subscribe((res)=>{
      this.enrollementService.Users=res as User[]
    })
  }
  // onEdit(user:User){
  //   this.enrollementService.selectedUser=user;
  //   console.log(this.enrollementService.selectedUser,'selected user')
    
  // }
  
  
  
  onDelete(_id:string,form:NgForm){
    if(confirm('Are you sure to delete this record')==true){
      this.enrollementService.deleteUser(_id).subscribe((data)=>{
        this.refreshUserList();
        this.resetForm();
        M.toast({html:'Delete successfully',classes:'rounded'})
      })
    }
  }
}
