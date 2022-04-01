import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

export const AddForm = () => {
  return (
    <div>
      {/* Line 9 to 23 is copied from 
        https://react-bootstrap.netlify.app/forms/layout/#layout Column Sizing  */}
      <Form>
        <Row className="g-2">
          <Col md={7}>
            <Form.Control placeholder="Task..." />
          </Col>
          <Col md={3}>
            <Form.Control placeholder="Hour" type="number" />
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
