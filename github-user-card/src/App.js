import React from 'react';
import './App.css';
import axios from 'axios';
import UserCard from './Components/UserCard';
import FollowersCard from './Components/FollowersCard';
import NavBar from './Components/NavBar';

class App extends React.Component {
  state = {
    user: {},     // User state initialized
    followers: []  // Follower state initialized
  }
  
  componentDidMount() {
    axios.get('https://api.github.com/users/Hail91')
    .then(res => {
      // console.log(res)
      this.setState({ user: res.data });
      // console.log(res.data);
    })
    .catch(err => {
      console.log('Data not returned!', err);
    })
    this.getFollowers();
  }

  getFollowers() {
    axios.get('https://api.github.com/users/Hail91/followers')
    .then(response => {
      console.log(response)
      this.setState({ followers: response.data })
    })
    .catch(err => {
      console.log('Data not returned!', err);
    })
  }

  render() {
    return (
      <div>
        <NavBar />
        <UserCard user={this.state.user} />
        <FollowersCard followers={this.state.followers} />
      </div>
    )
  }
}

export default App;
