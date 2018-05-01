import React, { Component } from 'react';


export default class Challenge extends Component {

  onChangeName(event) {
    this.props.challenge.name = event.target.value;
    this.props.onChange();
  }

  onChangeDescription(event) {
    this.props.challenge.description = event.target.value;
    this.props.onChange();
  }

  onChangePoints(event) {
    this.props.challenge.points = parseInt(event.target.value);
    this.props.onChange();
  }

  render() {
    return (
      <div className="challenge">
        <input className="challenge__name" value={this.props.challenge.name} onChange={this.onChangeName.bind(this)}/>      
        <input className="challenge_description" value={this.props.challenge.description} onChange={this.onChangeDescription.bind(this)}/>
        <input className="challenge_points" value={this.props.challenge.points} onChange={this.onChangePoints.bind(this)}/>
      </div>
    );
  }
}

