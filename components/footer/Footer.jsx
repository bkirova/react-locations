import React from 'react';
import Copyright from './Copyright.jsx';

export default class Footer extends React.Component {
   render() {
      return (
         <footer id="footer" className="footer-one center-block bg-light pt50 pb30">
            <div className="container">
                <div className="row">
                    
                    <div className="col-md-2 col-xs-12 mb25">
                        <div className="navbar-brand-footer center-block">Pasific</div>
                        <div className="copyright center-block">&copy; 2016. All rights reserved.</div>
                    </div>
                    
                    <div className="col-md-8 col-xs-12 text-center">
                        <div className="row">
                            <div className="col-sm-12">
                                <ul className="bb1 bb-solid-1">
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Service</a></li>
                                    <li><a href="#">Price</a></li>
                                    <li><a href="#">Feature</a></li>
                                    <li><a href="#">Works</a></li>
                                    <li><a href="#">Shop</a></li>
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                            </div>
                            
                            <div className="col-sm-12 mt25">
                                <ul>
                                    <li><a href="#">Help Center</a></li>
                                    <li><a href="#">Knowledgebase</a></li>
                                    <li><a href="#">Term of Service</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">FAQs</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-2 col-xs-12">
                        <div className="social-container">
                            <ul className="footer-social text-center">
                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                <li><a href="#"><i className="fa fa-github"></i></a></li>
                                <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div> 
                    </div>
                    
                </div>
                
            </div>
        </footer>
      );
   }
}
