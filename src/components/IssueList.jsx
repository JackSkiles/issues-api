
import React, { Component } from 'react'
import Issue from './Issue';

import './IssuesList.css';
import { Link } from 'react-router-dom'

class IssueList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            issues: []
        }
    }
    getIssue = () => {
        console.log('Mounted the profile');
        fetch('https://api.github.com/repos/facebook/create-react-app/issues')
            .then(res => res.json())
            .then(data => {
                this.setState({ issues: data ? data : [] })
                console.log(this.state.issues);
            })
    }
    componentDidMount() {
        this.getIssue();
    }
    render() {
        return (

            <div>
                <div>
                </div>
                <div className="IssuesList">
                    {this.state.issues.map(issue => <Issue issue={issue} key={issue.id} />)}
                </div>
            </div>
        )
    }
}

export default IssueList;