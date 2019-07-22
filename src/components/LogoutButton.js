import React from 'react';
import { ApolloConsumer } from 'react-apollo';

export default function LogoutButton() {
  return (
    <ApolloConsumer>
      {client => (
        <div>
          onClick=
          {() => {
            client.writeData({ data: { isLoggedIn: false } });
            localStorage.clear();
          }}
          >
          <ExitIcon />
          Logout
        </div>
      )}
    </ApolloConsumer>
  );
}

const StyledButton = styled('button')(menuItemClassName, {
  background: 'none',
  border: 'none',
  padding: 0
});
