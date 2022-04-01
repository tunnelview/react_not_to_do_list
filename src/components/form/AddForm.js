import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

export const AddForm = () => {
  return (
    <div>
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
