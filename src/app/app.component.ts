import { AppointmentDetailsComponent } from './appointment-details/appointment-details.component';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CalenderData } from 'src/data';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'doctor-appointment-calender';
}
