import React, { Component } from 'react';

class MorningLog extends Component {
  render() {
    return (
      <div>
        THIS IS A MORNING LOG --- {this.props.logEntry.type}{' '}
        {this.props.logEntry.note}
      </div>
    );
  }
}
export default MorningLog;
