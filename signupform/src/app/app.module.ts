import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { RegistrationComponent } from './registration/registration.component';
import {RouterModule,Routes} from '@angular/router';
import { EditComponent } from './edit/edit.component';
import {EnrollementService} from '../app/enrollement.service';
import { ChildDemoComponent } from './child-demo/child-demo.component';
import { ChildComponent } from './child-demo/child/child.component'
const appRoutes:Routes=[
  {path:'',redirectTo:'/registration',pathMatch:'full'},
  {path:'registration',component:RegistrationComponent},
  // ,children:[
  //     {path:'',component:RecepieStartComponent},
  //     {path:'new',component:RecepieEditComponent},
  //     {path:':id',component:RecepiesDetailComponent},
  //     {path:':id/edit',component:RecepieEditComponent}
  // ]

   {path:'edit/:id',component:EditComponent},
   {path:'child-demo',component:ChildDemoComponent,
   children:[{path:'child',component:ChildComponent}]},
   {path:'lazy',loadChildren:'./lazy/lazy.module#LazyModule'}

]
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    EditComponent,
    ChildDemoComponent,
    ChildComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
     RouterModule.forRoot(appRoutes)
  ],
  providers: [EnrollementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
