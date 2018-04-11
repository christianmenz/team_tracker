import React, { Component } from 'react';


export default class Challenge extends Component {

  render() {
    return (
      <div className="challenge">
        <div className="challenge__name">
          {this.props.challenge.name}
        </div>
        <div className="challenge_description">
          {this.props.challenge.description}
        </div>        
      </div>
    );
  }
}

