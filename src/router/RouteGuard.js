import React from 'react';
import { Redirect, withRouter } from 'react-router-dom'
import { KeepAlive } from 'react-keep-alive';

function RouteGuard(props) {

    // console.log(props)

    //初始化参数
    const Component = props.component;
    const name = props.name || null;
    const permissions = props.permissions || false;

    //鉴权
    let status = false;
    let userInfo = Boolean(localStorage.getItem("token"));
    if (permissions) {
        if (userInfo) {
            status = true;
        }
        else {
            status = false;
        }
    }
    else {
        status = true;
    }

    return (
        status ?
            (
                <KeepAlive name={name}>
                    <Component {...props} />
                </KeepAlive>
            )
            :
            (
                <Redirect to={{
                    pathname: '/login',
                    state: { from: props.location }
                }} />
            )
    )
}
export default withRouter(RouteGuard);