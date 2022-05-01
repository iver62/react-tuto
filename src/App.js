import { Component } from 'react';
import './App.css';
import UserGreeting from './components/UserGreeting';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserGreeting />
        {/* <ParentComponent /> */}
        {/* <EventBind /> */}
        {/* <FunctionClick /> */}
        {/* <ClassClick /> */}
        {/* <Counter /> */}
        {/* <Message /> */}
        {/* <Greet name="Bruce" heroName="Batman">
          <p>This is children props</p>
        </Greet>
        <Greet name="Clark" heroName="Superman" >
          <button>Action</button>
        </Greet> */}
        {/* <Greet name="Diana" heroName="Wonder Woman" /> */}
        {/* <Welcome name="Bruce" heroName="Batman" /> */}
        {/* <Welcome name="Clark" heroName="Superman" /> */}
        {/* <Welcome name="Diana" heroName="Wonder Woman" /> */}
      </div>
    );
  }
}

export default App;
