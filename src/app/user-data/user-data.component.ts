import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  constructor() { }
  
  userData: object[];

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData(){
    const newData = localStorage.getItem('Users')
    console.log(JSON.parse(newData));
    this.userData = JSON.parse(newData);
  }

}
