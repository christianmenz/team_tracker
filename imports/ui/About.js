import React, { Component } from 'react';
import Team from './Team.js';
import { withTracker } from 'meteor/react-meteor-data';
import { Store } from '../api/store.js';

export default class About extends Component {

    render() {
        return (
            <div className="container">
                <header className="header">
                    <h1 className="header__title">About</h1>
                </header>
                <p>Der Team-Tracker wurde ..</p>
               <image src=""/>
            </div>
        );
    }
}



