import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const duration = 5 * 1000; // 5 seconds

const GET_ALERT = gql`
  {
    alert @client {
      message @client
      alertType @client
    }
  }
`;

const Alert = () => {
  return (
    <Query query={GET_ALERT}>
      {({ data: { alert }, client }) => {
        if (!alert) return null;

        /* Update cache after a delay to clear out the alert and remove the toast */
        setTimeout(
          () =>
            client.writeData({
              data: {
                alert: null
              }
            }),
          duration
        );
        return (
          <div className={`alert alert-${alert.alertType}`}>
            {alert.message}
          </div>
        );
      }}
    </Query>
  );
};

export default Alert;
