import React from 'react';
import {Header} from './Components/Header'
import { Footer } from './Components/Footer';
import { Home } from './Components/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { NotFound } from './Components/NotFound';
import { About } from './Components/About';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.router = React.createRef()
  }

  render() {
      return (
        <div className="d-flex flex-direction-column" style={{minHeight: "100vh"}}>
        <Router ref={this.router}>
          <Header routeToPath={path => this.router.current.history.push(path)}/>
          <div className="flex-grow-1 d-flex">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route path="" component={NotFound} />
              </Switch>
          </div>
          <Footer />
        </Router>
      </div>
      )
  }
}

export default App;
