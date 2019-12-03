import React from 'react'

const UserCard = (props) => {
    return (
        <div className='card'>
            <img src={props.user.avatar_url} alt='img'/>
            <h2>Name: {props.user.name}</h2>
            <h3>Location: {props.user.location}</h3>
            <p>Bio: {props.user.bio}</p>
            <p>Followers: {props.user.followers}</p>
            <p>Following: {props.user.following}</p>
        </div>
    )
}

export default UserCard;