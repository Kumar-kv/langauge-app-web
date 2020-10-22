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
  realm:string;
  expandNav:boolean=false;
  activeTabId:number=1;
  constructor(private service:LanguageService, private router:Router) {
    
  }
  ngOnInit() {
    this.userMenu=[
      {tabInd:1,name:'Dashboard',path:'', icon:'fa-home'},
      {tabInd:2,name:'Noun',path:'nouns', icon:'fa-address-book'},
      {tabInd:3,name:'Number',path:'numbers', icon:'fa-eercast'},
      {tabInd:4,name:'Pronoun',path:'pronouns', icon:'fa-superpowers'},
      {tabInd:5,name:'Verb',path:'verbs', icon:'fa-thermometer-quarter'},
    ];
    this.adminMenu=[
      {tabInd:1,name:'Dashboard',path:'', icon:'fa-home'},
      {tabInd:2,name:'Noun',path:'nouns', icon:'fa-address-book'},
      {tabInd:3,name:'Number',path:'numbers', icon:'fa-eercast'},
      {tabInd:4,name:'Pronoun',path:'pronouns', icon:'fa-superpowers'},
      {tabInd:5,name:'Verb',path:'verbs', icon:'fa-thermometer-quarter'}
    ];
    this.onChildOutput();
    localStorage.getItem("activeTabId")==null?'':this.activeTabId = JSON.parse(localStorage.getItem("activeTabId"));
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
      localStorage.removeItem("activeTabId");
      this.showHeader = false;  
      this.showSideMenu = false;
      this.sideMenuItems=[];
      this.expandNav=false;
      this.activeTabId = 1;
    })
  }

  onMouseOver(){
    this.expandNav=true;
  }


  onMouseOut(){
    this.expandNav=false;
  }



  onMenuItemClick(e){
    console.log(e.path);
    this.activeTabId = e.tabInd;
    localStorage.setItem("activeTabId", JSON.stringify(this.activeTabId));
    this.router.navigate([this.realm+"/"+e.path]);
  }

}


