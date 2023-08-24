import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { chartData } from "../../rmdashboard/productinsights/onePagerMutualFunds/chartdata";
// import { useEffect } from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  // DatePicker,
  // TimePicker,
} from "@material-ui/pickers";

// const options = {
//   scales: {
//     xAxes: [
//       {
//         gridLines: {
//           display: false,
//         },

//         ticks: {
//           maxTicksLimit: 6,
//           maxRotation: 0,
//           beginAtZero: true,
//         },
//       },
//     ],
//     yAxes: [
//       {
//         gridLines: {
//           display: false,
//         },
//         type: "linear",
//         display: true,
//         position: "left",
//       },
//     ],
//   },

//   elements: {
//     bar: {
//       borderWidth: 3,
//     },
//     point: {
//       radius: 3,
//     },
//   },
//   responsive: true,
//   legend: {
//     display: false,
//   },
//   plugins: {
//     title: {
//       display: true,
//     },
//     labels: {
//       display: false,
//     },
//     datalabels: {
//       display: false,
//     },
//     points: {
//       display: false,
//     },
//     tooltip: {
//       mode: "interpolate",
//       intersect: false,
//     },
//     interaction: {
//       mode: "index",
//       intersect: false,
//     },
//     crosshair: {
//       line: {
//         color: "#F66", // crosshair line color
//         width: 1, // crosshair line width
//       },
//       sync: {
//         enabled: true, // enable trace line syncing with other charts
//         group: 1, // chart group
//         suppressTooltips: false, // suppress tooltips when showing a synced tracer
//       },
//       zoom: {
//         enabled: true, // enable zooming
//         zoomboxBackgroundColor: "rgba(66,133,244,0.2)", // background color of zoom box
//         zoomboxBorderColor: "#48F", // border color of zoom box
//         zoomButtonText: "Reset Zoom", // reset zoom button text
//         zoomButtonClass: "reset-zoom", // reset zoom button class
//       },
//     },
//   },
// };

// const data = {
//   labels: chartData.map((el) => {
//     let date = el.date;
//     return date;
//   }),

//   datasets: [
//     {
//       data: chartData.map((price) => {
//         return price.end;
//       }),
//       fill: true,
//       spanGaps: true,
//       // borderColor: function ({ ...data }) {
//       //   console.log("data", data);
//       //   if (data.labels.indexOf(fromDate) > data.labels.indexOf(toDate)) {
//       //     return "#1aae55";
//       //   } else {
//       //     return "red";
//       //   }
//       // },
//       tension: 0.1,
//       // backgroundColor: gradient,
//       // gradient: {
//       //   backgroundColor: {
//       //     axis: "yAxes",
//       //     colors: {
//       //       0: "red",
//       //       50: "yellow",
//       //       100: "green",
//       //     },
//       //   },
//       // },
//       opacity: "0.3",
//       borderWidth: 3,
//       fill: {
//         type: "gradient",
//         gradient: {
//           shade: "dark",
//           // color: "#c6e8ce",
//           type: "horizontal",
//           shadeIntensity: 0.5,
//           gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
//           inverseColors: true,
//           opacityFrom: 1,
//           opacityTo: 1,
//           stops: [0, 50, 100],
//           colorStops: [],
//         },
//       },
//     },
//   ],
// };

