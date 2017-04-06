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

  // TODO: Remove before launch
  if (Plantings.find().count() === 0) {
    Plantings.insert({
      volunteerName: "Alayna",
      varietalName: "Tomato",
      varietalImageUrl: "/tomato-large.png",
      varietalDescription: "The tomato (see pronunciation) is the edible fruit of Solanum lycopersicum, commonly known as a tomato plant, which belongs to the nightshade family, Solanaceae.      The species originated in Central and South America. The Nahuatl (Aztec language) word tomatl gave rise to the Spanish word 'tomate', from which the English word tomato originates.",
      createdAt: new Date()
    });
    Plantings.insert({
      volunteerName: "John",
      varietalName: "Sunflower",
      varietalImageUrl: "/sunflower-large.png",
      varietalDescription: "The sunflower is pretty. Israelis love 'em!",
      createdAt: new Date()
    });
  }
});
