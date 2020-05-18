import React, { Component } from "react";
import "./App.css";
import { Cards, Chart, CountryPicker } from "./components";
import { fetchData } from "./api";
import covid19 from "./images/image.png";

class App extends Component {
  state = {
    data: null,
    country: "",
  };

  async componentDidMount() {
    const data = await fetchData();
    if (data) {
      this.setState({
        data,
      });
    }
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);
    if (data) {
      this.setState({
        data,
        country,
      });
    }
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className="container">
        <img src={covid19} className="image" alt="COVID-19" />
        {data ? <Cards data={data} /> : <p>Loading...</p>}
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        {data ? <Chart data={data} country={country} /> : <p>Loading...</p>}
      </div>
    );
  }
}

export default App;
