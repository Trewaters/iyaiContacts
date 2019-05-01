import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './Components/app.component';
import { ContactFormComponent } from './Components/contact-form/contact-form.component';
import { SearchComponent } from './Components/search/search.component';
import { DisplayAllComponent } from './Components/display-all/display-all.component';
import { ImportZohoComponent } from './Components/import-zoho/import-zoho.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';

import { CntMongoService } from './Services/cnt-mongo.service';
import { EditComponent } from './Components/edit/edit.component';
import { DeleteCntComponent } from './Components/delete-cnt/delete-cnt.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    SearchComponent,
    DisplayAllComponent,
    ImportZohoComponent,
    PageNotFoundComponent,
    EditComponent,
    DeleteCntComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers:[CntMongoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
