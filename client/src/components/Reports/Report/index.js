import React from "react";
import { Paper, Grid } from "@material-ui/core";
import moment from "moment";

import "./styles.css";

export default ({ report_data }) => {
  console.log("Testing", report_data);
  return (
    <div className="outer">
      <h2>Report: Financial Summary</h2>
      <div>Date: {moment(new Date()).format("M/DD/YYYY")}</div>
      <div>
        {report_data.map((item, idx) => {
          return (
            <div className="container" key={idx}>
              <div className="inner">
                <h4>Transaction Count</h4>
                <h5>{item.transaction_count}</h5>
              </div>
              <div className="inner">
                <h4>Items Sold</h4>
                <h5>{item.items_sold}</h5>
              </div>
              <div className="inner">
                <h4>Gross Revenuse</h4>
                <h5>{item.gross_revenues}</h5>
              </div>
              <div className="inner">
                <h4>Raxes</h4>
                <h5>{item.taxes}</h5>
              </div>
              <div className="inner">
                <h4>Revenues</h4>
                <h5>{item.revenues}</h5>
              </div>
              <div className="inner">
                <h4>Cost</h4>
                <h5>{item.cost}</h5>
              </div>
              <div className="inner">
                <h4>Gross Margin</h4>
                <h5>{item.gross_margin}</h5>
              </div>
              <div className="inner">
                <h4>Gross Margin %</h4>
                <h5>{item.gross_margin_percent}</h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
