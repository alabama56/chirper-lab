import { RouterModule, Routes } from '@angular/router';
import { NgModule }             from '@angular/core';

import { ListComponent } from './list/list.component';
import { SingleComponent } from './single/single.component';
import { ChirpFormComponent } from './chirp-form/chirp-form.component';
import { FormViewComponent } from './form-view/form-view.component';
import { ListViewComponent } from './list-view/list-view.component';
import { SingleViewComponent } from './single-view/single-view.component'

const routes: Routes = [
    { path: '', redirectTo: '/form', pathMatch: 'full' },
    { path: 'form',  component: FormViewComponent },
    { path: 'single/:id', component: SingleViewComponent },
    { path: 'list',     component: ListViewComponent }
  ];

  @NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule {}