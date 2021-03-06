import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const initialState = {};

export const AddForm = () => {
  //   const [newInfo, setTask] = useState("");

  //   const handleOnChange = (e) => {
  //     const { name, value } = e.target;
  //     // line 13 is to display the vlue and the field
  //     setTask({ ...newInfo, [name]: value });
  //     // set task updates our state. the name above mentioned above is the variable,
  //     // we key that in squared bracket, because we want to convert that into value.

  //     console.log(name, value);
  //   };
  //   console.log(newInfo);

  //   const handleOnSubmit = (e) => {
  //     e.preventDefault();
  //     console.log(newInfo);
  //   };

  return (
    <div>
      {/* Line 9 to 23 is copied from 
        https://react-bootstrap.netlify.app/forms/layout/#layout Column Sizing  */}
      <Form>
        <Row className="g-2">
          <Col md={7}>
            <Form.Control
              name="task"
              placeholder="Task..."
              //   onChange={handleOnChange}
              required
            />
          </Col>
          <Col md={3}>
            <Form.Control
              placeholder="Hour"
              type="number"
              name="hr"
              //   onChange={handleOnChange}
            />
          </Col>
          <Col md={2}>
            <Button variant="primary" type="submit">
              Add Task
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
