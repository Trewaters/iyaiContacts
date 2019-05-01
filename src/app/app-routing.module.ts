import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactFormComponent } from './Components/contact-form/contact-form.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { DisplayAllComponent } from './Components/display-all/display-all.component';
import { ImportZohoComponent } from './Components/import-zoho/import-zoho.component';
import { SearchComponent } from './Components/search/search.component';
import { EditComponent } from './Components/edit/edit.component';
import { DeleteCntComponent } from './Components/delete-cnt/delete-cnt.component';

/**
 *  Routes for the main controls of the application
 */
const routes: Routes = [
  {
    path: 'contactForm',
    component: ContactFormComponent,
    data: { title: 'Contact Form' }
  }
  , { path: 'displayAll', component: DisplayAllComponent, data: { title: "Display Contacts" } }
  , { path: 'importZoho', component: ImportZohoComponent, data: { title: 'Import Zoho Contacts' } }
  , { path: 'search', component: SearchComponent, data: { title: 'Search Contacts' } }
  , { path: 'editContact', component: EditComponent, data: { title: 'Edit Contacts' } }
  , { path: 'deleteContact', component: DeleteCntComponent, data: { title: 'Delete Contacts' } }
  , { path: '**', component: PageNotFoundComponent, data: { title: 'PAGE NOT FOUND!' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
