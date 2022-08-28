import {
  allMonths,
  getCurrentMonth,
  getData,
  months,
  monthsSerial,
  setData,
} from './../../data';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { years } from 'src/data';
import { AppointmentDetailsComponent } from '../appointment-details/appointment-details.component';
import { Appointments, CalenderDataInterFace } from '../interfaces';

@Component({
  selector: 'app-calender-body',
  templateUrl: './calender-body.component.html',
  styleUrls: ['./calender-body.component.css'],
})
export class CalenderBodyComponent implements OnInit {
  allmonths = allMonths;
  calenderData: CalenderDataInterFace = {
    year: 0,
    month: { name: '', days: [{ days: 0 }] },
  };
  selectYear: string = '2022';
  selectMonth: string = getCurrentMonth();
  allAppointments: Appointments[] = getData();
  activeAppointments: Appointments[] = [];

  constructor(private dialog: MatDialog) {}
  showAppointMentDetails(data: Appointments) {
    this.dialog.open(AppointmentDetailsComponent, { data });
  }
  // ahsdgafdjsak
  getFilteredData(date: any) {
    const data = this.allAppointments
      .sort(({ time: a }, { time: b }) => (a > b ? 1 : a < b ? -1 : 0))
      .filter(
        (item) =>
          parseInt(item.date.split('-')[0]) === parseInt(this.selectYear) &&
          item.date.split('-')[1] === monthsSerial[this.selectMonth] &&
          parseInt(item.date.split('-')[2]) === 1 // parseInt(date.split('-')[2])
      );
    console.log(date, data);
    return null;
  }

  getAppointments() {
    const data = this.allAppointments
      .sort(({ time: a }, { time: b }) => (a > b ? 1 : a < b ? -1 : 0))
      .filter(
        (item) =>
          parseInt(item.date.split('-')[0]) === parseInt(this.selectYear) &&
          item.date.split('-')[1] === monthsSerial[this.selectMonth] &&
          parseInt(item.date.split('-')[2]) === 1 // parseInt(date.split('-')[2])
      );
    this.activeAppointments = data;

    return data;
  }

  getCalenderData() {
    const month = months.find((month: any) => month.name === this.selectMonth);
    const year = years.find((item: any) => item === parseInt(this.selectYear));
    this.getAppointments();
    return { year, month };
  }

  getYear(year: string) {
    const filterCalendarByYear = years.find(
      (item: any) => item === parseInt(year)
    );
    this.selectYear = year;
  }

  getMonth(month: string) {
    this.selectMonth = month;
    this.getinitialDays();
  }

  getinitialDays() {
    const calenderData = this.getCalenderData();
    if (calenderData) {
      this.calenderData = calenderData;
    }
  }
  showAppointment(data: any) {
    // console.log(data.date);
    return true;
  }

  ngOnInit(): void {
    this.getinitialDays();
    console.log('calling');
  }
}
