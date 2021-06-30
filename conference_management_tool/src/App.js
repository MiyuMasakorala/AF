import React, { Fragment } from 'react';
import { Button } from '@material-ui/core';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Search from './components/Search/Search';
import Explore from './components/Explore/Explore';
import Adventure from './components/Adventure/Adventure';
import Booking from './components/Booking/Booking';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';

class App extends React.Component {
    render() {
        return (
            <Router>
              <Fragment>
                <Navbar />
                <Banner />
                <Search />
                <Footer />
              </Fragment>
            </Router>
        );
    }
}

export default App;