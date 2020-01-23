import React from "react";
import axios from "axios";

import {
  Button,
  MenuItem,
  Select,
  InputLabel,
  Grid,
  Paper,
  FormControl,
  TextField
} from "@material-ui/core";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Calendar from "../Calendar/index";
import Report from "./Report";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  paper: {
    // border: "2px solid yellow",
    margin: "10px"
  }
}));

// FUNCTION REPORTS HERE
function Reports(props) {
  const classes = useStyles();
  const [reportType, setReportType] = React.useState("");

  const [cardHolder, setCardHolder] = React.useState("");
  const [reportIsShowing, setReportIsShowing] = React.useState(false);
  const [startDate, setStartDate] = React.useState(""); // startDate looks like this: "2020-01-10"
  const [endDate, setEndDate] = React.useState(""); //
  const [reportData, setReportData] = React.useState(null);

  // React.useEffect(() => {
  //   return () => {
  //     console.log("Test ======>", props.current);
  //     setReportData([]);
  //   };
  // }, [props.current]);

  const handleInputChange = event => {
    // console.log("hey", event.target.value);
    setCardHolder(event.target.value);
  };

  // called when "Create Report Button" is clicked on Reports tab
  const handleCreateReport = () => {
    setReportIsShowing(!reportIsShowing);

    // make sure date is complete before api call
    if (startDate && endDate && reportType === "financial_summary") {
      let url = "https://viatouchmedia-prod.apigee.net/loyalty/reports/sales";

      let payload = {
        from_date: `${startDate}`,
        to_date: `${endDate}`,
        top_level_grouping: "client_id",
        sort: "items_sold,d"
      };

      const headers = {
        "Content-Type": "application/json",
        Authorization: "Bearer 3n5PWViFMZRoX1AzlHmoIGyerCSV"
      };

      axios
        .post(url, payload, { headers: headers })
        .then(res => {
          console.log("Response Data", res.data.report);
          setReportData(res.data.report);
        })
        .catch(err => console.log("There was error"));
    }
  };

  return (
    <div>
      <h3>Generate Report</h3>
      <Grid container>
        {/* Item #1 here */}
        <Grid item xs={12} sm={12} md={6}>
          <Paper className={classes.paper}>
            <Paper>
              <FormControl className={classes.formControl}>
                <h3>Report Type:</h3>
                <InputLabel id="demo-simple-select-label"></InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={reportType}
                  onChange={evt => setReportType(evt.target.value)}
                >
                  <MenuItem value={"financial_summary"}>
                    Financial Summary
                  </MenuItem>
                  <MenuItem value={"report2"}>Report 2</MenuItem>
                  <MenuItem value={"report3"}>Report 3</MenuItem>
                </Select>
                <TextField
                  onChange={handleInputChange}
                  size="small"
                  margin="normal"
                  id="outlined-basic"
                  label="Name of Cardholder"
                  variant="outlined"
                />
                {/* CREATE BUTTON */}
                <Button
                  onClick={handleCreateReport}
                  variant="contained"
                  color="primary"
                >
                  Create Report
                </Button>
              </FormControl>
            </Paper>
          </Paper>
        </Grid>
        {/* Item #2 here */}
        <Grid item xs={12} sm={12} md={6}>
          <Paper>
            <Grid>
              <Calendar
                calendarLabel={"Start Date"}
                setCalendar={startDt => setStartDate(startDt)}
              />
              <Calendar
                calendarLabel={"End Date"}
                setCalendar={endDt => setEndDate(endDt)}
              />
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      {/* This is the Financial Report */}
      <Paper className={classes.paper}>
        {reportData ? <Report report_data={reportData} /> : null}
      </Paper>
    </div>
  );
}

export default Reports;
