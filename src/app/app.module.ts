import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateAppointmentModalComponent } from './create-appointment-modal/create-appointment-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialComponentsModule } from 'src/material.module';
import { AppTopbarComponent } from './app-topbar/app-topbar.component';
import { AppointmentDetailsComponent } from './appointment-details/appointment-details.component';
import { CalenderBodyComponent } from './calender-body/calender-body.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateAppointmentModalComponent,
    AppTopbarComponent,
    AppointmentDetailsComponent,
    CalenderBodyComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
