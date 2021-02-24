import { Component, Input, OnInit,EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() loggedIn:boolean;
  @Output() greetEvent=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  callParentGreet(){
    // alert('sending a message');
    this.greetEvent.emit();
  }

}
