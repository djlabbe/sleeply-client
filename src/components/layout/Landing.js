import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Spinner from './Spinner';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;

class Landing extends Component {
  render() {
    return (
      <Query query={IS_LOGGED_IN}>
        {({ loading, error, data }) => {
          if (loading) return <Spinner />;
          if (data.isLoggedIn) return <Redirect to='/logs' />;

          return (
            <section className='landing'>
              <div className='light-overlay'>
                <div className='landing-inner'>
                  <h1 className='x-large'>Sleeply</h1>
                  <p className='lead'>Because it takes a village...</p>
                  <div className='buttons'>
                    <Link to='/login' className='btn btn-light'>
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          );
        }}
      </Query>
    );
  }
}

export default Landing;
