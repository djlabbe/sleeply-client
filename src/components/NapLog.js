import React, { Component } from 'react';

class NapLog extends Component {
  render() {
    return (
      <div>
        THIS IS A NAP LOG --- {this.props.logEntry.type}{' '}
        {this.props.logEntry.note}
      </div>
    );
  }
}
export default NapLog;
