import React from 'react';

import Graph from './graph';
import QueryModule from './query_module'

import '../stylesheets/splash.css'

class CoinIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      data: [],
      formFields: {
        current_price: false,
        market_cap: false,
        total_volume: false,
        high_24h: false,
        low_24h: false,
        price_change_24h: false,
        circulating_supply: false,
        total_supply: false
      }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }  

  update(field) {
    let formFields = {...this.state.formFields};

    return () => {
      formFields[field] = !formFields[field];

      this.setState({
        formFields
      });
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    let tempData = [];

    for (let h in this.state.formFields) {
      if (this.state.formFields[h]) {
        tempData.push(`${h}`);
      }
    }

    this.setState({
      data: tempData
    })

    console.log(this.state)
  }

  render() {
    const { error, isLoaded, items, data } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <>
          <div className="graph-query-wrapper">
            <Graph items={items} data={data}/>
            <QueryModule submit={this.handleSubmit} update={this.update}/>
          </div>
        </>
      );
    }
  }
}

export default CoinIndex