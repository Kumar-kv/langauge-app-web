import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {CardModule} from 'primeng/card';
import {DialogModule} from 'primeng/dialog';
import {FileUploadModule} from 'primeng/fileupload';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {ToastModule} from 'primeng/toast';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {InputSwitchModule} from 'primeng/inputswitch';
import {CalendarModule} from 'primeng/calendar';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {MultiSelectModule} from 'primeng/multiselect';
import {RadioButtonModule} from 'primeng/radiobutton';
import {RatingModule} from 'primeng/rating';
import {DataViewModule} from 'primeng/dataview';
import {VirtualScrollerModule} from 'primeng/virtualscroller';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {ToolbarModule} from 'primeng/toolbar';
import { MessageService } from 'primeng/api';
import { CarouselModule } from 'primeng/carousel';
import {TooltipModule} from 'primeng/tooltip';
import {SliderModule} from 'primeng/slider';
import {CheckboxModule} from 'primeng/checkbox';

const primeModules = [
  CommonModule,
  InputTextModule,
  ButtonModule,
  TableModule,
  CardModule,
  DialogModule,
  FileUploadModule,
  DropdownModule,
  ProgressSpinnerModule,
  ToastModule,
  ToggleButtonModule,
  InputSwitchModule,
  CalendarModule,
  InputTextareaModule,
  MultiSelectModule,
  RadioButtonModule,
  RatingModule,
  DataViewModule,
  VirtualScrollerModule,
  ScrollPanelModule,
  ToolbarModule,
  CarouselModule,
  TooltipModule,
  SliderModule,
  CheckboxModule
]

@NgModule({
  declarations: [],
  imports: [...primeModules],
  exports:[...primeModules],
  providers:[MessageService]
})
export class PrimengModule { }
