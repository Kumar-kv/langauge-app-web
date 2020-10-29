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
  cols:any=[];
  constructor(private ls:LanguageService) { }

  ngOnInit(): void {
    this.cols=[
      {field:'english',header:'English'},
      {field:'target_translation',header:'French'},
      {field:'createdOn',header:'Created On'}
    ]
    this.getAllNumbers();
  }

  getAllNumbers(){
    this.ls.getCall(this.modelName,"ASC").subscribe(res=>{
      console.log(res);
      this.allNumbers = res;
    })
  }


}
