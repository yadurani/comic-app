import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Layout from '../components/Layout'
import Home from '../pages/Home'
import Category from '../pages/Category'

const Routes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/:category" component={Category} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default Routes
