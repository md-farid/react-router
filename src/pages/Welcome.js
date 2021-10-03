import React from 'react';
import { Route } from 'react-router-dom';

const Welcome = () => {
  return (
    <div>
      <h2>Home pages</h2>
      <Route path="/welcome/new-user">
        <p>New User pages</p>
      </Route>
    </div>
  );
};

export default Welcome;
