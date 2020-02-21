import React from 'react';
import{ Route, Switch, BrowserRouter } from 'react-router-dom';

import Home from '../page/Home';
import SignIn from '../page/SignIn';
import Profile from '../page/Profile';
import NotMatch from '../page/NotMatch';


const MainRoute = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/signin" component={SignIn}/> */}
                <Route exact path="/profile" component={Profile}/>
                <Route exact path="/news" component={Home}/>
                <Route path="/news-category/:category" component={Home}/>
                <Route component={NotMatch}/>
            </Switch>
        </BrowserRouter>
    )
}

export default MainRoute;