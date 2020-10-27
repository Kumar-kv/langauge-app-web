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
  constructor(
    private ls:LanguageService,
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.initiateForm();
  }

  initiateForm(){
    this.numbersForm = this.fb.group({
      english:['',Validators.required],
      target_translation:['',Validators.required]
    });
    console.log(this.numbersForm.controls);
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
        fd[p] = fd[p].trim().toLowerCase();
    }
    console.log(fd);
    return;
    this.ls.postCall(fd,"numbers").subscribe(res=>{
      console.log(res);
      this.numbersForm.reset();
      this.submitted = false;
    })
  }


  onCancel(){
    this.initiateForm();
    this.isEdit = false;
  }

}
