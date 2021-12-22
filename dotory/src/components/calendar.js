import React from 'react';

import '../main.css';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';


function Calendar() {
  
  return (
    <div className="App">
        <div>
            <FullCalendar className="main-calendar"
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            />
        </div>
    </div>
  );
}

export default Calendar;