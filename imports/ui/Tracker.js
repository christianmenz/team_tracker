import React, { Component } from 'react';
import Team from './Team.js';
import { withTracker } from 'meteor/react-meteor-data';
import { Store } from '../api/store.js';

class Tracker extends Component {

    calculatePoints(team) {
        return team.results.map((result, index) => {
            if (result) {
                return this.props.store.challenges[index].points
            } else {
                return 0;
            }
        }).reduce((accumulator, currentValue) => { return accumulator + currentValue });
    }

    renderResults() {
        if (this.props.store) {
            return <table className="results-edit-table">
                <tbody>
                    <tr>
                        <td></td>
                        {this.props.store.challenges.map((challenge) => {
                            return <td>{challenge.name}</td>
                        })}
                        <td>Points</td>
                    </tr>
                    {this.props.store.teams.map((team) => {
                        return <tr>
                            <td>{team.name}</td>
                            {team.results.map((result, index) => {
                                if (result) {
                                    return <td><i className="icon fa fa-star" style={{color:'gold'}}/></td>
                                } else {
                                    return <td/>
                                }
                                
                            })}
                            <td>
                                {this.calculatePoints(team)}
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        } else {
            return 'Loading results...';
        }
    }

    render() {
        return (
            <div className="container">
                <header className="header">
                    <h1 className="header__title">Team Tracker</h1>
                </header>
                <div className="results">
                    {this.renderResults()}
                </div>
            </div>
        );
    }
}

export default withTracker(() => {
    return {
        store: Store.findOne({})
    };
})(Tracker);

