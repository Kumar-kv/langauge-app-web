import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LanguageService } from '../shared/language.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  regForm:FormGroup;
  isLogin:boolean = true;
  constructor(private fb:FormBuilder, private service:LanguageService) { }

  ngOnInit(): void {
    this.service.getCall('users').subscribe(res=>{
      console.log(res);
    })
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
    this.service.login(fd).subscribe(res=>{
      console.log(res);
    })
  }

  onRegestration(fd){
    if(fd.password!==fd.c_pwd){
      alert("Passwords should be same");
      return;
    }
    delete fd.c_pwd;
    fd.created_on = new Date();
    fd.realm = 'user';
    this.service.userRegister(fd).subscribe(res=>{
      console.log(res);
    })
  }

}
