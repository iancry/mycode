import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    const hello = "Hello World";

    const list = [
      {name: 'Ian',Admno:'3286',id:1},
      {name: 'Ras',Admno:'3287',id:1},
      {name: 'Poze',Admno:'3288',id:1}   
    ]
    return (
      <div className="App">
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {hello}
          </a>
          {list.map(student => (
            <div key={student.id}>
              <span>{student.name}</span>
              <span>{student.Admno}</span>
              <button className="btn btn-danger m-2"
                      onClick={() => this.onDismiss(student.id)}>Delete</button>
            </div>
          ))}
      </div>
    );
  }
}

export default App;
