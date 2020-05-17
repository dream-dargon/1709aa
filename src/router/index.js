import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { App } from '@/router/assembly'

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={App} />
        </Switch>
      </BrowserRouter>
    )
  }
}
