import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/shared/language.service';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit {
  allNumbers:any=[];
  modelName:string='numbers';
  constructor(private ls:LanguageService) { }

  ngOnInit(): void {
    this.getAllNumbers();
  }

  getAllNumbers(){
    this.ls.getCall(this.modelName).subscribe(res=>{
      console.log(res);
    })
  }


}
