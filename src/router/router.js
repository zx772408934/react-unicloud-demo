import React from 'react'
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom'
import RouteGuard from "./RouteGuard"
import Login from "../pages/index/login/login"

import { Provider } from 'react-keep-alive';

function ZXRouter(props) {
    //Redirect一定要放在Switch的最后一个
    //Provider必须放在Router的里面，KeepAlive必须放在Provider里面，并且需要一个唯一的name值
    return (
        <HashRouter>
            <Provider>
                <Switch>
                    <Route path="/" exact render={() => (<Redirect to="/index"></Redirect>)}></Route>
                    <Route path="/login" exact>
                        <RouteGuard component={Login} name="login"></RouteGuard>
                    </Route>
                    <Redirect from="/*" to="/index" />
                </Switch>
            </Provider>
        </HashRouter>
    );
}
export default ZXRouter;