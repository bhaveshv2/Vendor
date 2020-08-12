import React,{Component} from 'react';
import './App.css';

class App extends Component{
  // constructor(){
  //   super();
  //   this.state={
  //     fileStorage = null,
  //   }
  // }

  render(){
    return (
      <div className="App">
        <div className="logo-image">
          <img src="https://general.futuregenerali.in/img/logo.png" alt="company-logo"/>
        </div>
        <div className="App-header">
          <h1>Upload Your Bill</h1>
        </div>
        <form className="form">
          <div className="field">
            <input type="file" placeholder="Upload your bill here..." style={{border:"2px white solid"}}/>
          </div>
          <div className="sbmt-button">
            <button>Upload</button>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
