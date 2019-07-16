import React from 'react';
import ReactDOM from "react-dom";
import './App.css';
import Button from "./components/Button";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
    <Button name="button1" c_name="btn" />
    <Button name="button2" c_name="btn-primary" />
    <Button name="button2" c_name="btn-success" />
    </div>
  );
}

export default App;
