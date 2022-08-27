import { allMonths, months } from './../../data';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { years } from 'src/data';
import { AppointmentDetailsComponent } from '../appointment-details/appointment-details.component';
import { CalenderDataInterFace } from '../interfaces';

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
  selectYear: string = '2021';
  selectMonth: string = 'January';

  constructor(private dialog: MatDialog) {}
  showAppointMentDetails(name: string, time: string) {
    this.dialog.open(AppointmentDetailsComponent, { data: { name, time } });
  }
  getCalenderData() {
    const month = months.find((month: any) => month.name === this.selectMonth);
    const year = years.find((item: any) => item === parseInt(this.selectYear));
    return { year, month };
  }

  getYear(year: string) {
    const filterCalendarByYear = years.find(
      (item: any) => item === parseInt(year)
    );
    this.selectYear = year;
  }
  getMonth(month: string) {
    this.getinitialDays();
    this.selectMonth = month;
  }

  getinitialDays() {
    const calenderData = this.getCalenderData();
    if (calenderData) {
      this.calenderData = calenderData;
    }
  }

  ngOnInit(): void {
    this.getinitialDays();
  }
}
