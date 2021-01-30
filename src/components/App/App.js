import React from 'react';
import { Route } from 'react-router-dom';
import './App.scss';

import { connect } from 'react-redux';

import pageHome from '../../pages/Home';
import pageCart from '../../pages/Cart';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const App = ({ setNavigation }) => {

  React.useEffect(() => {

    fetch('http://localhost:3000/navigation.json')
      .then(response => response.json())
      .then(response => setNavigation(response.items));

  }, []);

  return (
    <div className="App">
      <div className="header__wrap">
        <Header />
      </div>
      <div className="container__wrap">
        <Route exact path="/" component={pageHome} />
        <Route exact path="/cart" component={pageCart} />
      </div>
      <div className="footer__wrap">
        <Footer />
      </div>
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