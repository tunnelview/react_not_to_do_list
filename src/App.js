// import logo from './logo.svg';
import { Container } from "react-bootstrap";
import "./App.css";
import { AddForm } from "./components/form/AddForm";
import { Title } from "./components/title/Title";

const App = () => {
  return (
    <div className="wrapper">
      <Container>
        {/* {title comp} */}
        <Title />

        {/* {form comp} */}
        <AddForm />
      </Container>
    </div>
  );
};

export default App;
