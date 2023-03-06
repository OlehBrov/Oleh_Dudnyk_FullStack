import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/About/header/Header";
import { AboutSection } from "./components/About/AboutSection";

function App(props) {
  return (
    <>
      <Header></Header>
      <AboutSection props={props.data}></AboutSection>
    </>
  );
}

export default App;
