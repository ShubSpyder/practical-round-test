import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginSucessComponent } from './login-sucess/login-sucess.component'
import { CreateNewUserComponent } from './create-new-user/create-new-user.component'
import { UserDataComponent } from './user-data/user-data.component'

const routes: Routes = [{
  path: '',
  component: LoginComponent
},
{
  path: 'loginSucess',
  component: LoginSucessComponent
},
{
  path: 'addUser',
  component: CreateNewUserComponent
},{
  path: 'userData',
  component: UserDataComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
