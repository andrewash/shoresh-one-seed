import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Plantings } from '../../api/plantings.js';

import Counter from '../Counter.jsx';
import LastPlanting from '../LastPlanting.jsx';

// App component - represents the whole app
class App extends Component {
  nextEntry() {
    FlowRouter.go("Entry");
  }

  render() {
    if (this.props.lastPlanting !== undefined) {
      return (
        <div className="display" onClick={this.nextEntry.bind(this)}>
          <Counter count={this.props.count}/>
          <LastPlanting imageUrl={this.props.lastPlanting.varietalImageUrl}
                        varietal={this.props.lastPlanting.varietalName}
                        description={this.props.lastPlanting.varietalDescription}/>
        </div>
      );
    } else {
      return (
        <div className="display" onClick={this.nextEntry.bind(this)}>
          <Counter count={this.props.count}/>
        </div>
      );
    }
  }
}

App.propTypes = {
  lastPlanting: PropTypes.object,
  count: PropTypes.number
};

export default createContainer(() => {
  Meteor.subscribe('plantings');
  return {
    lastPlanting: Plantings.findOne({}, { sort: { createdAt: -1 }}),
    count: Plantings.find({}).count()
  };
}, App);
