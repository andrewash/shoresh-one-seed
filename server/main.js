import { Meteor } from 'meteor/meteor';

import { Plantings } from '../imports/api/plantings.js';
import { Varietals } from '../imports/api/varietals.js';

Meteor.startup(() => {
  // code to run on server at startup

  // Add pre-configured varietals (4)
  if (Varietals.find().count() === 0) {
    JSON.parse(Assets.getText("varietals.json")).varietals.forEach((doc) => {
      Varietals.insert(doc);
    });
  }
});
