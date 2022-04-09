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
  const [badList, setBadList] = useState([]);

  const addToTaskList = (newInfo) => {
    setTaskList([...taskList, newInfo]);
  };
  console.log(taskList);

  //remove item form the task list
  const removeFromTaskList = (i) => {
    const filterdArg = taskList.filter((item, index) => index !== i);
    setTaskList(filterdArg);
    alert(i);
  };
  //remove item form the bad list
  const removeFromBadList = (i) => {
    const filterdArg = badList.filter((item, index) => index !== i);
    setBadList(filterdArg);
    alert(i);
  };

  const shiftToBadList = (i) => {
    // get the item that needs to be shifted
    const item = taskList[i];
    console.log(item);

    // add the item in the bad list
    setBadList([...badList, item]);

    // remove the item from the task list
    removeFromTaskList(i);
  };
  // remove from bad list to task list

  const shiftToTaskList = (i) => {
    const item = badList[i];
    setTaskList([...taskList, item]);
    removeFromBadList(i);
  };

  // total from the task list, we will use the reduce method, reduce method always return a number or value
  const taskListTotalHr = taskList.reduce((acc, item) => acc + +item.hr, 0);
  console.log(taskListTotalHr);

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
              shiftToBadList={shiftToBadList}
            />
          </Col>

          <Col md="6">
            <BadList
              badList={badList}
              removeFromBadList={removeFromBadList}
              shiftToTaskList={shiftToTaskList}
            />
          </Col>
        </Row>

        {/* {Total hours allocation} */}

        <Row>
          <Col>
            <h3 className="mt-5"> The total allocated hours are: 15 hours </h3>
            {/* In react the variable doesn't get updated, its readable only */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
