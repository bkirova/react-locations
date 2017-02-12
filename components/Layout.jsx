import React from 'react';

import Navigation from './header/Navigation.jsx';
import Footer from './footer/Footer.jsx';

export default class Layout extends React.Component {
   render() {
      return (
        <div>
		      <Navigation />
		        
            <div className="pt100 pb100 bg-grad-mojito">
              <div className="container">
                {this.props.children}
              </div>
            </div>

            <Footer />
        </div>
      );
   }
}
