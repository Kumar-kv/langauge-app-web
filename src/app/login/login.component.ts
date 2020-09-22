import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  regForm:FormGroup;
  isLogin:boolean = true;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {

    this.initiateLFOrm(); 
    this.initiateRFOrm(); 
  }


  initiateLFOrm(){
    this.loginForm = this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
    });
  }

  initiateRFOrm(){
    this.regForm = this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required],
      c_pwd:['',Validators.required]
    });
  }

  onLogin(fd){
    console.log(fd);
  }

  onRegestration(fd){
    console.log(fd);
  }

}
