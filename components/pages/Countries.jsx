import React from 'react';
import { connect } from "react-redux";

import { fetchCountries } from "../../actions/countriesActions"

@connect((store) => {
  return {
    countries: store.countries.countries,
    fetching: store.countries.fetching,
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
    const { fetching, countries } = this.props;

    return <div id="content">

                <div class="container">
                  <div class="row">
                    <div class="col-md-12 pt50 text-center">
                      <h1 class="brand-heading font-montserrat text-uppercase color-light">Search a country by name</h1>                            
                    </div>
                    <div class="col-md-8 col-md-offset-2 text-center">
                      <input type="text" onChange = {this.fetchCountries} class="form-control input-circle input-lg no-border text-center"/>
                    </div>
                  </div>
                  <hr />
                  <div class="row text-center">
                    {fetching ? <h2>Loading...</h2>
                    : countries.map(function(country){
                      return <div key={ country.name } class="col-md-6 col-sm-12 col-xs-12 mt30">
                                <div class="panel panel-default">
                                  <div class="panel-heading">
                                    <h3 class="panel-title"><span class={"flag-icon flag-icon-"+country.alpha2Code.toLowerCase()}></span> { country.name }, { country.region }</h3>
                                  </div>
                                  <div class="panel-body">
                                    <div class="col-md-6 col-sm-12 col-xs-12 mt30">
                                      <h5>Capital: { country.capital }</h5>    
                                      <h5>Population: { country.population }</h5>    
                                      <h5>Native Name: { country.nativeName }</h5>   
                                    </div>  
                                    <div class="col-md-6 col-sm-12 col-xs-12 mt30">
                                      <h5>Demonym: { country.demonym }</h5>    
                                      <h5>Alpha2Code: { country.alpha2Code }</h5>    
                                      <h5>Alpha2Code: { country.alpha3Code }</h5>    
                                    </div>  
                                  </div>
                                </div>    
                              </div>
                      })
                      }
                  </div>  

                </div>
                  

           </div> 

  }
}