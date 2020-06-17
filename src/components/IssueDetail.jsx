import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class IssueDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            detail: {}
        }
    }
    componentDidMount() {
        fetch('https://api.github.com/repos/facebook/create-react-app/issues/' 
            + this.props.match.params.issueNumber)
        .then((res) => res.json())
        .then(res => {
            this.setState({ loading: false, detail: res })
            console.log(res)
        })
    } 


    render() {
        return (
            <div>
                <Link to='/'>Home Page</Link>
                <h1>{ this.state.detail.title }   <a href={this.state.detail.html_url} >Github</a></h1>
            </div>
        )
    }
}
