import React from 'react';

import '../stylesheets/splash.css'

const QueryModule = ({submit, update}) => {
  return (
    <div className="query-module">
      <form className="form" onSubmit={submit}>
        <h1>Options</h1>
        <div className="input-format">
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="Current Price"
              value="true"
              onChange={update("current_price")}
            />
            <span className="checkbox-custom"></span>
            Current Price
          </label>
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="Market Cap"
              value="true"
              onChange={update("market_cap")}
            />
            <span className="checkbox-custom"></span>
            Market Cap
          </label>
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="Total Volume"
              value="true"
              onChange={update("total_volume")}
            />
            <span className="checkbox-custom"></span>
            Total Volume
          </label>
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="24h High"
              value="true"
              onChange={update("high_24h")}
            />
            <span className="checkbox-custom"></span>
            24h High
          </label>
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="24h Low"
              value="true"
              onChange={update("low_24h")}
            />
            <span className="checkbox-custom"></span>
            24h Low
          </label>
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="24h Change"
              value="true"
              onChange={update("price_change_24h")}
            />
            <span className="checkbox-custom"></span>
            Change in 24h
          </label>
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="Circulating Supply"
              value="true"
              onChange={update("circulating_supply")}
            />
            <span className="checkbox-custom"></span>
            Circulating Supply
          </label>
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="Total Supply"
              value="true"
              onChange={update("total_supply")}
            />
            <span className="checkbox-custom"></span>
            Total Supply
          </label>
        </div>
        <input className="submit" type="submit" value="Submit"></input>
      </form>
    </div>
  );
};

export default QueryModule;