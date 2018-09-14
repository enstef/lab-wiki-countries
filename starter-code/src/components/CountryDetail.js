import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Link } from 'react-router-dom'

import '../style.css'
import 'bootstrap/dist/css/bootstrap.css'

import countries from "../countries.json"

class CountryDetail extends React.Component {
  render() {
    let country = countries.find(country => country.name.common === this.props.match.params.name)

    return (
      <div>
        <div className="list-group">
          <h1>{country.name.common}</h1>
          <p>Capital: {country.capital}</p>
          <p>Area: {country.area} km2</p>

          {country.borders.length === 0 && <div>No border countries</div>}

          <ul>
            {country.borders.length > 0 && country.borders.map(border => {
              let countryToDisplay = countries.find(country => country.cca3 === border)
              return (
                <Link to={"/country/" + countryToDisplay.name.common}>
                  <li>{countryToDisplay.name.common}</li>
                </Link>
              )
            })}
          </ul>
          
        </div>
      </div>
    );
  }
}

export default CountryDetail 