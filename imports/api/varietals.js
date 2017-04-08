import { Mongo } from 'meteor/mongo';

export const Varietals = new Mongo.Collection('varietals');

if (Meteor.isServer) {
  Meteor.publish('varietals', () => {
    return Varietals.find({});
  });
}