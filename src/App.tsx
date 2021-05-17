
import React from 'react'
import Setup from './Setup'
import MatchSheet from './components/MatchSheet'
import Store from './store/Store'
import './App.css';

function App() {
  return (
    <div className="App">
    <Store>
      <div className="container">
        <div className="row align-items-center justify-content-center">          
          <div className="sm-12 md-8 lg-6">
            <h1>Inoue Hai Kihon Competition</h1>            
            <MatchSheet />
          </div> 
        </div>
      </div>
    </Store>
    </div>
  );
}

export default App;
