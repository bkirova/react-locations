import React from 'react'

export default class Footer extends React.Component {
   render() {
   	  const footerStyle = {
   	  	background: "gray"
   	  }

      return (
        <div id="footer" class="footer navbar-fixed-bottom" style={footerStyle} >
            <div class="container">
                <p class="muted credit">Locations&copy; 2016. </p>
            </div>
        </div>
      )
   }
}
