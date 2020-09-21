import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Registration from './containers/Registration';
import User from './containers/User';
import { RegistrationContextProvider } from './contexts/registrationContext';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <RegistrationContextProvider>
            <Route exact path="/" component={Registration} />
            <Route path="/user/" component={User} />
          </RegistrationContextProvider>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
