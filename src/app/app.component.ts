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

  constructor(private dialog: MatDialog) {}
  showAppointMentDetails(event: any) {
    console.log(`event: ${event}`);
    console.log(CalenderData);
    const dialogRef = this.dialog.open(AppointmentDetailsComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  getAllData() {
    return CalenderData;
  }
}
