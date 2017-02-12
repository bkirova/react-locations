import React from "react"
import { connect } from "react-redux"

import Navigation from './header/Navigation.jsx';
import Footer from './footer/Footer.jsx';

import { fetchCountries } from "../actions/countriesActions"

@connect((store) => {
  console.log("in connect", store);
  return {
    countries: store.countries.countries,
  };
})

export default class Layout extends React.Component {

  
  componentWillMount() {
    console.log("In component mount");
    this.props.dispatch(fetchCountries())
  }

  fetchCountries() {
    this.props.dispatch(fetchCountries())
  }

  render() {

    console.log(this.props);
    const { countries } = this.props;

    const mappedCountries = countries.map(country => <li>{country.name}</li>)

    return <div>

      <Navigation />
      <div className="pt100 pb100 bg-grad-mojito">
          <div className="container">
            {this.props.children}
          </div>
        </div>
          <ul>{mappedCountries}</ul>
        <Footer />
    </div>
  }
}