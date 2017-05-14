import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { createContainer } from 'meteor/react-meteor-data';

import { Varietals } from '../../api/varietals.js';
import { Plantings } from '../../api/plantings.js';

import SeedButton from '../../ui/SeedButton.jsx';

// App component - represents the whole app
let myCounter;
class Counter extends Component {
  constructor(props) {
    super(props);

    myCounter = this;
  }

  renderVarietals() {
    return this.props.varietals.map((varietal) => (
      <SeedButton key={varietal._id} varietalId={varietal._id} name={varietal.name} imageUrl={varietal.imageUrl} submitHandler={this.handleSubmit} />
    ));
  }

  handleSubmit(varietalId) {
    Meteor.call('plantings.insert', varietalId);
    FlowRouter.go("Display");
  }

  handleUndo() {
    Meteor.call('plantings.undo');
  }

  render() {
    if (this.props.varietals !== undefined) {
      return (
        <div className="entry">
          <img className="logo" src="logo-circle.png" />
          <form className="new-planting" onSubmit={this.handleSubmit.bind(this)} >
            <h1>What kind of seed would you like to plant?</h1>
            { this.renderVarietals() }
          </form>
          <button className="undo" onClick={this.handleUndo.bind(this)}>Undo</button>
        </div>
      );
    } else {
      return (
        <div className="entry">
          Loading...
        </div>
      )
    }
  }
}

Counter.propTypes = {
  varietals: PropTypes.array
};

export default createContainer(() => {
  Meteor.subscribe('varietals');
  return {
    varietals: Varietals.find({}, { sort: { "_id": 1 } }).fetch()
  };
}, Counter);
