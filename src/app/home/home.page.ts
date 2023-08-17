import { Component, ViewChild } from '@angular/core';
import { IonDatetime } from '@ionic/angular';
import { format, parseISO } from 'date-fns';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  modes = ['date', 'date-time', 'month', 'month-year', 'time', 'time-date', 'year'];
  selectMode = 'date';
  showPicker = false;
  formattedString = '';
  @ViewChild(IonDatetime) datetime!: IonDatetime

  dateValue = format(new Date(), 'yyyy-MM-dd') + 'T09:00:00.000Z';
  constructor() {
    this.setToday();

   }

  setToday(){
    this.formattedString = format(parseISO(this.dateValue), 'HH:mm, MMM d, yyyy');
    };
dateChanged(value: any){
  this.dateValue = value;
  this.formattedString = format(parseISO(value), 'HH:mm , MMM d, yyyy');
  this.showPicker = false;
}

close(){
this.datetime.cancel(true);
}
select(){
this.datetime.confirm(true);
}

}
