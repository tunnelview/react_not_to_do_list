import React from "react";
import { Button, Col, Form, FormCheck, Row, Table } from "react-bootstrap";

const TaskList = ({ taskList }) => {
  return (
    <div>
      <h2 className="text-center"> Task List</h2>
      <hr />

      <Table striped hover>
        <tbody>
          {taskList.map((item, i) => (
            <tr>
              <td>
                <FormCheck type="checkbox" label="Check me out" />
              </td>
              <td>{item.task}</td>
              <td>{item.hr}</td>
              <td className="text-end">
                <Button variant="danger">
                  <i className="fa-solid fa-trash-can"></i>
                </Button>{" "}
                <Button variant="primary">
                  <i className="fa-solid fa-arrow-right-long"></i>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TaskList;
