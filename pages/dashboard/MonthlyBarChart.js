import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import ReactApexChart from 'react-apexcharts';

const MonthlyBarChart = () => {
  const theme = useTheme();
  const { secondary } = theme.palette.text;
  const info = theme.palette.info.light;

  const [series, setSeries] = useState([
    {
      data: [80, 95, 70, 42, 65, 55, 78]
    }
  ]);

  const [options, setOptions] = useState({
    chart: {
      type: 'bar',
      height: 365,
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        columnWidth: '45%',
        borderRadius: 4
      }
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: ['Type 1', 'Type 2', 'Type 3', 'Type 4', 'Type 5', 'Type 6', 'Type 7'],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    yaxis: {
      show: false
    },
    grid: {
      show: false
    }
  });

  useEffect(() => {
    // Here, you can calculate the occurrence of different incident types
    // and update the series data accordingly.
    const incidentTypesData = [80, 95, 70, 42, 65, 55, 78];
    setSeries([{ data: incidentTypesData }]);

    setOptions((prevState) => ({
      ...prevState,
      colors: [info],
      xaxis: {
        labels: {
          style: {
            colors: [secondary, secondary, secondary, secondary, secondary, secondary, secondary]
          }
        }
      },
      tooltip: {
        theme: 'light'
      }
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [info, secondary]);

  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="bar" height={365} />
    </div>
  );
};

export default MonthlyBarChart;
