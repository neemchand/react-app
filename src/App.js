import React from 'react';
import ReactDOM from "react-dom";
import './App.css';
import Button from "./components/Button";
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component  {
  
  state = {
    button1 :'initial state',
    button2 :'initial state'
  }
  
  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        button1 :'state changed first',
        button2 :'state changed second'
      });
    },2000);
  }

  render(){
  return (
    <div className="App">
    <Button name="button1" c_name="btn" />
    <Button name={this.state.button1} c_name="btn-primary" />
    <Button name={this.state.button2} c_name="btn-success" />
    </div>
  );
}
}
export default App;
