import React, { Component, PropTypes } from 'react';

// App component - represents the whole app
export default class TallySheet extends Component {
  render() {
    return (
      <div className="tally-sheet">
        <h1>{this.props.count} seedlings by JEDX</h1>
      </div>
    );
  }
}

TallySheet.propTypes = {
  count: PropTypes.number.isRequired,
  icons: PropTypes.arrayOf(PropTypes.string)
};