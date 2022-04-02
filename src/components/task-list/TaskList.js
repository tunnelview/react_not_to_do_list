import React from "react";
import { Button, Col, Form, FormCheck, Row, Table } from "react-bootstrap";

const TaskList = () => {
  return (
    <div>
      <Row>
        <Col md="6">
          <h2 className="text-center"> Task List</h2>
          <hr />

          <Table striped hover>
            <tbody>
              <tr>
                <td>
                  <FormCheck type="checkbox" label="Check me out" />
                </td>
                <td> Task Name</td>
                <td>10 hr</td>
                <td className="text-end">
                  <Button variant="danger">
                    <i className="fa-solid fa-trash-can"></i>
                  </Button>{" "}
                  <Button variant="primary">
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>

        <Col md="6">
          <h2 className="text-center"> Bad List</h2>
          <hr />

          <Table striped hover>
            <tbody>
              <tr>
                <td>
                  <FormCheck type="checkbox" label="Check me out" />
                </td>
                <td> Task Name</td>
                <td>10 hr</td>
                <td className="text-end">
                  <Button variant="danger">
                    <i className="fa-solid fa-trash-can"></i>
                  </Button>{" "}
                  <Button variant="primary">
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  );
};

export default TaskList;
