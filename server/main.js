import { Meteor } from 'meteor/meteor';
import { Store } from '../imports/api/store.js';

Meteor.startup(() => {
  if (!Store.findOne({})) {
    Store.insert({ teams: [], challenges: [] });
  }
});
