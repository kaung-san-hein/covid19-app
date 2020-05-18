import React, { Component } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchCountries } from "../../api";

import styles from "./CountryPicker.module.css";

class CountryPicker extends Component {
  state = {
    countries: [],
  };

  async componentDidMount() {
    const countries = await fetchCountries();
    if (countries) {
      this.setState({
        countries,
      });
    }
  }

  handleChange = ({ target }) => {
    this.props.handleCountryChange(target.value);
  };

  render() {
    const { countries } = this.state;

    return (
      <FormControl className={styles.formControl}>
        <NativeSelect defaultValue="" onChange={this.handleChange}>
          <option value="">Global</option>
          {countries.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    );
  }
}

export default CountryPicker;
