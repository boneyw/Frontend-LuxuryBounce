import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  isShown: boolean | undefined;

  checkdateform =  new FormGroup({

    theDateOfEvent: new FormControl(''),
    name: new FormControl(''),
    address: new FormControl(''),
    whatTypeOfEvent: new FormControl('')

  })

  constructor() { }

  ngOnInit(): void {
    this.isShown = false;
  }

  toggleShow() {
    this.isShown = ! this.isShown;
  }
  showform(){
    //this.toggleShow
    this.isShown = true
  }
  
}


