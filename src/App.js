import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'John Doe',
        bio: 'A passionate software developer from Earth.',
        imgSrc: 'https://via.placeholder.com/150',
        profession: 'Software Engineer'
      },
      shows: false,
      timeSinceMount: 0
    };
    this.toggleShow = this.toggleShow.bind(this);
  }

  toggleShow() {
    this.setState(prevState => ({
      shows: !prevState.shows
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => ({
        timeSinceMount: prevState.timeSinceMount + 1
      }));
    }, 1000); // update every second
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { person, shows, timeSinceMount } = this.state;

    return (
      <div className="App">
        <h1>React Class Component Profile</h1>
        <button onClick={this.toggleShow}>
          {shows ? 'Hide Profile' : 'Show Profile'}
        </button>
        <p>Component mounted since: {timeSinceMount} seconds</p>

        {shows && (
          <div className="profile">
            <img src={person.imgSrc} alt="profile" />
            <h2>{person.fullName}</h2>
            <h4>{person.profession}</h4>
            <p>{person.bio}</p>
          </div>
        )}
      </div>
    );
  }
}

export default App;

