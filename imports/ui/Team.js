import React, { Component } from 'react';


export default class Team extends Component {

  onChangeName(event) {
    this.props.team.name = event.target.value;
    this.props.onChange();
  }

  onChangeDescription(event) {
    this.props.team.description = event.target.value;
    this.props.onChange();
  }

  render() {
    return (
      <div className="team">
        <input className="team__name" value={this.props.team.name} onChange={this.onChangeName.bind(this)}/>          
        <input className="team__description" value={this.props.team.description} onChange={this.onChangeDescription.bind(this)}/>        
      </div>
    );
  }
}

