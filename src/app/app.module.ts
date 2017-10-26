import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatSelectModule, MatCardModule, MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatMenuModule, MatExpansionModule, MatRadioModule, MatToolbarModule } from '@angular/material';
import { MatStepperModule } from '@angular/material';


import { ChirpService } from './chirp.service';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { SingleComponent } from './single/single.component';
import { ChirpFormComponent } from './chirp-form/chirp-form.component';

import { AppRoutingModule } from './app-routing.module';
import { ListViewComponent } from './list-view/list-view.component';
import { SingleViewComponent } from './single-view/single-view.component';
import { FormViewComponent } from './form-view/form-view.component';
import { LogInComponent } from './log-in/log-in.component';
import { LogInViewComponent } from './log-in-view/log-in-view.component';
import { ActualLogComponent } from './actual-log/actual-log.component';
import { ActualLogViewComponent } from './actual-log-view/actual-log-view.component';
import { UsernamePipe } from './username.pipe';
import { BackgroundColorDirective } from './background-color.directive';
import { CreateDirective } from './create.directive';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    SingleComponent,
    ChirpFormComponent,
    ListViewComponent,
    SingleViewComponent,
    FormViewComponent,
    LogInComponent,
    LogInViewComponent,
    ActualLogComponent,
    ActualLogViewComponent,
    UsernamePipe,
    BackgroundColorDirective,
    CreateDirective
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatSelectModule,
    MatCardModule,
    MatMenuModule,
    MatExpansionModule,
    MatIconModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatToolbarModule 
  ],
  providers: [ChirpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
