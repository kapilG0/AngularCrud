import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-demo',
  templateUrl: './child-demo.component.html',
  styleUrls: ['./child-demo.component.css']
})
export class ChildDemoComponent implements OnInit {
userLoggedIn=true;
  constructor() { }

  ngOnInit() {
  }
  greet(){
    alert('Hello user');
  }

}
