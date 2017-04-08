import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Plantings } from '../../api/plantings.js';

import TallySheet from '../TallySheet.jsx';
import LastPlanting from '../LastPlanting.jsx';

// App component - represents the whole app
class App extends Component {
  render() {
    if (this.props.lastPlanting !== undefined) {
      return (
        <div className="container">
          <TallySheet count={3}/>
          <LastPlanting volunteer={this.props.lastPlanting.volunteerName}
                        imageUrl={this.props.lastPlanting.varietalImageUrl}
                        varietal={this.props.lastPlanting.varietalName}
                        description={this.props.lastPlanting.varietalDescription}/>
        </div>
      );
    } else {
      return (
        <div className="container">
          Loading...
        </div>
      )
    }
  }
}

App.propTypes = {
  lastPlanting: PropTypes.object
};

export default createContainer(() => {
  Meteor.subscribe('lastPlanting');
  return {
    lastPlanting: Plantings.findOne({})
  };
}, App);
