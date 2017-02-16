import React from 'react'

import Navigation from './header/Navigation.jsx'
import Footer from './footer/Footer.jsx'

export default class Layout extends React.Component {
   render() {
      return (
        <div>
		      <Navigation />
          <div class="container">
		        {this.props.children}
          </div>
          <Footer />
        </div>
      );
   }
}
