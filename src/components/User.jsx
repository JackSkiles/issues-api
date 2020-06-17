import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment';

import Label from './Label';

export default class User extends Component {
    constructor(props){
        super(props);
        this.state = {
            userName: '',
            users: []
        }
    }
    
    handleChange(e){
        this.setState( {userName: e.target.value}, () => {
            console.log(this.state.userName)
        })
    }
    handleSubmit(e){
        e.preventDefault();
        fetch(`https://api.github.com/users/${this.state.userName}`)
        .then((res) => res.json())
        .then(res => {
            let newUser = [...this.state.users, res]
            this.setState({users: newUser});
        })

    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                   <input onChange={handleChange}></input>
                   <button type="submit"></button>
                </form>
            </div>
        )
    }
}
