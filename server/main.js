import { Meteor } from 'meteor/meteor';
import { Store } from '../imports/api/store.js';

Meteor.startup(() => {
  Store.remove({});
  Store.insert({ teams: [], challenges: [], state: [] });
});
