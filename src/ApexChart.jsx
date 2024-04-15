import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import data from "./currency.json";

const ApexChart = () => {
  const [series, setSeries] = useState([]);
  const [options, setOptions] = useState({
    chart: {
      type: "area",
      stacked: false,
      height: 350,
      zoom: {
        type: "x",
        enabled: true,
        autoScaleYaxis: true,
      },
      toolbar: {
        autoSelected: "zoom",
      },
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
    },
    title: {
      text: "Stock Price Movement",
      align: "left",
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 90, 100],
      },
    },
    yaxis: {
      labels: {
        formatter: (val) => (val / 1000000).toFixed(0),
      },
      title: {
        text: "Price",
      },
    },
    xaxis: {
      type: "datetime",
    },
    tooltip: {
      shared: false,
      y: {
        formatter: (val) => (val / 1000000).toFixed(0),
      },
    },
  });

  useEffect(() => {
    const formattedData = data.timestamps.map((timestamp, index) => ({
      x: timestamp,
      y: parseFloat(data.exchangeRates[index]),
    }));
    setSeries([{ name: "USD, EUR", data: formattedData }]);
  }, []);

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="area"
          height={350}
        />
      </div>
      {/* Assuming you don't need the #html-dist element */}
    </div>
  );
};

export default ApexChart;
