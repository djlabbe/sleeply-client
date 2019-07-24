import React, { Component } from 'react';
import { ApolloConsumer } from 'react-apollo';
import { AUTH_TOKEN } from '../../constants';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Spinner from '../layout/Spinner';
import LoginForm from './LoginForm';

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

const SIGNUP_MUTATION = gql`
  mutation SignupMutation($name: String!, $email: String!, $password: String!) {
    signup(name: $name, email: $email, password: $password) {
      token
    }
  }
`;

class Login extends Component {
  state = {
    login: true // switch between Login and SignUp
  };

  render() {
    return (
      <ApolloConsumer>
        {client => (
          <Mutation
            mutation={this.state.login ? LOGIN_MUTATION : SIGNUP_MUTATION}
            onCompleted={data => {
              // Set a flag, save JWT, and redirect
              client.cache.writeData({ data: { isLoggedIn: true } });
              const { token } = this.state.login ? data.login : data.signup;
              localStorage.setItem(AUTH_TOKEN, token);
              this.props.history.push(`/`);
            }}
            onError={error => {
              const msg = "Oops, that's not a match";
              client.writeData({
                data: {
                  alert: {
                    message: msg,
                    alertType: 'danger'
                  }
                }
              });
            }}
          >
            {(mutation, { loading, error }) => {
              if (loading) return <Spinner />;
              return (
                <LoginForm
                  mutation={mutation}
                  login={this.state.login}
                  onToggle={() => this.setState({ login: !this.state.login })}
                />
              );
            }}
          </Mutation>
        )}
      </ApolloConsumer>
    );
  }
}

export default Login;
