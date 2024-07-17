import React, { useState, useRef } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { v4 as uuid} from 'uuid';
import emailjs from '@emailjs/browser';

export default function AddModal({
  show,
  handleClose,
  doctorName,
  appointments,
  setAppointments,
}) {
  const [patientName, setPatientName] = useState("");
  const [patientEmail, setPatientEmail] = useState("");
  const [date, setDate] = useState("");

 
  const form = useRef();


  const handleSubmit = async(e) => {
    e.preventDefault();
    const newAppointment  ={
      id: uuid(),
      patient:patientName,
      email: patientEmail,
      doctor:doctorName, 
      date,
      consulted:false

    }

    setAppointments([newAppointment, ...appointments])
    // send Email 
    try{
      const result = await emailjs.sendForm('service_6gwzsti', 'template_cvbb7mw', form.current, 'CyXn8viS9CuAWupHJ')
      console.log(result)
    }catch(err){
      console.log(err)
    }

    handleClose();
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="text-danger">
          Rerveration for {doctorName}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit} ref={form}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="name">Patient Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              required
              onChange={(e) => setPatientName(e.target.value)}
              value={patientName}
              name="name"
              id="name"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="email">Patient Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your Email"
              required
              onChange={(e) => setPatientEmail(e.target.value)}
              value={patientEmail}
              name="email"
              id="email"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="date">Day&Time</Form.Label>
            <Form.Control
              type="datetime-local"
              name="date"
              id="date"
              required
              onChange={(e) => setDate(e.target.value)}
          
            />
          </Form.Group>

          <input type="hidden" name="doctor" value={doctorName}/>
          <div className="text-center">
            <Button variant="primary" type="submit" className="me-2">Submit</Button>
            <Button variant="danger" onClick={handleClose}>Close</Button>
          </div>


        </Form>
      </Modal.Body>
    </Modal>
  );
}