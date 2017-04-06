import React, { Component } from 'react';

import TallySheet from './TallySheet.jsx';
import LastPlanting from './LastPlanting.jsx';

// App component - represents the whole app
export default class App extends Component {
  render() {
    return (
      <div className="container">
        <TallySheet count={3} />
        <LastPlanting volunteer="Peter" imageUrl="/tomato-large.png" varietal="Tomato" description="The tomato (see pronunciation) is the edible fruit of Solanum lycopersicum, commonly known as a tomato plant, which belongs to the nightshade family, Solanaceae.
The species originated in Central and South America. The Nahuatl (Aztec language) word tomatl gave rise to the Spanish word 'tomate', from which the English word tomato originates."/>
      </div>
    );
  }
}
