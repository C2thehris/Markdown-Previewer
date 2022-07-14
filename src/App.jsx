import React, { Component } from 'react';
import Preview from './Preview';
import Editor from './Editor';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Preview id="preview" />
        <Editor id="editor" />
      </div>
    );
  }
}

export default App;
