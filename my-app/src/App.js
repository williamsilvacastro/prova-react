import './App.css';
import {
  BrowserRouter as Router
} from "react-router-dom";
import { Routes } from './routes'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes/>
      </Router>
    </>
  );
}

export default App;
