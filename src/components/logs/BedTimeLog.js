import React, { Component } from 'react';

class BedTimeLog extends Component {
  render() {
    return (
      <div>
        THIS IS A BEDTIME LOG --- {this.props.logEntry.type}{' '}
        {this.props.logEntry.note}
      </div>
    );
  }
}
export default BedTimeLog;
