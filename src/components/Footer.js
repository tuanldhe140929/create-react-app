import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
               <footer>
        <div classname="container">
          <p>© Your Website 2019. All Rights Reserved.</p>
          <ul classname="list-inline">
            <li classname="list-inline-item">
              <a href="/">Privacy</a>
            </li>
            <li classname="list-inline-item">
              <a href="/">Terms</a>
            </li>
            <li classname="list-inline-item">
              <a href="/">FAQ</a>
            </li>
          </ul>
        </div>
      </footer>
            </div>
        );
    }
}

export default Footer;