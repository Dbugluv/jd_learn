import React, {Component} from 'react';
import './App.css';
import AntFormList from './component/AntFormList';
import LinkedDynamicForm from './component/LinkedDynamicForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <AntFormList/> */}
        <LinkedDynamicForm/>
      </div>
    );
  }
}

export default App;
