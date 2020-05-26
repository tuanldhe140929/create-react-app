import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return (
            <div> 
      <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="/">React Router - News</a>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i className="fas fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="/tin">Tin tức</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="/tin-chi-tiet">Tin chi tiết</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="/lien-he">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav> 
            </div>
        );
    }
}

export default Nav;