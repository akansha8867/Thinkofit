import './App.css';
import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Component/Home/Home'
import Navbar from './Component/Navbar/Navbar'
import Footer from './Component/Footer/Footer'
import LogIn from './Component/LogIn/LogIn'
import Contactus from './Component/ContactUs/Contactus';


export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/LogIn' component={LogIn} />
            <Route exact path='/Contactus' component={Contactus} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

export default App


