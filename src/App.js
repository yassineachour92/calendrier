import React, { useState,useEffect } from "react";
import moment from "moment";
// import "./styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, momentLocalizer } from "react-big-calendar";
const localizer = momentLocalizer(moment);

export default function App() {
  const now = new Date();
  const date = {
    start: new Date(),
    end: now.setDate(now.getDate() + 100)
    // monday: {}
  };
  const scheduleCourse = [
    {
      name: "Elite team",
      location: {
        name: "Court 2",
        id: "8f23db7b-6201-4642-9046-6b4b3954e5bc"
      },
      dueDate: "2020-05-26T22:03:44.836Z",
      startDate: "2020-04-29T22:03:44.836Z",
      schedule: {
        weekly: {
          monday: { startTime: "07:00", endTime: "08:00" },
          thursday: { startTime: "12:00", endTime: "15:00" },
          // saturday: { startTime: "10:00", endTime: "11:00" },
          // sunday: { startTime: "17:00", endTime: "18:00" }
        }
      }
    },
    {
      name: "Power team",
      location: {
        name: "Court 2",
        id: "8f23db7b-6201-4642-9046-6b4b3954e5bc"
      },
      dueDate: "2020-05-26T23:04:43.572Z",
      startDate: "2020-04-29T23:04:43.572Z",
      schedule: {
        weekly: {
          sutuday: { startTime: "07:00", endTime: "08:00" },
          friday: { startTime: "12:00", endTime: "15:00" }
        }
      }
    }
    ,
    {
      name: "2 team",
      location: {
        name: "Court 2",
        id: "8f23db7b-6201-4642-9046-6b4b3954e5bc"
      },
      dueDate: "2020-05-26T23:04:43.572Z",
      startDate: "2020-04-29T23:04:43.572Z",
      schedule: {
        weekly: {
          sutuday: { startTime: "07:00", endTime: "08:00" },
          friday: { startTime: "12:00", endTime: "15:00" }
        }
      }
    }
  ];
  const [newDate, setNewDate] = useState([]);
  const [event, setevent] = useState([]);

  const result = () => {
    const d = scheduleCourse.map(el => {
      const k = el.schedule.weekly;
      const daysOfSchedule = Object.keys(k);

      const daysDiiff = moment(date.end).diff(date.start, "days");
      let days = [];
      for (let index = 0; index < daysDiiff; index++) {
        if (
          daysOfSchedule.find(
            el =>
              moment(date.start)
                .add(index, "days")
                .format("dddd")
                .toLowerCase() === el.toLowerCase()
          )
        ) {
          const time =
            k[
              daysOfSchedule.find(
                e =>
                  moment(date.start)
                    .add(index, "days")
                    .format("dddd")
                    .toLowerCase() === e.toLowerCase()
              )
            ];

          days = [
            ...days,
            {
              id: Math.random() * 100 * Math.random() * 50,
             
              description: 'This is the sample event provided as an example only',
              location: 'Portland, OR',
              title: el.name,
              start: new Date(
                moment(date.start)
                  .add(index, "days")
                  .set({
                    hour: parseInt(time.startTime.slice(0.2), 10),
                    minute: parseInt(time.startTime.slice(3, 4), 10)
                  })
              ),
              end: new Date(
                moment(date.start)
                  .add(index, "days")
                  .set({
                    hour: parseInt(time.endTime.slice(0.2), 10),
                    minute: parseInt(time.startTime.slice(3, 4), 10)
                  })
              )
            }
          ];
        }
      }
   

      return days;
    });
    return d;

  };

  let  array3=[];
var i=0;
while (result().length>i){
  array3 = [...result()[i],...array3]
 i++;
}
 
  return (
    <div className="App">
      <Calendar
        localizer={localizer}
        events={array3}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
}
