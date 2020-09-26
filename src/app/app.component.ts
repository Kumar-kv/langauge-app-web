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
  constructor(private service:LanguageService, private router:Router) {

  }
  ngOnInit() {
    this.showHeader = localStorage.getItem("law_user")==null?false:true;
  }
  onChildOutput(e){
      this.showHeader = e;
  }

  onLogout(){
    this.service.logout().subscribe(res=>{
      console.log(res);
      this.router.navigate([""]);
      this.showHeader = false;  
    })
  }

}


