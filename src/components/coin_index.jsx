import React from 'react';

import { Bar } from '@nivo/bar';

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

    // this.createData = this.createData.bind(this);
    // this.createKeys = this.createKeys.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
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

  update(field) {
    return e => {
      this.setState({
        [field]: e.currentTarget.value
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
  }

  // createData(field) {
  //   const items = this.state.items;
  //   let dataPoints = [];
  //   console.log(items);
  //   for (let i = 0; i < items.length; i++) {
  //     let val = items[i][field]

  //     dataPoints.push(
  //       {
  //         x: i,
  //         y: val
  //       }
  //     )
  //   }

  //   return dataPoints;
  // }

  // createKeys() {
  //   let keys = [];
  //   const items = this.state.items;

  //   for (let i = 0; i < items.length; i++) {
  //     keys.push(items[i].id)
  //   }

  //   return keys;
  // }

  render() {
    const { error, isLoaded, items, data } = this.state;
    let ex = this.createData('current_price');
    let key = ['high_24h', 'low_24h'];

    // console.log(ex);
    // console.log(key)
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <>
          <div className="graph-query-wrapper">
            <div className="graph">
              <Bar
                data={items}
                keys={data}
                indexBy="name"
                width={600}
                height={600}
                margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                padding={0.3}
                groupMode="grouped"
                colors={{ scheme: "nivo" }}
                borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: "name",
                  legendPosition: "middle",
                  legendOffset: 32
                }}
                axisLeft={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: "coin",
                  legendPosition: "middle",
                  legendOffset: -40
                }}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor={{
                  from: "color",
                  modifiers: [["darker", 1.6]]
                }}
                legends={[
                  {
                    dataFrom: "keys",
                    anchor: "bottom-right",
                    direction: "column",
                    justify: false,
                    translateX: 120,
                    translateY: 0,
                    itemsSpacing: 2,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemDirection: "left-to-right",
                    itemOpacity: 0.85,
                    symbolSize: 20,
                    effects: [
                      {
                        on: "hover",
                        style: {
                          itemOpacity: 1
                        }
                      }
                    ]
                  }
                ]}
                animate={true}
                motionStiffness={90}
                motionDamping={15}
              />
            </div>
            <div className="query-module">
              <form onSubmit={this.handleSubmit}>
                <div>
                  <h1>Options</h1>
                  <div>
                    <input
                      type="checkbox"
                      name="Current Price"
                      value="true"
                      onChange={this.update("current_price")}
                    />
                    Current Price
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      name="Market Cap"
                      value="true"
                      onChange={this.update("market_cap")}
                    />
                    Market Cap
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      name="Total Volume"
                      value="true"
                      onChange={this.update("total_volume")}
                    />
                    Total Volume
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      name="24h High"
                      value="true"
                      onChange={this.update("high_24h")}
                    />
                    24h High
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      name="24h Low"
                      value="true"
                      onChange={this.update("low_24h")}
                    />
                    24h Low
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      name="24h Change"
                      value="true"
                      onChange={this.update("price_change_24h")}
                    />
                    Change in 24h
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      name="Circulating Supply"
                      value="true"
                      onChange={this.update("circulating_supply")}
                    />
                    Circulating Supply
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      name="Total Supply"
                      value="true"
                      onChange={this.update('total_supply')}
                    />
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