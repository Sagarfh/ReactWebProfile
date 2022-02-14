import React from 'react';
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom';
import 'bootstrap/scss/bootstrap.scss';
import 'bootstrap/js/dist/collapse.js';
import './App.css';



import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

import Profile from './Components/Profile/profile';
import AboutMe from './Components/AboutMe/aboutMe';
import Education from './Components/Education/education';
import Certification from './Components/Certification/certification';
import Projects from './Components/Projects/projects';
import Publications from './Components/Publications/publications';
import Activities from './Components/Activities/activities';
import CV from './Components/CV/cv';

function App() {
  return (
      <Router>
        <Header />
        <Switch>
            <Route exact path="/" component={Profile} />
            <Route path="/AboutMe" component={AboutMe} />
            <Route path="/Education" component={Education} />
            <Route path="/Certification" component={Certification} />
            <Route path="/Projects" component={Projects}/>
            <Route path="/Publications" component={Publications} />
            <Route path="/Activities" component={Activities} />
            <Route path="/CV" component={CV} />
            {/* <Route component={NotFound} /> */}
        </Switch>
        <Footer />
      </Router>
  );
}

export default App;
