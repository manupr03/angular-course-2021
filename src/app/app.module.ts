import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome'
import { CalcAppComponent } from './calc-app/calc-app.component';
import { StudentModule } from './student/student.module'
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { EditorComponent } from './editor/editor.component';
import { ProductEntryComponent } from './product-entry/product-entry.component';
import { DateComponent } from './date/date.component';
import { ProductlistComponent } from './productlist/productlist.component'
import { HttpClientModule } from '@angular/common/http'



@NgModule({
  declarations: [
    AppComponent,
    CalcAppComponent,
    EditorComponent,
    ProductEntryComponent,
    DateComponent,
    ProductlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    StudentModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
