import React , {useState} from 'react'
import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css';
import styles from '../Calendar/Calendar.module.css'


const CalendarComponent = () => {
  const [ selectedDate , setSelectedDate] = useState(new Date())

  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log("selected date : " , date)
    }

    return (
      <div>
        <Calendar className={styles.react_calendar} onChange={handleDateChange} value={selectedDate}/>
      </div>
    )
}


export default CalendarComponent;