import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { NumbersComponent } from './numbers/numbers.component';
import { VerbsComponent } from './verbs/verbs.component';
import { NounsComponent } from './nouns/nouns.component';
import { PronounsComponent } from './pronouns/pronouns.component';
import { PrimengModule } from '../shared/primeng.module';


@NgModule({
  declarations: [UserComponent, NumbersComponent, VerbsComponent, NounsComponent, PronounsComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    PrimengModule
  ]
})
export class UserModule { }
