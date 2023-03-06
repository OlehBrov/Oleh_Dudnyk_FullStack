import logo from './logo.svg';
import './App.css';
import { AboutSection } from './components/About/AboutSection';

function App(props) {
  console.log("APP", props.data)
  return (
    <AboutSection props = {props.data}>
      
    </AboutSection>
  );
}

export default App;
