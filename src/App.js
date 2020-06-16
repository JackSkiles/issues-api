import React from 'react';
import './App.css';
import IssuesList from './components/IssueList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       Github Issues
      </header>
      <div class="white-space">
      </div>
      <div class="white-space">
      </div>
      <div>
        <IssuesList />
      </div>
    </div>
  );
}

export default App;
