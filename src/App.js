import React from 'react';
import {Header} from './Header'
import { Footer } from './Footer';
import { Home } from './Home';

const App = () => (
  <div className="bg-light d-flex flex-direction-column" style={{minHeight: "100vh"}}>
    <Header />
    <div className="flex-grow-1 d-flex">
      <Home />
    </div>
    <Footer />
  </div>
)


export default App;
