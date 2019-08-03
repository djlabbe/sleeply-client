import React, { Fragment, Component } from 'react';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    password2: '',
    name: ''
  };

  onSubmit = event => {
    event.preventDefault();
    const { name, email, password, password2 } = this.state;
    if (!this.props.login && password !== password2) {
      return;
    }
    this.props.mutation({ variables: { email, password, name } });
  };

  toggleForm = () => {
    this.setState({
      name: '',
      password: '',
      password2: '',
      error: ''
    });
  };

  render() {
    const { name, email, password, password2 } = this.state;
    const { login, onToggle } = this.props;

    return (
      <Fragment>
        <h1 className='large text-primary'>{login ? 'Login' : 'Sign Up'}</h1>

        <form className='form' onSubmit={this.onSubmit}>
          {!login && (
            <div>
              <small className='form-text'>Name</small>
              <input
                required
                value={name}
                onChange={e => this.setState({ name: e.target.value })}
                type='text'
                placeholder='Full name'
              />
            </div>
          )}
          <div>
            <small className='form-text'>Email</small>
            <input
              required
              value={email}
              onChange={e => this.setState({ email: e.target.value })}
              type='email'
            />
          </div>
          <div>
            <small className='form-text'>Password</small>
            <input
              required
              value={password}
              onChange={e => this.setState({ password: e.target.value })}
              type='password'
            />
          </div>
          {!login && (
            <div>
              <small className='form-text'>Password (again)</small>
              <input
                required
                value={password2}
                onChange={e => this.setState({ password2: e.target.value })}
                type='password'
              />
              {password !== password2 && (
                <small className='text-danger'>Passwords do not match.</small>
              )}
            </div>
          )}

          <button type='submit' className='btn btn-primary my-1'>
            {login ? 'login' : 'create account'}
          </button>

          <button className='btn' onClick={onToggle}>
            {login ? 'need to create an account?' : 'already have an account?'}
          </button>
        </form>
      </Fragment>
    );
  }
}

export default LoginForm;
