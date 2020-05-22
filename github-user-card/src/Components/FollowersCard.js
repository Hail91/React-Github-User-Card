import React from 'react';

const FollowersCard = (props) => {

    return (
        <div className='follower-container'>
            {props.followers.map(data => {
                return (
                    <div className="card" style={{width: '18rem'}}>
                        <img src={data.avatar_url} className="card-img-top" alt="img"/>
                        <a href={data.html_url} target="_"><i className="fab fa-github fa-2x"></i></a>
                    <div className="card-body">
                        <p className="card-text text-primary"><i class="fas fa-user"></i> {data.login}</p>
                    </div>
                    </div>
                )
            })}
        </div>
    )
}

export default FollowersCard;