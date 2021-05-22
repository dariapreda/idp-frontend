import React from 'react';
import './App.scss';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import SignUp from './components/pages/SignUp';
import FormLog2 from './components/FormLog2';
import MyAccountClient from './components/pages/MyAccountClient';
import MyAccountMester from './components/pages/MyAccountMester';
import AdminNavbar from "components/dashboard/Navbars/AdminNavbar";
import Footer from "components/dashboard/Footer/Footer";
import Sidebar from "components/dashboard/Sidebar/Sidebar";
import FixedPlugin from "components/dashboard/FixedPlugin/FixedPlugin";


function App() {

  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/sign-up' component={SignUp} />
          <Route path='/my-account-client' component={MyAccountClient} />
          <Route path='/my-account-mester' component={MyAccountMester} />
          <Route path='/log-in' component={FormLog2} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

