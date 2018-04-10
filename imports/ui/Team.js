import React, { Component } from 'react';


export default class Team extends Component {

  render() {
    return (
      <div className="team">
        <div className="team__name">
          {this.props.team.name}
        </div>
        <div className="team_description">
        </div>
        <div className="team_score">
          {this.props.team.score}
        </div>
      </div>
    );
  }
}

