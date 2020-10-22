import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { PrimengModule } from '../shared/primeng.module';
import { NounsComponent } from './nouns/nouns.component';
import { NumbersComponent } from './numbers/numbers.component';
import { PronounsComponent } from './pronouns/pronouns.component';
import { VerbsComponent } from './verbs/verbs.component';


@NgModule({
  declarations: [AdminComponent, NounsComponent, NumbersComponent, PronounsComponent, VerbsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    PrimengModule,
    ReactiveFormsModule,
     FormsModule,
     HttpClientModule
  ]
})
export class AdminModule { }
