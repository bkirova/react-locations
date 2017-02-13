import React from 'react';
import { Link } from 'react-router';

export default class Navigation extends React.Component {
   render() {
      return (
        <nav class="navbar navbar-default navbar-static-top">
          <a class="navbar-brand" href="#">Locations</a>
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li class="nav-item">
                <Link class="nav-link" href="/">Countries</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="capitals">Capitals</Link>
              </li>
            </ul>
          </div>
        </nav>
      );
   }
}
