import { Component } from '@angular/core';
import { buildEntryKey, CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calendario';
  
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    customButtons: {
      feriados:{
        text: 'Feriados',
        click: function(){
         this.toggleWeekends();
        }
      }
   
    },
    dateClick: this.handleDateClick.bind(this), // bind is important!
    events: [
      { title: 'event 1', start: '2021-07-30T14:30:00', end: '2021-07-30T18:30:00', display: 'background: ' },
      { title: 'event 2', date: '2021-07-31' }
    ],
    // weekends: false, // initial value,
    locale: 'pt-br',
    headerToolbar: {
      start: 'prev,next today feriados',
      center: 'title',
      end: '',
    },
    droppable: true,
    buttonText:{
      today: 'Hoje'
    },
    selectable: true,
    nowIndicator: true,
    // fixedWeekCount: true,
    contentHeight: 600,
		height: 600,

  };

  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr)
  }

  toggleWeekends() {
    this.calendarOptions.weekends = !this.calendarOptions.weekends // toggle the boolean!
  }
}
