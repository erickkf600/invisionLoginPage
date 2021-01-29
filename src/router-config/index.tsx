import React from 'react'
import{ BrowserRouter, Switch, Redirect } from 'react-router-dom'
import { Pages } from './routes-array'
import * as routes from './routes'

const Routing = () =>{
    return (
        <BrowserRouter>
            <Switch>
                {routes.getRoutes(Pages)}
                <Redirect from="/" to="/login"/>
                <Redirect from="*" to="/login"/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routing;


