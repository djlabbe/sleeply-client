import React, { Component } from 'react';
import { ApolloConsumer } from 'react-apollo';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;

class NavBar extends Component {
  authLinks = (
    <ul>
      <li>
        <Link to='/'>
          <span className='hide-sm'> Dashboard</span>
        </Link>
      </li>
      <li>
        <Link to='/'>
          <i className='fas fa-user' />
          <span className='hide-sm'> Profile</span>
        </Link>
      </li>
      <li>
        <ApolloConsumer>
          {client => (
            <Link
              onClick={() => {
                client.writeData({ data: { isLoggedIn: false } });
                localStorage.clear();
              }}
              to='/'
            >
              <i className='fas fa-sign-out-alt' />
              <span className='hide-sm'> Logout</span>
            </Link>
          )}
        </ApolloConsumer>
      </li>
    </ul>
  );

  guestLinks = (
    <ul>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </ul>
  );

  render() {
    return (
      <nav className='navbar bg-dark'>
        <h1>
          <Link to='/'>
            <i className='fas fa-spinner' /> Sleeply
          </Link>
        </h1>

        <Query query={IS_LOGGED_IN}>
          {({ data }) => (data.isLoggedIn ? this.authLinks : this.guestLinks)}
        </Query>
      </nav>
    );
  }
}

export default withRouter(NavBar);
