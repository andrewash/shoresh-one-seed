import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

import { Varietals } from './varietals.js';

export const Plantings = new Mongo.Collection('plantings');

if (Meteor.isServer) {
  // publish the last planting (but not all the previous ones)
  Meteor.publish('plantings', () => {
    return Plantings.find({});
  });
}

Meteor.methods({
  'plantings.insert'(volunteerName, varietalId) {
    check(volunteerName, String);
    check(varietalId, String);

    // Lookup varietal info to de-normalize data
    const varietal = Varietals.findOne({_id: varietalId});
    if (varietal) {
      Plantings.insert({
        volunteerName: volunteerName,
        varietalName: varietal.name,
        varietalImageUrl: varietal.imageUrl,
        varietalDescription: varietal.description,
        createdAt: new Date()
      });
    } else {
      console.log(`Error: Could not create planting because varietalId ${varietalId} was not found`);
    }

  }
})