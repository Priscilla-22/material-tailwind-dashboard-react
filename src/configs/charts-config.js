export const chartsConfig = {
  chart: {
    toolbar: {
      show: false,
    },
    padding:{
      left: '9%',
      right: '9%',
    }
  },
  title: {
    show: "",
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    title: {
      style: {
        fontSize: "14px",
        colors: "#37474f",
      },
      labels: {
        style: {
          colors: "#37474f",
          fontSize: "13px",
          fontFamily: "inherit",
          fontWeight: 300,
        },
      },
    },
  },
  yaxis: {
    title: {
      style: {
        fontSize: "14px",
        colors: "#37474f",
      },
      labels: {
        style: {
          colors: "#37474f",
          fontSize: "13px",
          fontFamily: "inherit",
          fontWeight: 300,
        },
      },
      offsetX: -8,
      offsetY: 0,
    },
  },
  grid: {
    show: true,
    borderColor: "#dddddd",
    strokeDashArray: 5,
    xaxis: {
      lines: {
        show: true,
      },
    },
    padding: {
      top: 5,
      right: 20,
    },
  },
  fill: {
    opacity: 0.8,
  },
  tooltip: {
    theme: "dark",
  },
};

export default chartsConfig;
