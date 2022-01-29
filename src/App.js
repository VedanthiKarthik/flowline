import React, { Suspense } from 'react'
import './App.css';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import About from './components/About/About';
// import ProductsAndServices from './components/ProductAndServices/ProductsAndServices';
import Footer from './components/Footer/Footer';
import ProductsDetails from './components/PandSDetails/ProductsDetails';
import ServiceDetails from './components/PandSDetails/ServiceDetails';
import TabComponent from './components/Tab/Tab';
import { CssBaseline } from '@material-ui/core';
import { StyledEngineProvider } from '@mui/material/styles';



// import Contact from './components/Contact/Contact';
const ProductsAndServices = React.lazy(() => import('./components/ProductAndServices/ProductsAndServices'));


function App() {
  return (

    <div className="App">
      <div className='bgcover'></div>
      <CssBaseline />
      <StyledEngineProvider injectFirst>
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/" >
              <Home />
              <Suspense fallback={<div>Loading...</div>}>
                <ProductsAndServices />
              </Suspense>
              <About />
            </Route>
            <Route exact path='/products&servies'><TabComponent /></Route>
            {/* <Route exact path='/services'><ServiceDetails /></Route> */}
          </Switch>
          <Footer />
        </Router>
      </StyledEngineProvider>
    </div >
  );
}

export default App;
