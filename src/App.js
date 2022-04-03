// import logo from './logo.svg';
import { useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import "./App.css";
import { AddForm } from "./components/form/AddForm";
import TaskList from "./components/task-list/TaskList";
import { Title } from "./components/title/Title";

const App = () => {
  return (
    <div className="wrapper">
      <Container>
        {/* {title comp} */}
        <Title />

        {/* {form comp} */}
        <AddForm />

        <hr />

        {/* {Task List comp} */}
        <Row>
          <Col md="6">
            <TaskList />
          </Col>
        </Row>
        {/* <TaskList /> */}
      </Container>
    </div>
  );
};

export default App;
