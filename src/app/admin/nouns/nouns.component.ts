import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LanguageService } from 'src/app/shared/language.service';
@Component({
  selector: 'app-nouns',
  templateUrl: './nouns.component.html',
  styleUrls: ['./nouns.component.css']
})
export class NounsComponent implements OnInit {
  constructor(
      private ls:LanguageService
  ) { }

  ngOnInit(): void {
  }

}
