import React, { Component } from 'react';
import MorningLog from './MorningLog';
import NapLog from './NapLog';
import BedTimeLog from './BedTimeLog';
import NightLog from './NightLog';
import { Query } from 'react-apollo';
import Spinner from '../layout/Spinner';
import gql from 'graphql-tag';

const LOG_QUERY = gql`
  query {
    child(id: "cjydlwao002v50759vmyra0mt") {
      log {
        entries {
          id
          type
          note
        }
      }
    }
  }
`;

class LogList extends Component {
  renderEntry(logEntry) {
    switch (logEntry.type) {
      case 'MORNING':
        return <MorningLog key={logEntry.id} logEntry={logEntry} />;
      case 'NAP':
        return <NapLog key={logEntry.id} logEntry={logEntry} />;
      case 'BEDTIME':
        return <BedTimeLog key={logEntry.id} logEntry={logEntry} />;
      case 'NIGHT':
        return <NightLog key={logEntry.id} logEntry={logEntry} />;
      default:
        return <div>Error</div>;
    }
  }

  render() {
    return (
      <Query query={LOG_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <Spinner />;
          if (error) return <div>ERROR</div>;
          if (!data.child) return <div>No entries yet</div>
          const entriesToRender = data.child.log.entries;

          return (
            <div>
              {entriesToRender.map(logEntry => this.renderEntry(logEntry))}
            </div>
          );
        }}
      </Query>
    );
  }
}

export default LogList;
