import React from "react";
import { Container } from "react-bootstrap";

export default function AppointmentList(appointments, setAppointments) {
  return (
    <Container>
      <h3 className="display-6 mb-2" style={{ color: "rgb(166,18,189)" }}>
        Appointment List
      </h3>
      <div className="d-flex flex-column align-items-center" type="button">
        {appointments?.length === 0 && (
            <img src="./img/appointment.jpg"> </img>
         
        )}
        
      </div>
    </Container>
  );
}
