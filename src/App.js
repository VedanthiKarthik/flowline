import React from 'react'
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
import ProductsAndServices from './components/ProductAndServices/ProductsAndServices';
import FooterComponent from './components/Footer/FooterComponent';
import ProductsDetails from './components/PandSDetails/ProductsDetails';
import ServiceDetails from './components/PandSDetails/ServiceDetails';
import TabComponent from './components/Tab/Tab';
import FinalComponent from './components/FinalComponent/FinalComponent'
import CssBaseline from '@mui/material/CssBaseline';
import { StyledEngineProvider } from '@mui/material/styles';
import ToggleSvgImg from './components/toggleTheme/ToggleSvg';

// import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';

// import Contact from './components/Contact/Contact';
// const ProductsAndServices = React.lazy(() => import('./components/ProductAndServices/ProductsAndServices'));


function App () {
  return (
    <div className="App">

      {/* <div className='bgcover'></div> */}
      <StyledEngineProvider injectFirst>
        <CssBaseline />
        <ToggleSvgImg />
        <Router>
          {/* <Nav /> */}
          <Switch>
            <Route exact path="/" >
              <Home />
              <Nav />
              <ProductsAndServices />
              <About />

            </Route>
            <Route exact path='/products&servies'><TabComponent /></Route>
            {/* <Route exact path='/services'><ServiceDetails /></Route> */}
          </Switch>
        </Router>
        {/* <Footer/> */}
        <FinalComponent />
      </StyledEngineProvider>
    </div >
  );
}

export default App;
