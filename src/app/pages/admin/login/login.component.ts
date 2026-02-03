import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObj :any={
    userName:'',
    password:''
  }

  constructor(private router:Router){}

  onLogin(){
    if(this.loginObj.userName==="srikanth.off07@gmail.com"&& this.loginObj.password==="Srikanth9052@"){
       this.router.navigateByUrl('/products')
    }else {
      alert ('Please enter correct credentials')
    }
  }
}
