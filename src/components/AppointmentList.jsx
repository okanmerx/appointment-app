import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {FaTimesCircle} from 'react-icons/fa';
import emailjs from '@emailjs/browser';

export default function AppointmentList({appointments, setAppointments}) {
 
const deleteAppointment  =async (app)=>{
  let newAppointments = [...appointments]

  newAppointments = newAppointments.filter(item=> item.id !== app.id)
  setAppointments(newAppointments)
    // send Email 
    try{
      const result = await emailjs.send('service_6gwzsti', 'template_omp3hfj', app, 'CyXn8viS9CuAWupHJ')
      console.log(result)
    }catch(err){
      console.log(err)
    }
}

const handleDoubleClick = (id)=>{
  let newAppointments = [...appointments]
  const index = newAppointments.findIndex(a=> a.id===id)
  newAppointments[index].consulted = !newAppointments[index].consulted
  setAppointments(newAppointments)
}

 return (
<Container>
  <h3 className='display-6 mb-2'  style={{color: "rgb(166,18,189)"}}> Appoinment List </h3>

<div className='d-flex flex-column align-items-center' type="button">
{appointments?.length===0&&<img src='/img/appointment.jpg' width="80%" alt="appointment"/>}
{appointments.map(item=>(
  <div key={item.id} className={item.consulted?"appointments consulted":"appointments"}
  onDoubleClick={()=> handleDoubleClick(item.id)}
  >

<Row className='justify-content-center align-items-center gap-3'>
  <Col xs={12} md={5}>
  <h4 className='text-danger'>{item.patient}</h4>
  <h5>{item.doctor}</h5>
  </Col>
  <Col xs={10} sm={8} md={5}>
    <h5>Date: {new Date(item.date).toLocaleDateString()}</h5>
    <h6>Time: {new Date(item.date).toLocaleTimeString()}</h6>
  </Col>
  <Col className='text-end'>
    <FaTimesCircle className='text-danger fs-1' type='button' onClick={()=> deleteAppointment(item)}/>
  </Col>
</Row>

  </div>
))}

</div>


</Container>
  )
}
