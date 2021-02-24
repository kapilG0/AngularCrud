import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {EnrollementService} from '../enrollement.service'
import {FormBuilder, FormGroup, FormControl} from '@angular/forms';
import {User} from '../user';
import {EditService} from '../edit.service'
declare var M:any;

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],

})
export class EditComponent implements OnInit {
// editForm: FormGroup;
// productID: any;
// productData: any;

editForm = new FormGroup({
  _id:new FormControl(''),
  FirstName: new FormControl(''),
  LastName: new FormControl(''),
  PhoneNumber: new FormControl(''),
  Email: new FormControl(''),
  Password: new FormControl(''),
  ConfirmPassword: new FormControl(''),

});

  private user:User;
  
  

  constructor(private enrollementService:EnrollementService,private actRoute:ActivatedRoute,private fb: FormBuilder) {
      // this.editForm = this.fb.group({
      //   FirstName: ['', Validators.required],
      //   LastName: ['', Validators.required],
      //   PhoneNumber: ['', Validators.required],
      //   Email: ['', Validators.required],

      //   Password: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(1000)])],
      //   ConfirmPassword: ['', Validators.compose([Validators.required])],
      //     })
     }

  ngOnInit() {
    this.actRoute.snapshot.params.id;
    this.enrollementService.getCurrentData(this.actRoute.snapshot.params.id).subscribe((result)=>{
      console.log(result,'res');
      // this.editForm.controls['_id'].setValue(this.productData['_id']);
      // this.editForm.controls['FirstName'].setValue(this.productData['FirstName']);
      // this.editForm.controls['LastName'].setValue(this.productData['LastName']);
      // this.editForm.controls['Email'].setValue(this.productData['Email']);
      // this.editForm.controls['PhoneNumber'].setValue(this.productData['PhoneNumber']);
      // this.editForm.controls['Password'].setValue(this.productData['Password']);
      // this.editForm.controls['ConfirmPassword'].setValue(this.productData['ConfirmPassword']);

      this.editForm = new FormGroup({
        _id:new FormControl(result['_id']),
        FirstName: new FormControl(result['FirstName']),
        LastName: new FormControl(result['LastName']),
        PhoneNumber: new FormControl(result['PhoneNumber']),
        Email: new FormControl(result['Email']),
        Password: new FormControl(result['Password']),
        ConfirmPassword: new FormControl(result['ConfirmPassword']),

      });
     });
    }
     updateData(form){
       console.log(form.value,'form data')
       this.enrollementService.putUser(form.value).subscribe((data)=>{
        form.reset();
        M.toast({html:'updated successfully',classes:'rounded'})
      })
      //  this.enrollementService.updateData(this.actRoute.snapshot.params.id,this.editForm.value).subscribe((result)=>{
      //    console.log(result,'data updated successfully')
      //  })
     }
    
  
    
        
    
  

}
