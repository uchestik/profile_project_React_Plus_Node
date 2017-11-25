import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//containers/components
//containers connect with redux, components handle props only and are
//independent of redux in a way
import Home from '../containers/Home';
import References from '../containers/References';
import SignInForm from '../containers/SignInForm';
import About from './About';
import Header from './Header';
import Footer from './Footer';



const App =()=>{
   
        return(
            <BrowserRouter>
                <div>
                <Header />
                    <Switch>
                        <Route path={'/signinform'} component={SignInForm} />
                        <Route path={'/'} component={Home} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    
}

export default App;


