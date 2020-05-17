import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { App, Login, Reg } from '@/router/assembly'

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/reg" component={Reg} />
          <Route path="/" component={App} />
        </Switch>
      </BrowserRouter>
    )
  }
}
