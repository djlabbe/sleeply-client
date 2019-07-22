import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

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
        <a href='#!'>
          <i className='fas fa-sign-out-alt' />
          <span className='hide-sm'> Logout</span>
        </a>
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
            <i className='fas fa-grip-horizontal' /> Sleeply
          </Link>
        </h1>
        {<Fragment>{this.guestLinks} </Fragment>}
      </nav>
    );
  }
}

export default withRouter(NavBar);
