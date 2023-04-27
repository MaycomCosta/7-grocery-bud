import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Home, Info } from '../pages/index'

const Routes = () =>{  
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/info" component={Info} />
      </Switch>
    </Router>
  )
}

export default Routes
