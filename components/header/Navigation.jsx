import React from 'react';
import { Link } from 'react-router';

export default class Navigation extends React.Component {
   render() {
      return (

      	<nav className="navbar navbar-pasific navbar-mp megamenu navbar-fixed-top">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
                        <i className="fa fa-bars"></i>
                    </button>
                    <a className="navbar-brand page-scroll" href="#page-top">
                        Chartag
                    </a>
                </div>
        
                <div className="navbar-collapse collapse navbar-main-collapse">
                    <ul className="nav navbar-nav">
                    	<Link className="dropdown megamenu-fw has-dropdown-menu" href="/">Countries</Link>
                    	<Link className="dropdown megamenu-fw has-dropdown-menu" to="capitals">Capitals</Link>
                    </ul>
                </div>
            </div>
        </nav>
      );
   }
}
