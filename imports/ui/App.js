import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Team from './Team.js';
import { withTracker } from 'meteor/react-meteor-data';
import { Teams } from '../api/teams.js';
import Tracker from './Tracker.js';
import Admin from './Admin.js';
import About from './About.js';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Tracker</Link>
                        </li>
                        <li>
                            <Link to="/admin">Administration</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>

                    <hr />

                    <Route exact path="/" component={Tracker} />
                    <Route path="/admin" component={Admin} />
                    <Route path="/about" component={About} />
                </div>
            </Router>
        );
    }
}