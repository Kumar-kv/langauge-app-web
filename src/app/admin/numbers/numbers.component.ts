import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LanguageService } from 'src/app/shared/language.service';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit {
  numbersForm:FormGroup;
  isEdit:boolean = false;
  submitted:boolean = false;
  allNumbers:any = [];
  cols:any=[];
  constructor(
    private ls:LanguageService,
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.initiateForm();
    this.getAllNumbers();
    this.cols=[
      {field:'english',header:'English'},
      {field:'target_translation',header:'French'},
      {field:'createdOn',header:'Created On'}
    ]
  }

  initiateForm(data?){
    this.numbersForm = this.fb.group({
      english:[data?data.english:'',Validators.required],
      target_translation:[data?data.target_translation:'',Validators.required],
      id:[data?data.id:'']
    });
  }

get f(){
  return this.numbersForm.controls;
}

  onSubmit(){
    this.submitted = true;
    if(this.numbersForm.invalid){
      return;
    }
    let fd:any=  this.numbersForm.value;
    for(let p in fd){
       p!=='id'?fd[p] = fd[p].trim().toLowerCase():'';
    }
      this.isEdit?this.updateRecord(fd):this.createNewRecord(fd);
  }

createNewRecord(fd){
  delete fd.id;
  this.ls.postCall(fd,"numbers").subscribe(res=>{
    this.numbersForm.reset();
    this.submitted = false;
    this.getAllNumbers();
  });
}

updateRecord(fd){
this.ls.patchCall(fd,"numbers").subscribe(res=>{
  this.numbersForm.reset();
  this.submitted = false;
  this.isEdit = false;
  this.getAllNumbers();
})
}

  onCancel(){
    this.initiateForm();
    this.isEdit = false;
  }


getAllNumbers(){
  this.ls.getCall('numbers',"DESC").subscribe(res=>{
    this.allNumbers = [];
    this.allNumbers = res;
  })
}

onEdit(data){
  this.isEdit = true;
  this.initiateForm(data);
}

onDelete(id){
  if(this.isEdit){
    return;
  }
this.ls.deleteCall(id,'numbers').subscribe(res=>{
  console.log(res);
  this.getAllNumbers();
})
}


}
