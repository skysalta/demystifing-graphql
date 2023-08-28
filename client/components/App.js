import { Switch, Route } from 'react-router-dom'
import React, {Fragment} from 'react'
import Header from './Header'
import Tasks from '../pages/Tasks'

const App = () => (
  <Fragment>
        <Header />
        <div>
        <Switch>
            <Route exact path="/" component={Tasks} />
        </Switch>
        </div>
    </Fragment>
)

export default App
