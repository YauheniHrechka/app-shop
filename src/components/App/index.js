import React from 'react';
import { Route } from 'react-router-dom';
import './App.scss';

import axios from 'axios';

import { useDispatch } from 'react-redux';
import { Context } from '../../context/context';

import { setGoods } from '../../redux/actions/goods';
import { setNavigation } from '../../redux/actions/navigation';

import pageHome from '../../pages/Home';
import pageCart from '../../pages/Cart';
import { Header, Footer } from '../';

const App = () => {

  const dispatch = useDispatch();

  React.useEffect(() => {

    axios.get('/navigation')
      .then(res => dispatch(setNavigation(res.data)));

    axios.get('/goods')
      .then(res => dispatch(setGoods(res.data)));
  }, []);

  return (
    <Context.Provider value={dispatch}>
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
    </Context.Provider>
  );
}

export default App;