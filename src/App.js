import React from 'react';
import {Header} from './Header'
import { Footer } from './Footer';
import { Home } from './Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.router = React.createRef()
  }

  render() {
    console.log(this.router)
      return (
        <div className="bg-light d-flex flex-direction-column" style={{minHeight: "100vh"}}>
        <Router ref={this.router}>
          <Header routeToPath={path => this.router.current.history.push(path)}/>
          
          <div className="flex-grow-1 d-flex">
              <Switch>
                <Route exact path="/" component={Home} />
              </Switch>
          </div>
          <Footer />
        </Router>
      </div>
      )
  }
}

export default App;
