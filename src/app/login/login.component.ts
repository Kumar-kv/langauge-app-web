import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  @Output() showHeaderEmit = new EventEmitter<boolean>();
  constructor(private fb:FormBuilder, private service:LanguageService, private router:Router) { }

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
    let pattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    pattern.test(fd.username)?(fd.email = fd.username, delete fd.username):"";
    this.service.login(fd).subscribe(res=>{
      let response:any = {};
      response = res;
      localStorage.setItem("law_user", JSON.stringify(response));
      let realm = response.user.realm;
      this.router.navigate([realm]);
      this.showHeaderEmit.emit(true);
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
