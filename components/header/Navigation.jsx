import React from 'react';
import { Link } from 'react-router';

export default class Navigation extends React.Component {
   render() {

    const navStyle = {
      color: 'gray',
      backgroundColor: 'white',
    };

      return (
        <nav className="navbar navbar-pasific navbar-mp navbar-standart navbar-fixed-top" >
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="/">
                        Locations
                    </a>
                </div>
        
                <div className="navbar-collapse collapse navbar-main-collapse">
                    <ul className="nav navbar-nav">
                    	<li className="dropdown megamenu-fw has-dropdown-menu"><Link href="/">Countries</Link></li>
                      <li className="dropdown megamenu-fw has-dropdown-menu"><Link to="capitals">Capitals</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
      );
   }
}
