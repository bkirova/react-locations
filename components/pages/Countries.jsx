import React from 'react';
import axios from 'axios';
import { connect } from "react-redux";

import { fetchCountries } from "../../actions/countriesActions"

@connect((store) => {
  return {
    countries: store.countries.countries
  };
})

export default class Countries extends React.Component {
  constructor(props) {
     super(props);

     this.fetchCountries = this.fetchCountries.bind(this);
  };
  
  componentWillMount() {
    this.props.dispatch(fetchCountries())
  }

  fetchCountries(e) {
    this.props.dispatch(fetchCountries(e.target.value))
  }

  render() {
    const { countries } = this.props;

    return <div className="row">
              <div className="col-md-12 pt50 text-center">
                  <h1 className="brand-heading font-montserrat text-uppercase color-light">Search a country by name</h1>                            
              </div>
              <div className="col-md-8 col-md-offset-2 text-center">
                <input type="text" onChange = {this.fetchCountries} className="form-control input-circle input-lg no-border text-center"/>
              </div>
              <div className="col-md-12 text-center">
                <div className="row">
                     
                     {countries.map(function(country){
                        return <div key={ country.name } className="col-md-3 col-sm-6 col-xs-12 mt30">
                            <div className="team team-one">
                                <h3>{ country.name }, { country.region }</h3> 
                                <h4>Capital: { country.capital }</h4>     
                            </div>     
                        </div>;
                      })}
                   
                  </div>
              </div>
          </div> 

  }
}