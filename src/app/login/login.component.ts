import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  EmailValidator,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  isDisable = false;
  emailValid = true;
  passwordValid = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  userData = [
    {email: 'shubham@email.com',password: '123'},
    { email: 'eminem@email.com', password: '123' },
    { email: 'ari@email.com', password: '123' },
  ];

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.form.valid ? this.isDisable = false : this.isDisable = true
  }

  onSubmit() {
    const found = this.userData.some(user => {
      return user.email === this.form.controls.email.value && user.password === this.form.controls.password.value
    })

    found ? this.router.navigate(['loginSucess']) : alert('Wrong username or password');
  }

  emailChange(event){
    const regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
    const email = event.target.value;
    regex.test(email) || email === '' || email === undefined ? this.emailValid = true : this.emailValid = false;
  }

  passwordChange (event) { event.target.value ? this.passwordValid === true : this.passwordValid === false }

  goToAddUser = () => this.router.navigate(['addUser']);
}
