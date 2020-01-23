import React from "react";
import DatePicker from "react-datepicker";
import Select from "react-select";
import moment from "moment";
import { Paper, Grid } from "@material-ui/core";
import "react-datepicker/dist/react-datepicker.css";
// CSS Modules, react-datepicker-cssmodules.css
import "react-datepicker/dist/react-datepicker-cssmodules.css";

const styles = {
  grid: {
    // border: "2px solid red",
    margin: "10px"
  },
  paper: {
    // border: "2px dotted red",
    margin: "10px"
  }
};

// set variable dates for options value
let yesterday = moment().subtract(1, "days")._d;
let today = moment().subtract(0, "days")._d;
let oneWeekAgo = moment().subtract(7, "days")._d;
let sixMonthsAgo = moment().subtract(6, "months")._d;
let oneYearAgo = moment().subtract(1, "years")._d;

const options = [
  { value: yesterday, label: "Yesterday" },
  { value: today, label: "Today" },
  { value: oneWeekAgo, label: "1-Week" },
  { value: sixMonthsAgo, label: "6-Months" },
  { value: oneYearAgo, label: "1-Year" }
];

class Calendar extends React.Component {
  state = {
    dateData: null,
    select: {
      value: options[1], // "Today" as initial value for react-select
      options // all available options
    }
  };

  formatDate = date => {
    let dt = moment(date).format("YYYY-MM-DD");
    dt = dt.split("-");
    let stDate = `${dt[0]}-${dt[1]}-${dt[2]}`;

    return stDate;
  };

  // called after selecting a date on calendar
  //    date looks like this: Sun Jan 05 2020 00:00:00 GMT-0800 (Pacific Standard Time)
  handleCalendarChange = date => {
    // console.log("handle calendar change", date);

    if (date) {
      this.setState({
        dateData: date
      });

      // call function to grab date selection. note: setCalendar() can set start or end date
      this.props.setCalendar(this.formatDate(date));

      // clear the dropdown after the user used calendar to select a date
      this.clearDropdownValue();
    }
  };

  // this will set the current value for dropdown.
  // value looks like this: { value:'yesterday', label:'Yesterday' }, value===null to clear the dropdown
  setValue = value => {
    this.setState(prevState => ({
      select: {
        ...prevState.select,
        value
      }
    }));
  };

  // will set dropdown value to current selection
  handleDropdownChange = value => {
    // console.log("handleDropdownChange");
    this.setValue(value);

    // change calendar value to sync with dropdown selection, AND call setCalendar() to pass the date to parent
    // value looks like this: { value:Wed Jan 22 2020 08:56:27 GMT-0800 (Pacific Standard Time), label:"Yesterday" }
    this.setState({ dateData: value.value }, () =>
      this.props.setCalendar(this.formatDate(this.state.dateData))
    );
  };

  // will clear dropdown value to null
  clearDropdownValue = () => {
    this.setValue(null); // here we reset value
  };

  render() {
    const { select } = this.state;

    return (
      <Grid container style={styles.grid}>
        <Grid item>
          <h3 style={{ marginTop: "10px" }}>
            Select: {this.props.calendarLabel}
          </h3>
          <Paper style={styles.paper}>
            <DatePicker
              selected={this.state.dateData}
              //onSelect={this.handleCalendarDateClicked} // when day is clicked
              onChange={this.handleCalendarChange}
            />
          </Paper>
          <Paper style={styles.paper}>
            {/* SELECT DROPDOWN */}
            <Select
              name="form-field-name"
              value={select.value}
              onChange={this.handleDropdownChange}
              options={select.options}
            />
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default Calendar;
