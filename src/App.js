import React from 'react';
import { Header } from './Components/Header'
import { Footer } from './Components/Footer';
import { Home } from './Components/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { NotFound } from './Components/NotFound';
import { About } from './Components/About';
import { Legal } from './Components/Legal';
import { OCIO } from './Components/OCIO';
import { Services } from './Components/Services';
import { Team } from './Components/Team';
import { Resources } from './Components/Resources';
import { Contact } from './Components/Contact';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.router = React.createRef()
  }

  render() {
      const { routeToPath } = this
      return (
        <div className="d-flex flex-direction-column" style={{minHeight: "100vh"}}>
          <Header {...{routeToPath}}/>
          <Router ref={this.router}>
            <div className="flex-grow-1 d-flex margin-top-100">
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/ocio" component={OCIO} />
                  <Route exact path="/services" component={Services} />
                  <Route exact path="/team" component={Team} />
                  <Route exact path="/resources" component={Resources} />
                  <Route exact path="/contact" component={Contact} />
                  <Route exact path="/legal" component={Legal} />
                  <Route path="" component={NotFound} />
                </Switch>
            </div>
          </Router>
          <Footer {...{routeToPath}}/>
        </div>
      )
  }

  routeToPath = path => this.router.current.history.push(path)
}

export default App;
