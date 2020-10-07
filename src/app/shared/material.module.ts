import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from "@angular/material/dialog";
import { MatTableModule } from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import{ MatSidenavModule } from '@angular/material/sidenav';
const modules = [
  CommonModule,
  MatButtonModule,
  MatDialogModule,
  MatSidenavModule,
  MatTableModule,
]
@NgModule({
  declarations: [],
  imports: [...modules],
  exports: [...modules],
})

export class MaterialModule {
}