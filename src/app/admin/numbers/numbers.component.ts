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
    })
  }

  onSubmit(){
    
  }


  onCancel(){
    this.initiateForm();
    this.isEdit = false;
  }

}
