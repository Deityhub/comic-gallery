import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import Categories from './component/Categories';
import Content from './component/Content';
import Error404 from './component/Error404'
import Subscription from './component/Subscription';
import ComicDetail from './component/ComicDetail';
import { Switch, Route } from 'react-router-dom';

import './App.css'


const App = () => {
    return (
       <main>
            <Header />
            <Switch>
                <Route path='/' component={Content} exact />
                <Route path='/subscribe' component={Subscription} exact />
                <Route path='/categories' component={Categories} exact />
                <Route path='/comic/:id' component={ComicDetail} exact />

                <Route component={Error404} />
            </Switch>
            <Footer />
       </main>
    )
}

export default App;