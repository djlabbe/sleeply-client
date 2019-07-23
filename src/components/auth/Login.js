import React, { Fragment, Component } from 'react';
import { AUTH_TOKEN } from '../../constants';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const SIGNUP_MUTATION = gql`
  mutation SignupMutation($name: String!, $email: String!, $password: String!) {
    signup(name: $name, email: $email, password: $password) {
      token
    }
  }
`;
const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

class Login extends Component {
  state = {
    login: true, // switch between Login and SignUp
    email: '',
    password: '',
    name: '',
    error: ''
  };

  render() {
    const { login, email, password, name, error } = this.state;
    return (
      <Fragment>
        <h1 className='large text-primary'>{login ? 'Login' : 'Sign Up'}</h1>
        {error &&
          error.graphQLErrors.map(err => (
            <div key={err.message} className='text-danger'>
              {err.message}
            </div>
          ))}
        <form className='form'>
          {!login && (
            <div>
              <small className='form-text'>Name</small>
              <input
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
              value={email}
              onChange={e => this.setState({ email: e.target.value })}
              type='text'
            />
          </div>
          <div>
            <small className='form-text'>Password</small>
            <input
              value={password}
              onChange={e => this.setState({ password: e.target.value })}
              type='password'
            />
          </div>
        </form>

        <div className='my-1'>
          <Mutation
            mutation={login ? LOGIN_MUTATION : SIGNUP_MUTATION}
            variables={{ email, password, name }}
            onCompleted={data => this._confirm(data)}
            onError={error => this.setState({ error })}
            update={cache => {
              cache.writeData({ data: { isLoggedIn: true } });
            }}
          >
            {mutation => (
              <div className='btn btn-primary' onClick={mutation}>
                {login ? 'login' : 'create account'}
              </div>
            )}
          </Mutation>

          <div className='btn' onClick={this.toggleForm}>
            {login ? 'need to create an account?' : 'already have an account?'}
          </div>
        </div>
      </Fragment>
    );
  }

  toggleForm = () => {
    this.setState({
      login: !this.state.login,
      email: '',
      password: '',
      name: '',
      error: ''
    });
  };

  _confirm = async data => {
    const { token } = this.state.login ? data.login : data.signup;
    this._saveUserData(token);
    this.props.history.push(`/`);
  };

  _saveUserData = token => {
    localStorage.setItem(AUTH_TOKEN, token);
  };
}

export default Login;
