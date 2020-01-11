import React from 'react';

import { XYPlot, VerticalBarSeries, XAxis, YAxis, HorizontalGridLines, VerticalGridLines } from "react-vis";

import '../stylesheets/splash.css'

class CoinIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };

    this.createData = this.createData.bind(this);
  }

  componentDidMount() {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false")
      .then(res => res.json())
      .then(
        (result) => {
          // console.log(result);
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

  createData(field) {
    const items = this.state.items;
    let dataPoints = [];
    console.log(items);
    for (let i = 0; i < items.length; i++) {
      console.log(items[i])
      let val = items[i][field]

      dataPoints.push(
        {
          x: i,
          y: val
        }
      )
    }

    return dataPoints;
  }

  render() {
    const { error, isLoaded, items } = this.state;
    let ex = this.createData('current_price');
    console.log(ex);
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <>
          <div className="graph-query-wrapper">
            <div className="graph">
              <XYPlot height={600} width={600}>
                <XAxis />
                <YAxis />
                <HorizontalGridLines />
                <VerticalGridLines />
                <VerticalBarSeries data={ex} />
              </XYPlot>
              {/* {items.map(item => (
                
              ))} */}
            </div>
            <div className="query-module">
              <form>
                <div>
                  <h1>Options</h1>
                  <div>
                    <input type="checkbox" name="Current Price" value="current_price"/>
                    Current Price
                  </div>
                  <div>
                    <input type="checkbox" name="Market Cap" value="market_cap"/>
                    Market Cap
                  </div>
                  <div>
                    <input type="checkbox" name="Total Volume" value="total_volume"/>
                    Total Volume
                  </div>
                  <div>
                    <input type="checkbox" name="24h High" value="high_24h"/>
                    24h High
                  </div>
                  <div>
                    <input type="checkbox" name="24h Low" value="low_24h"/>
                    24h Low
                  </div>
                  <div>
                    <input type="checkbox" name="24h Change" value="price_change_24h"/>
                    Change in 24h
                  </div>
                  <div>
                    <input type="checkbox" name="Circulating Supply" value="circulating_supply"/>
                    Circulating Supply
                  </div>
                  <div>
                    <input type="checkbox" name="Total Supply" value="total_supply"/>
                    Total Supply
                  </div>
                </div>
                <input type="submit" value="Submit"></input>
              </form>
            </div>
          </div>
        </>
      );
    }
  }
}

export default CoinIndex