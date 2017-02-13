import React from 'react';

import Navigation from './header/Navigation.jsx';
import Footer from './footer/Footer.jsx';

export default class Layout extends React.Component {
   render() {
      return (
        <div>
		      <Navigation />

		        
            <div className="pt100 pb100 bg-grad-blood-mary">
              <div className="container">
                <div class="row">

                    <div class="col-md-12 text-center pt50">
                        <h1 class="color-light mt40 font-pacifico text-capitalize">
                            Unlimited Color Button Style
                            <small class="font-open-sans color-light mt20 alpha7">Create your own color button</small>
                        </h1>

                    </div>
                </div>
                
              </div>
            </div>
            <div className="container">
              {this.props.children}
            </div>

            <Footer />
        </div>
      );
   }
}
