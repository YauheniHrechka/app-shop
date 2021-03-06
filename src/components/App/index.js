import React from 'react';
import { Route } from 'react-router-dom';
import './App.scss';

import { useDispatch } from 'react-redux';
import { Context } from '../../context/context';

import { fetchGoods } from '../../redux/actions/goods';
import { fetchNavigation } from '../../redux/actions/navigation';

import { pageHome, pageCart } from '../../pages';
import { Header, Footer } from '../';

const App = () => {

  const dispatch = useDispatch();

  React.useEffect(() => {

    dispatch(fetchNavigation());
    dispatch(fetchGoods());

  }, [dispatch]);

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