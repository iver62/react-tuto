import { Component } from 'react';
import './App.css';
import './appStyles.css';
import styles from './appStyles.module.css';
import Inline from './components/Inline';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className='error'>Error</h1>
        <h1 className={styles.success}>Success</h1>
        <Inline />
        {/* <Stylesheet primary={true} /> */}
        {/* <NameList /> */}
        {/* <UserGreeting /> */}
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
