import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'

export default function Calendar() {


    const addEvent= ()=>{
        console.log("hello log")
    }
  return (
    <FullCalendar
      plugins={[ timeGridPlugin ]}
      initialView="timeGridWeek"
      timeZone='local'
      eventTimeFormat={{
        hour:"numeric"
      }}
      firstDay={1}
    headerToolbar={ {
      left: 'prev,next today',
      center: 'title',
      right: 'timeGridWeek,timeGridDay'
    }}
    viewClassNames={"calendar"}
    slotMinTime="12:00:00"
    slotLabelFormat={
        {
            hour:"numeric",
            hour12:false,
            minute:"numeric"
    
        }
    }
    selectable={true}
    eventAdd={addEvent}
    events={[
        {
            id:"1",
            title:"Andrei",
            start:"2025-12-13T12:00",
            end:"2025-12-13T23:00",
            color:"green",
            
        },
    ]}
    />
  )
}