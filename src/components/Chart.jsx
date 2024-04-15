import React, { useState, useEffect } from "react";
import ApexCharts from "apexcharts";

const ExchangeRateChart = ({ baseCurrency }) => {
  const [exchangeRatess, setExchangeRates] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://openexchangerates.org/api/latest.json?app_id=43f35d2840d74325b0f18e78b3a6b4f9`
      );
      const data = await response.json();

      // Check if data has a `rates` property (assuming rates hold exchange rates)
      if (data.rates) {
        const formattedData = Object.entries(data.rates).map(
          ([date, rate]) => ({
            x: new Date(date).toLocaleDateString(),
            y: rate,
          })
        );
        setExchangeRates(formattedData.slice(-30));
      } else {
        // Handle case where data doesn't have rates (optional)
        console.error(
          "API response format might have changed. Rates not found."
        );
      }
    };

    fetchData();
  }, [baseCurrency]);

  const options = {
    chart: {
      type: "line",
      height: 350,
    },
    series: [
      {
        name: `${baseCurrency} Exchange Rate`,
        data: exchangeRates,
      },
    ],
    xaxis: {
      title: "Date",
      labels: {
        rotate: -45, // Rotate x-axis labels for better readability
      },
    },
    yaxis: {
      title: "Rate (USD)",
    },
  };

  return (
    <div id="chart">
      {/* Render the chart conditionally to avoid errors if data hasn't loaded yet */}
      {exchangeRates.length > 0 && (
        <ApexCharts options={options} series={options.series} type="line" />
      )}
    </div>
  );
};

export default ExchangeRateChart;
