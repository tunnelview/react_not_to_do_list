// import logo from './logo.svg';
import { useState } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import { AddForm } from "./components/form/AddForm";
import TaskList from "./components/task-list/TaskList";
import { Title } from "./components/title/Title";

const App = () => {
  // state to strore allt he task lists
  const [taskLists, setTaskLists] = useState([]);

  const addToTaskList = (taskObj) => {
    setTaskLists([...taskLists, taskObj]);
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
        <TaskList />
      </Container>
    </div>
  );
};

export default App;
