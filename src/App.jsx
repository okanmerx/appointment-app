import React, { useEffect, useState } from 'react'
import Doctors from './components/Doctors'
import AppointmentList from './components/AppointmentList'
import './App.css'


export default function App() {
  const [appointments, setAppointments] = useState(JSON.parse(localStorage.getItem("appointments"))||[])

  useEffect(()=>{
    localStorage.setItem("appointments", JSON.stringify(appointments))
  }, [appointments])
  return (
 
    <main className='text-center mt-2 vh-100'>
      <h1 className='display-5 text-danger'> CLARUS HOSPITAL</h1>
      <Doctors appointments={appointments} setAppointments={setAppointments}/>
      <AppointmentList appointments={appointments} setAppointments={setAppointments}/>
    </main>
  )
}