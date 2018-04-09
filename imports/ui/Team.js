import React, { Component } from 'react';


export default class Team extends Component {

  render() {
    return (
      <li>{this.props.team.name}</li>

    );

  }

}

