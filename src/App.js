import { Component } from 'react';
import './App.css';
import './appStyles.css';
import Table from './components/Table';

class App extends Component {
  render() {
    return (
      <div className='App'>
        {/* <FragmentDemo /> */}
        <Table />
      </div>
    );
  }
}

export default App;
