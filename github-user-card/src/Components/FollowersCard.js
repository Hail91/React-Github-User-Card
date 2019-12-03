import React from 'react';

const FollowersCard = (props) => {
    return (
        <div>
            {props.followers.map(data => {
                return (
                    <div className='follower-cards'>
                        <h2>Name: {data.login}</h2>
                        <img src={data.avatar_url} alt='follower-img'/>
                    </div>
                )
            })}
        </div>
    )
}

export default FollowersCard;