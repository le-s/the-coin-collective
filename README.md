## Production readme
[The Coin Collective Live](https://le-s.github.io/the-coin-collective/)


### Getting started

To install dependencies 
```bs 
npm -i
```

To start app in development mode
```bs
npm start
```

### Frontend
- React

### Libraries
- @nivo/bar

### APIs used
- coingecko.com

### Feature
- Bar graph displaying the different fields desired when querying data
  - Note: Because some fields have extremely large numbers, for example: market cap, total volume, circulating supply and total supply. When querying current price, 24h high, 24 low and Change in 24h with the larger fields, the smaller numbers will not display on the graph.