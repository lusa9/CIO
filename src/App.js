import React from 'react';
import {Header} from './Components/Header'
import { Footer } from './Components/Footer';
import { Home } from './Components/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { NotFound } from './Components/NotFound';
import { About } from './Components/About';
import { Legal } from './Components/Legal';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.router = React.createRef()
  }

  render() {
      const { routeToPath } = this
      return (
        <div className="d-flex flex-direction-column" style={{minHeight: "100vh"}}>
        <Router ref={this.router}>
          <Header {...{routeToPath}}/>
          <div className="flex-grow-1 d-flex">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/legal" component={Legal} />
                <Route path="" component={NotFound} />
              </Switch>
          </div>
          <Footer {...{routeToPath}}/>
        </Router>
      </div>
      )
  }

  routeToPath = path => this.router.current.history.push(path)
}

export default App;
