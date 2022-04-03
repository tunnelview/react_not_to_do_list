// import logo from './logo.svg';
import { useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import "./App.css";
import { AddForm } from "./components/form/AddForm";
import TaskList from "./components/task-list/TaskList";
import BadList from "./components/task-list/BadList";
import { Title } from "./components/title/Title";

const App = () => {
  const [taskList, setTaskList] = useState([]);

  const addToTaskList = (newInfo) => {
    setTaskList([...taskList, newInfo]);
  };
  console.log(taskList);

  //remove item form the task
  const removeFromTaskList = (i) => {
    const filterdArg = taskList.filter((item, index) => index !== i);
    setTaskList(filterdArg);
    alert(i);
  };

  return (
    <div className="wrapper">
      <Container>
        {/* {title comp} */}
        <Title />

        {/* {form comp} */}
        <AddForm addToTaskList={addToTaskList} />

        <hr />

        {/* {Task List comp} */}
        <Row>
          <Col md="6">
            <TaskList
              taskList={taskList}
              removeFromTaskList={removeFromTaskList}
            ></TaskList>
          </Col>

          <Col md="6">
            <BadList />
          </Col>
        </Row>

        {/* {Total hours allocation} */}

        <Row>
          <Col>
            <h3 className="mt-5"> The total allocated hours are: 15 hours </h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
