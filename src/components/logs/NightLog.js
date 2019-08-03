import React, { Component } from 'react';

class NightLog extends Component {
  render() {
    return (
      <div>
        THIS IS A NIGHT LOG --- {this.props.logEntry.type}{' '}
        {this.props.logEntry.note}
      </div>
    );
  }
}
export default NightLog;
