import { Component, OnInit } from '@angular/core';
import { user } from '../model/user.model';
import { Router }from '@angular/router'

@Component({
  selector: 'app-create-new-user',
  templateUrl: './create-new-user.component.html',
  styleUrls: ['./create-new-user.component.css'],
})
export class CreateNewUserComponent implements OnInit {
  user = new user();
  dataarray = [];
  emailValid = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.user = new user();
    this.dataarray.push(this.user);
  }

  addForm() {
    this.user = new user();
    this.dataarray.push(this.user);
  }
  removeForm(index){
    this.dataarray.splice(index);
  }
  onSubmit() {
    console.log(this.dataarray)
    localStorage.setItem('Users', JSON.stringify(this.dataarray));

    alert("new user created successfully!")
    this.router.navigate(['userData'])
  }

  getData(){
    const newData = localStorage.getItem('Users')
    console.log(JSON.parse(newData));
  }

  checkEmail(event, index){
    console.log(event.target.value,"  ",index);
    const regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
    const email = event.target.value;
    regex.test(email) || email === '' || email === undefined ? this.emailValid = true : this.emailValid = false;
  }

  goToLogin = () => this.router.navigate(['']);
}
