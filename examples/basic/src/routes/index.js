import React from 'react'
import { Route, Switch, Redirect } from 'react-router'
import Home from '../components/Home'
import Hello from '../components/Hello'
import Counter from '../components/Counter'
import NoMatch from '../components/NoMatch'
import NavBar from '../components/NavBar'

const routes = (
  <div>
    <NavBar />
    <Switch>
      {/* <Route exact path="/" component={Home} /> */}
      <Redirect exact from="/" to="/home" />
      <Route path="/home" component={Home} />
      <Route path="/hello" component={Hello} />
      <Route path="/counter" component={Counter} />
      <Route component={NoMatch} />
    </Switch>
  </div>
)

export default routes
