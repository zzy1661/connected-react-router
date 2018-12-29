import React from 'react'
import Hc1 from './HomeContent1'
import Hc2 from './HomeContent2'
import { Route, Switch, Redirect } from 'react-router'

const Home = () => (
  <div>
    Home
    <Switch>
      <Redirect exact from="/home" to="/home/home1" />
      <Route path="/home/home1" component={Hc1} />
      <Route path="/home/home2" component={Hc2} />
    </Switch>
  </div>
)

export default Home
