import { Component } from 'react';
import './App.css';
import './appStyles.css';
import LifecycleA from './components/LifecycleA';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <LifecycleA />
      </div>
    );
  }
}

export default App;
