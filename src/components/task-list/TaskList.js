import React from "react";
import { Button, Col, Form, FormCheck, Row, Table } from "react-bootstrap";

const TaskList = ({ taskList, removeFromTaskList, shiftToBadList }) => {
  return (
    <div>
      <h2 className="text-center"> Task List</h2>
      <hr />

      <Table striped hover>
        <tbody>
          {taskList.map((item, i) => (
            //passing the key as in react we need to pass the key to make item unique
            <tr key={i}>
              <td>
                <FormCheck type="checkbox" label="Check me out" />
              </td>
              <td>{item.task}</td>
              <td>{item.hr}</td>
              <td className="text-end">
                <Button variant="danger" onClick={() => removeFromTaskList(i)}>
                  <i className="fa-solid fa-trash-can"></i>
                </Button>{" "}
                <Button variant="primary" onClick={() => shiftToBadList(i)}>
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
