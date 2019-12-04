import React from 'react'
import 'github-calendar/dist/github-calendar-responsive.css';
import GitHubCalendar from 'github-calendar';

const UserCard = (props) => {

    GitHubCalendar('.calendar', 'Hail91', {responsive: true})
    return (
        <div className="user-card">
            <img src={props.user.avatar_url} className="card-img-top" alt="img"/>
            <a href={props.user.html_url} target="_"><i className="fab fa-github fa-2x"></i></a>
        <div className="card-body">
            <div className="calendar"></div>
            <h2 className="text-primary">{props.user.name}</h2>
            <p className="card-text">{props.user.bio}</p>
            <p className="card-text">{props.user.location}</p>
        </div>
        </div>
    )
}

export default UserCard;