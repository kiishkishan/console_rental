import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { MainContainer } from '../container';
import { StyleGuide } from '../container/styleGuide';

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <MainContainer/>
                </Route>
                <Route exact path="/styleguide" component={StyleGuide.TypographyGuide}/>
            </Switch>
      </BrowserRouter>
    )
}
