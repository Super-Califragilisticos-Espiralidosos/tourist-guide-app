import React from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './containers/Header';
import { BrowserRouter } from 'react-router-dom';
import RoutesEstablishment from './components/RoutesEstablishment';

/**
 * Header Container
 * @extends {Component<Props>}
 */
 class App extends React.Component {

  /**
   * Renders the container.
   * @return {string} - HTML markup for the container
   */
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <BrowserRouter>
          <Header/>
          <RoutesEstablishment />
        </BrowserRouter>
      </React.Fragment>
    )
  }
}

export default App;