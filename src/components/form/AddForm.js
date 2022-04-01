import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

export const AddForm = () => {
  return (
    <div>
      {/* Line 9 to 23 is copied from 
        https://react-bootstrap.netlify.app/forms/layout/#layout Column Sizing  */}
      <Form>
        <Row>
          <Col xs={7}>
            <Form.Control placeholder="Task..." />
          </Col>
          <Col>
            <Form.Control placeholder="Hour" type="number" />
          </Col>
          <Col>
            <Button variant="primary" type="submit">
              Add Task
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
