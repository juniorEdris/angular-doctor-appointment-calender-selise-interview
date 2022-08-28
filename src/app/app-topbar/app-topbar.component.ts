import {
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateAppointmentModalComponent } from '../create-appointment-modal/create-appointment-modal.component';

@Component({
  selector: 'app-app-topbar',
  templateUrl: './app-topbar.component.html',
  styleUrls: ['./app-topbar.component.css'],
})
export class AppTopbarComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  // @ViewChild('child', { read: ViewContainerRef })
  // outletRef!: ViewContainerRef;
  // @ViewChild('content', { read: TemplateRef })
  // contentRef!: TemplateRef<any>;

  // ngAfterContentInit() {
  //   this.outletRef.createEmbeddedView(this.contentRef);
  // }
  // private rerender() {
  //   this.outletRef.clear();
  //   this.outletRef.createEmbeddedView(this.contentRef);
  // }
  openDialog() {
    const dialogRef = this.dialog.open(CreateAppointmentModalComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
      // this.rerender();
    });
  }

  ngOnInit(): void {}
}
