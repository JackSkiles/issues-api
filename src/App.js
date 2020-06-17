
import React from 'react';
import './App.css';
import IssuesList from './components/IssueList';
import IssueDetail from './components/IssueDetail';
import User from './components/User';
import { Link } from 'react-router-dom'
import { 
  BrowserRouter as Router,
  Route, 
  Switch,
  } from 'react-router-dom';
  

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
         Github Issues
        </header>
        <div className="white-space">
        </div>
        <div className="white-space">
        </div>
        <div>
          <Link to='/user'>Users</Link>
          <Switch>
            <Route exact path="/" component={ IssuesList }/>
            <Route path="/issue/:issueNumber" component={ IssueDetail }/>
            <Route path="/user" component={User}/>
            <Route><h1>404 NOT FOUND</h1></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