const LineChart = () => {
  const data = () => {
    return {
      labels: chartData.map((el) => {
        let date = el.date;
        return date;
      }),

      datasets: [
        {
          data: chartData.map((price) => {
            return price.end;
          }),
          fill: true,
          spanGaps: true,

          backgroundColor: (context) => {
            const ctx = context.chart.ctx;
            const gradient = ctx.createLinearGradient(0, 0, 0, 200);
            gradient.addColorStop(0, "rgba(250,174,50,1)");
            gradient.addColorStop(1, "rgba(250,174,50,0)");
            return gradient;
          },
          borderColor: "rgba(75,192,192,1)",

          tension: 0.1,
          opacity: "0.3",
          borderWidth: 3,
        },
      ],
    };
  };

  const options = {
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
          },

          ticks: {
            maxTicksLimit: 6,
            maxRotation: 0,
            beginAtZero: true,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: false,
          },
          type: "linear",
          display: true,
          position: "left",
        },
      ],
    },

    elements: {
      bar: {
        borderWidth: 3,
      },
      point: {
        radius: 3,
      },
    },
    responsive: true,
    legend: {
      display: false,
    },
    plugins: {
      title: {
        display: true,
      },
      labels: {
        display: false,
      },
      datalabels: {
        display: false,
      },
      points: {
        display: false,
      },

      interaction: {
        mode: "index",
        intersect: false,
      },
      crosshair: {
        line: {
          color: "#F66", // crosshair line color
          width: 1, // crosshair line width
        },
        sync: {
          enabled: true, // enable trace line syncing with other charts
          group: 1, // chart group
          suppressTooltips: false, // suppress tooltips when showing a synced tracer
        },
        zoom: {
          enabled: true, // enable zooming
          zoomboxBackgroundColor: "rgba(66,133,244,0.2)", // background color of zoom box
          zoomboxBorderColor: "#48F", // border color of zoom box
          zoomButtonText: "Reset Zoom", // reset zoom button text
          zoomButtonClass: "reset-zoom", // reset zoom button class
        },
      },
    },
  };

  const [updatedData, setUpdatedData] = useState({ ...data });
  const [fromDate, setFromeDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());

  // const changeDateFormat = (today) => {
  //   today = today.toDateString().split(" ");
  //   today = new Date(today[1], today[2], today[3]);
  //   const month = new Date(Date.parse(today).getMonth() + 1).padStart(2, "0");
  //   var dd = String(today.getDate()).padStart(2, "0");
  //   var mm = String(Date.parse(today).getMonth() + 1).padStart(2, "0");
  //   console.log("mm", mm);
  //   // var mm = String(today.getMonth() + 1).padStart(2, "0");
  //   var yyyy = today.getFullYear();
  //   let date = dd + "-" + mm + "-" + yyyy;
  //   return date;
  // };

  // const colorChanges = ({ ...data }) => {
  //   if (data.labels.indexOf(fromDate) > data.labels.indexOf(toDate)) {
  //     data.datasets.borderColor = "#1aae55";
  //   } else {
  //     data.datasets.borderColor = "red";
  //   }
  // };

  var mmDate = null;
  const monthAssign = (mm) => {
    if (mm < 9) {
      mmDate = "0" + (mm + 1);
    } else {
      mmDate = mm + 1;
    }
    return mmDate;
  };

  const changeDateFormat = (today) => {
    console.log("today", today);
    today = today.toDateString().split(" ");
    console.log("updatetoday", today);
    const month1 = String(today[1]).toLowerCase();
    var months = [
      "jan",
      "feb",
      "mar",
      "apr",
      "may",
      "jun",
      "jul",
      "aug",
      "sep",
      "oct",
      "nov",
      "dec",
    ];
    const mm = months.indexOf(month1);
    // console.log(mm, "mm");
    var month = monthAssign(mm);
    var dd = today[2];
    var yyyy = today[3];
    let date = dd + "-" + month + "-" + yyyy;
    // console.log("date", date);
    return date;
  };

  const toDateHandle = (today) => {
    console.log("to", today);
    setToDate(changeDateFormat(today));
    console.log("this is todate", toDate);
    handleDate();
  };

  const fromDatehandle = (today) => {
    setFromeDate(changeDateFormat(today));
    handleDate();
  };

  const [timeToggle, setTimeToggle] = useState("1M");
  const handleChangedToogle = (e, newAlignment) => {
    if (newAlignment) setTimeToggle(newAlignment);
  };

  const handleDate = () => {
    if (
      fromDate &&
      toDate &&
      data.labels.includes(fromDate) &&
      data.labels.includes(toDate)
    ) {
      setUpdatedData({
        ...data,
        labels: data.labels.slice(
          data.labels.indexOf(fromDate),
          data.labels.indexOf(toDate)
        ),
      });
    }
    console.log("f", fromDate, "t", toDate);
  };

  return (
    <>
      <div
        className="onepager-button-container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          fontFamily: "Inter , sans-serif",
        }}
      >
        <div
          className="buttondiv"
          style={{
            display: "flex",
            width: "40%",
            justifyContent: "space-around",
          }}
        >
          <div
            style={{
              flexDirection: "column",
            }}
          >
            <div className="dashboard-body-second-card-navigator">
              <ToggleButtonGroup
                color="primary"
                value={timeToggle}
                onChange={handleChangedToogle}
                exclusive
              >
                <ToggleButton
                  value="YTD"
                  style={{
                    textTransform: "none",
                    padding: "1rem",
                    height: "37px",
                  }}
                  onClick={() =>
                    setUpdatedData({
                      ...data,
                    })
                  }
                >
                  YTD
                </ToggleButton>
                <ToggleButton
                  value="1M"
                  style={{
                    textTransform: "none",
                    padding: "1rem",
                    height: "37px",
                  }}
                  onClick={() =>
                    setUpdatedData({
                      ...data,
                      labels: data.labels.slice(
                        data.labels.length - 31,
                        data.labels.length
                      ),
                    })
                  }
                >
                  1M
                </ToggleButton>
                <ToggleButton
                  value="3M"
                  style={{
                    textTransform: "none",
                    padding: "1rem",
                    height: "37px",
                  }}
                  onClick={() =>
                    setUpdatedData({
                      ...data,
                      labels: data.labels.slice(
                        data.labels.length - 93,
                        data.labels.length
                      ),
                    })
                  }
                >
                  3M
                </ToggleButton>
                <ToggleButton
                  value="6M"
                  style={{
                    textTransform: "none",
                    padding: "1rem",
                    height: "37px",
                  }}
                  onClick={() =>
                    setUpdatedData({
                      ...data,
                      labels: data.labels.slice(
                        data.labels.length - 185,
                        data.labels.length
                      ),
                    })
                  }
                >
                  6M
                </ToggleButton>
                <ToggleButton
                  value="1Y"
                  style={{
                    textTransform: "none",
                    padding: "1rem",
                    height: "37px",
                  }}
                  onClick={() =>
                    setUpdatedData({
                      ...data,
                      labels: data.labels.slice(
                        data.labels.length - 367,
                        data.labels.length
                      ),
                    })
                  }
                >
                  1Y
                </ToggleButton>
                <ToggleButton
                  value="3Y"
                  style={{
                    textTransform: "none",
                    padding: "1rem",
                    height: "37px",
                  }}
                  onClick={() =>
                    setUpdatedData({
                      ...data,
                      labels: data.labels.slice(
                        data.labels.length - 1100,
                        data.labels.length
                      ),
                    })
                  }
                >
                  3Y
                </ToggleButton>
                <ToggleButton
                  value="5Y"
                  style={{
                    textTransform: "none",
                    padding: "1rem",
                    height: "37px",
                  }}
                  onClick={() =>
                    setUpdatedData({
                      ...data,
                      labels: data.labels.slice(
                        data.labels.length - 1825,
                        data.labels.length
                      ),
                    })
                  }
                >
                  5Y
                </ToggleButton>
                <ToggleButton
                  value="ALL"
                  style={{
                    textTransform: "none",
                    padding: "1rem",
                    height: "37px",
                  }}
                  onClick={() =>
                    setUpdatedData({
                      ...data,
                    })
                  }
                >
                  ALL
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: "40%",
            justifyContent: "space-around",
          }}
        >
          <h5 className="onepager-small-heading" style={{ padding: "0.4rem" }}>
            From
          </h5>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              inputVariant="outlined"
              autoOk={true}
              value={fromDate}
              className="client-input-date-input"
              inputFormat="DD-MM-YYYY"
              onChange={fromDatehandle}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </MuiPickersUtilsProvider>
          <h5 className="onepager-small-heading" style={{ padding: "0.4rem" }}>
            To
          </h5>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              autoOk={true}
              value={toDate}
              inputFormat="DD-MM-YYYY"
              className="client-input-date-input"
              onChange={(e) => toDateHandle(e)}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </MuiPickersUtilsProvider>
        </div>
      </div>
      <Line id="lineChartcanvas" data={updatedData} options={options} />
    </>
  );
};

export default LineChart;
