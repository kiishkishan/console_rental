import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { MainContainer } from '../container';

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route>
                    <MainContainer/>
                </Route>
            </Switch>
      </BrowserRouter>
    )
}
