import React from "react";
import { Button, Col, Form, FormCheck, Row, Table } from "react-bootstrap";

const BadList = () => {
  return (
    <div>
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
                <i className="fa-solid fa-arrow-left-long"></i>
              </Button>
              <Button variant="primary">
                <i className="fa-solid fa-trash-can"></i>
              </Button>{" "}
            </td>
          </tr>
        </tbody>
      </Table>

      <h4 className="mt-4 text-danger">You could have saved: 20 hrs</h4>
    </div>
  );
};

export default BadList;
