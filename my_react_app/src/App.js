import './App.css';
import { Button } from './components/Button';
import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from 'react-router-dom'
import { AddButton } from './components/AddButton';

function App() {
  return (
    <div className="App">
      <Button text={"Delete"}/>
      <Button text={"Edit"}/>
      <AddButton/>
    </div>
  );
}

export default App;
