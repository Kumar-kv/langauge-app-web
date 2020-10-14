import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';
import { NumbersComponent } from './numbers/numbers.component';
import { VerbsComponent } from './verbs/verbs.component';
import { NounsComponent } from './nouns/nouns.component';
import { PronounsComponent } from './pronouns/pronouns.component';
const routes: Routes = [
  { path: '', component: UserComponent },
  {path: 'numbers', component: NumbersComponent},
  {path: 'nouns', component: NounsComponent},
  {path: 'verbs', component: VerbsComponent},
  {path: 'pronouns', component: PronounsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
