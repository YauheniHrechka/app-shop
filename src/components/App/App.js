import React from 'react';
import { Route } from 'react-router-dom';
import './App.scss';

import { useDispatch } from 'react-redux';

import { setGoods } from '../../redux/actions/goods';
import { setNavigation } from '../../redux/actions/navigation';

import pageHome from '../../pages/Home';
import pageCart from '../../pages/Cart';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const App = () => {

  const dispatch = useDispatch();

  React.useEffect(() => {

    fetch('http://localhost:3000/navigation.json')
      .then(response => response.json())
      .then(response => dispatch(setNavigation(response.items)));

    fetch('http://localhost:3000/db.json')
      .then(response => response.json())
      .then(response => dispatch(setGoods(response.goods)))

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

export default App;