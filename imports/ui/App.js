import React, { Component } from 'react';
import Team from './Team.js';

export default class App extends Component {
  getTeams() {
    return [
      { _id: 1, name: 'This is team 1' },
      { _id: 2, name: 'This is team 2' },
      { _id: 3, name: 'This is team 3' },

    ];
  }

  renderTeams() {
    return this.getTeams().map((team) => (
      <Team key={team._id} team={team} />
    ));
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Teams</h1>
        </header>
 
        <ul>
          {this.renderTeams()}
        </ul>
      </div>
    );
  }
}

