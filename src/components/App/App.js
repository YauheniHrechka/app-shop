import React from 'react';
import './App.css';

import { connect } from 'react-redux';

import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';

const App = ({ setNavigation }) => {

  React.useEffect(() => {

    fetch('http://localhost:3000/navigation.json')
      .then(response => response.json())
      .then(response => setNavigation(response.items));

  }, []);

  return (
    <div className="App">
      <Header />
      <Navigation />
    </div>
  );
}

export default connect(
  state => ({}),
  dispatch => ({
    setNavigation: items => (
      dispatch({
        type: 'SET_NAVIGATION',
        payload: items
      })
    )
  })
)(App);