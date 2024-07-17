import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {doctorData} from '../helper/data'
import AddModal from './AddModal'

export default function Doctors({appointments, setAppointments}) {
  const [show, setShow] = useState(false)
  const [selectedDoctor, setSelectedDoctor] = useState("")

  const handleClose = ()=> setShow(false);
  const handleOpen = ()=> setShow(true)

  const handleClick = (drName)=>{
    setSelectedDoctor(drName)
    handleOpen();
  }
  return (
   <Container className='p-2'>
    <h3 className='display-6 mb-3' style={{color: "rgb(166,18,189)"}}>Our Doctors</h3>
   
   <Row >
    {doctorData.map(dr=>(
      <Col key={dr.id} xs={6} sm={4} md={3} type="button" className='py-2'>
        <img src={dr.img} title={dr.name} alt={dr.name} className='doctor-img img-thumbnail' onClick={()=> handleClick(dr.name)}/>
        <h5>{dr.name}</h5>
        <h6>{dr.dep}</h6>
      </Col>
    ))}
   </Row>

   <AddModal show={show} handleClose={handleClose} appointments={appointments} setAppointments={setAppointments} doctorName={selectedDoctor} />
   </Container>
 )
}