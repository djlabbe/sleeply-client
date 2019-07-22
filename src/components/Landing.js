import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import Spinner from './Spinner';

const Landing = ({ isAuthenticated, loading }) => {
  console.log(loading);
  if (loading) {
    return <Spinner />;
  }

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>sleeply</h1>
          <p className='lead'>Because it takes a village...</p>
          <div className='buttons'>
            <Link to='/register' className='btn btn-primary'>
              Sign Up
            </Link>
            <Link to='/login' className='btn btn-light'>
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
