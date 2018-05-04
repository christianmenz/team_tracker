import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Team from './Team.js';
import { withTracker } from 'meteor/react-meteor-data';
import Tracker from './Tracker.js';
import Admin from './Admin.js';
import About from './About.js';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ul class="nav">
                        <li>
                            <Link to="/" class="nav__elem">Tracker</Link>
                        </li>
                        <li>
                            <Link to="/admin" class="nav__elem">Administration</Link>
                        </li>
                        <li>
                            <Link to="/about" class="nav__elem">About</Link>
                        </li>
                    </ul>
                    <Route exact path="/" component={Tracker} />
                    <Route path="/admin" component={Admin} />
                    <Route path="/about" component={About} />
                </div>
            </Router>
        );
    }
}