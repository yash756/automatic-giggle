import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ngOnInit(): void {
  }
  username: string;
  password: string;
  message: string;

  constructor(private router: Router){

  }

  login(){
    if(this.username == 'abc' && this.password == '123'){
      sessionStorage.setItem('loggedInUsername', this.username);
      this.router.navigate(['dashboard']);
    }
    else
      this.message = 'Invalid data';
  }

}
