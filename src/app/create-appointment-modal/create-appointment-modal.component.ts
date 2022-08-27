import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-appointment-modal',
  templateUrl: './create-appointment-modal.component.html',
  styleUrls: ['./create-appointment-modal.component.css'],
})
export class CreateAppointmentModalComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<CreateAppointmentModalComponent>
  ) {}
  appointmentForm!: FormGroup;
  ngOnInit(): void {
    this.appointmentForm = this.formBuilder.group({
      name: ['', Validators.required],
      gender: ['', Validators.required],
      age: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
    });
  }

  createAppointment(): void {
    if (this.isFormIsReady()) {
      console.log(this.appointmentForm.value);
      this.dialogRef.close();
    }
  }

  isFormIsReady(): boolean {
    return (
      this.appointmentForm.value.name &&
      this.appointmentForm.value.gender &&
      this.appointmentForm.value.age &&
      this.appointmentForm.value.date &&
      this.appointmentForm.value.time
    );
  }
}
