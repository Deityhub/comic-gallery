import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import Content from './component/Content';
import Error404 from './component/Error404'
import Subscription from './component/Subscription';
import { Switch, Route } from 'react-router-dom';

import './App.css'


const App = () => {
    return (
       <main>
            <Header />
            <Switch>
                <Route path='/' component={Content} exact />
                <Route path='/subscribe' component={Subscription} exact />

                <Route component={Error404} />
            </Switch>
            <Footer />
       </main>
    )
}

export default App;