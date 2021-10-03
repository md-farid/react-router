import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainHeader from './components/MainHeader';
import Details from './pages/Details';
import Prooducts from './pages/Products';
import Welcome from './pages/Welcome';

const App = () => {
  return (
    <div>
      <header>
        <MainHeader />
      </header>
      <main>
        <Switch>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Prooducts />
          </Route>
          <Route path="/products/:productId">
            <Details />
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default App;
