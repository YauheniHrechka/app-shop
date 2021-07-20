import React from 'react';
// import { Route } from 'react-router-dom';
// import './App.scss';

import { useDispatch } from 'react-redux';
import { Context } from '../../context/context';

import { fetchGoods } from '../../redux/actions/goods';
import { fetchNavigation } from '../../redux/actions/navigation';

// import { pageHome, pageCart, pageLogin, pageRegistration } from '../../pages';
import { Header, Content, Footer } from '../';
import { Layout } from 'antd';

const App = () => {

  const dispatch = useDispatch();

  React.useEffect(() => {

    dispatch(fetchNavigation());
    dispatch(fetchGoods());

  }, [dispatch]);

  return (
    <Context.Provider value={dispatch}>
      <Layout>
        <Header />
        <Content />
        <Footer />
      </Layout>
      {/* <div className="App">
        <div className="header__wrap">
          <Header />
        </div>
        <div className="container__wrap">
          <Route exact path="/" component={pageHome} />
          <Route exact path="/cart" component={pageCart} />
          <Route exact path="/login" component={pageLogin} />
          <Route exact path="/registration" component={pageRegistration} />
        </div>
        <div className="footer__wrap">
          <Footer />
        </div>
      </div> */}
    </Context.Provider>
  );
}

export default App;