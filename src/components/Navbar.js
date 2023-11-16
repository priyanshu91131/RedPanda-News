import React, { Component } from 'react'
import { Link } from "react-router-dom";

export class Navbar extends Component {




  render() {
 
    return (
      
            <nav className ="navbar navbar-expand-lg bg-dark-subtle">
                <div className ="container-fluid">
                <Link className ="navbar-brand" to="/"><strong>REDpanda</strong></Link>
                <button className ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className ="navbar-toggler-icon"></span>
                </button>
                <div className ="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className ="navbar-nav">
                    <Link className ="nav-link active" aria-current="page" to="/">Home</Link>
                    <Link className ="nav-link" to="/">About</Link>

                <div className="dropdown">
                  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Category
                  </button>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/business">Business</Link></li>
                    <li><Link className="dropdown-item" to="/entertainment">Entertainment</Link></li>
                    <li><Link className="dropdown-item" to="/sports">Sports</Link></li>
                    <li><Link className="dropdown-item" to="/health">Health</Link></li>
                    <li><Link className="dropdown-item" to="/science">Science</Link></li>
                    <li><Link className="dropdown-item" to="/technology">Technology</Link></li>
                    
                  </ul>
                </div>
                    
                </div>
                </div>
    </div>
    </nav>
      
    )
  }
}

export default Navbar
