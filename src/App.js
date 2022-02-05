import React, { Component } from 'react';
import './App.scss';
import { Content } from 'carbon-components-react';
import UI from './components/UI';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import HolidayPage from './content/HolidayPage';

class App extends Component {
  render() {
    return (
      <>
        <UI />
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/holiday" component={HolidayPage} />
          </Switch>
        </Content>
      </>
    );
  }
}

export default App;
