import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { NounsComponent } from './nouns/nouns.component';
import { NumbersComponent } from './numbers/numbers.component';
import { PronounsComponent } from './pronouns/pronouns.component';
import { VerbsComponent } from './verbs/verbs.component';
const routes: Routes = [
  { path: '',
   component: AdminComponent,
   children:[
    {path: 'numbers', component: NumbersComponent},
    {path: 'nouns', component: NounsComponent},
    {path: 'verbs', component: VerbsComponent},
    {path: 'pronouns', component: PronounsComponent}
   ]
   }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
