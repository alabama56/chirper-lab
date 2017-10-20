import { RouterModule, Routes } from '@angular/router';
import { NgModule }             from '@angular/core';

import { ListComponent } from './list/list.component';
import { SingleComponent } from './single/single.component';
import { ChirpFormComponent } from './chirp-form/chirp-form.component';

const routes: Routes = [
    { path: '', redirectTo: '/form', pathMatch: 'full' },
    { path: 'form',  component: ChirpFormComponent },
    { path: 'single/:id', component: SingleComponent },
    { path: 'list',     component: ListComponent }
  ];

  @NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule {}