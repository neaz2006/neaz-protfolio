import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import NoteFound from './Components/NoteFound/NoteFound';
import WorkSection from './Components/WorkSection/WorkSection';

const App = () => {
  return (
    
      <Router>
        <Switch>
        <Route exact path='/'>
            <Home />
          </Route>
        <Route path='/blog'>
            <Blog />
          </Route>
        <Route path='/my-works'>
            <WorkSection />
          </Route>
        <Route path='/about'>
            <About />
          </Route>
        <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='*'>
						<NoteFound/>
					</Route>
        </Switch>
      </Router>
  );
};

export default App;