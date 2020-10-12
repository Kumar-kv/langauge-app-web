import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from './shared/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { 
  title = 'language-app-web';
  showHeader: boolean = false;
  showSideMenu:boolean = false;
  userMenu:any=[];
  adminMenu:any=[];
  sideMenuItems:any=[];
  realm:String;
  expandNav:boolean=false;
  constructor(private service:LanguageService, private router:Router) {
    
  }
  ngOnInit() {
    this.userMenu=[
      {tabInd:1,name:'UM 1',path:'um1', icon:'fa-address-book'},
      {tabInd:2,name:'UM 2',path:'um2', icon:'fa-eercast'},
      {tabInd:3,name:'UM 3',path:'um3', icon:'fa-superpowers'},
      {tabInd:4,name:'UM 4',path:'um4', icon:'fa-thermometer-quarter'},
    ];
    this.adminMenu=[
      {tabInd:1,name:'AM 1',path:'am1', icon:'fa-address-book'},
      {tabInd:2,name:'AM 2',path:'am2', icon:'fa-eercast'},
      {tabInd:3,name:'AM 3',path:'am3', icon:'fa-superpowers'},
      {tabInd:4,name:'AM 4',path:'am4', icon:'fa-thermometer-quarter'},
    ];
    this.onChildOutput();
  }

  onChildOutput(e?){
    this.showHeader = localStorage.getItem("law_user")==null?false:true;
    this.showSideMenu = localStorage.getItem("law_user")==null?false:true;
    localStorage.getItem("law_user")!=null?this.realm=JSON.parse(localStorage.getItem("law_user")).user.realm:'';
    this.realm=='admin'?this.sideMenuItems=this.adminMenu:this.realm=='user'?this.sideMenuItems=this.userMenu:'';
  }

  onLogout(){
    this.service.logout().subscribe(res=>{
      console.log(res);
      this.router.navigate([""]);
      localStorage.removeItem("law_user");
      this.showHeader = false;  
      this.showSideMenu = false;
      this.sideMenuItems=[];
      this.expandNav=false;
    })
  }

  onMouseOver(){
    this.expandNav=true;
  }


  onMouseOut(){
    this.expandNav=false;
  }

}


