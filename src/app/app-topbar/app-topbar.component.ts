import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateAppointmentModalComponent } from '../create-appointment-modal/create-appointment-modal.component';

@Component({
  selector: 'app-app-topbar',
  templateUrl: './app-topbar.component.html',
  styleUrls: ['./app-topbar.component.css'],
})
export class AppTopbarComponent implements OnInit {
  constructor(private dialog: MatDialog) {}
  openDialog() {
    const dialogRef = this.dialog.open(CreateAppointmentModalComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {}
}
