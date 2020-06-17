import React from 'react'

export default function UserCard(props) {
    const { avatar_url, login, bio } = props.userData;
    return (
        <div>
            <img src={avatar_url }></img>
            <h2>{ login } </h2>
            <p>{ bio }</p>
        </div>
    )
}
