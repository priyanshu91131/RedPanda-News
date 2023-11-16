
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes, // instead of "Switch"
  Route
  
} from "react-router-dom";



export default class App extends Component {


  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        
        <Routes>
        <Route exact path = "/" element = {<News key = "gen" country = "in" category = "general"/>} />
        <Route exact path = "/business" element = {<News key = "business" country = "in" category = "business"/>}/>
        <Route exact path = "/entertainment" element = {<News key = "ent" country = "in" category = "entertainment"/>}/>
        <Route exact path = "/sports" element = {<News key = "sports" country = "in" category = "sports"/>}/>
        <Route exact path = "/health" element = {<News key = "health" country = "in" category = "health"/>}/>
        <Route exact path = "/science" element = {<News key = "sci" country = "in" category = "science"/>}/>
        <Route exact path = "/technology" element = {<News key = "tech" country = "in" category = "technology"/>}/>
        
        </Routes>
        </Router>
      </div>
    )
  }
}

