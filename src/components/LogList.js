import React, { Component } from 'react';
import MorningLog from './MorningLog';
import NapLog from './NapLog';
import BedTimeLog from './BedTimeLog';
import NightLog from './NightLog';

class LogList extends Component {
  renderEntry(logEntry) {
    if (logEntry.type === 'MORNING') {
      return <MorningLog key={logEntry.id} logEntry={logEntry} />;
    }

    if (logEntry.type === 'NAP') {
      return <NapLog key={logEntry.id} logEntry={logEntry} />;
    }

    if (logEntry.type === 'BEDTIME') {
      return <BedTimeLog key={logEntry.id} logEntry={logEntry} />;
    }

    if (logEntry.type === 'NIGHT') {
      return <NightLog key={logEntry.id} logEntry={logEntry} />;
    }
  }

  render() {
    const logsToRender = [
      {
        id: '1',
        type: 'MORNING',
        note: 'Prisma turns your database into a GraphQL API 😎'
      },
      {
        id: '2',
        type: 'NAP',
        note: 'The best GraphQL client'
      },
      {
        id: '3',
        type: 'BEDTIME',
        note: 'Stella went to bed nicely'
      },
      {
        id: '2',
        type: 'NIGHT',
        note: 'Johnny woke up at midnight it sucked'
      }
    ];

    return (
      <div>{logsToRender.map(logEntry => this.renderEntry(logEntry))}</div>
    );
  }
}

export default LogList;
