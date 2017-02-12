import React from 'react';
import axios from 'axios';
export default class Capitals extends React.Component {
	constructor(props) {
       super(props);

       this.state = {
          countries: []
       }

       this.search = this.search.bind(this);

    };


    componentWillMount() {
      axios.get('https://restcountries.eu/rest/v1/capital/')
      .then(response => {
        this.setState({countries:response.data})
      })
    }

    search(e) {
       

       if(e.target.value){
           axios.get('https://restcountries.eu/rest/v1/capital/'+e.target.value)
          .then(response => {
            this.setState({countries:response.data})
          })
       } 

    }

    render() {
      return (
          <div className="row">
              <div className="col-md-12 pt50 text-center">
                  <h1 className="brand-heading font-montserrat text-uppercase color-light">Search a capital by name</h1>                            
              </div>
              <div className="col-md-8 col-md-offset-2 text-center">
                <label className="sr-only" for="inputHelpBlock">Input with help text</label>
                <input type="text" onChange = {this.search} className="form-control input-circle input-lg no-border text-center"/>
                
              </div>
              <div className="col-md-12 text-center">
                <div className="row">
                     
                     {this.state.countries.map(function(country){
                        return <div key={ country.name } className="col-md-3 col-sm-6 col-xs-12 mt30">                    
                            <div className="team team-one">
                                
                                <h3>{ country.capital }</h3>    
                                <h4>{ country.name }</h4> 
                            </div>                    
                        </div>;
                      })}
                   
                  </div>
              </div>
          </div> 
              
      );
   }
}
