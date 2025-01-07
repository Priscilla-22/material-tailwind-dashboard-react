import { chartsConfig } from "@/configs";

const websiteViewsChart = {
  type: "bar",
  height: 220,
  series: [
    {
      name: "Views",
      data: [50, 20, 10, 22, 50, 10, 40],
    },
  ],
  options: {
    ...chartsConfig,
    colors: "#388e3c",
    plotOptions: {
      bar: {
        columnWidth: "16%",
        borderRadius: 5,
      },
    },
    xaxis: {
      ...chartsConfig.xaxis,
      categories: ["M", "T", "W", "T", "F", "S", "S"],
    },
  },
};

const dailySalesChart = {
  type: "line",
  height: 320,
  series: [
    {
      name: "Sales",
      data: [10, 90, 20, 50, 40, 300, 320, 500, 350, 200, 230, 500],
    },
  ],
  options: {
    ...chartsConfig,
    colors: ["#0288d1"],
    stroke: {
      lineCap: "round",
    },
    markers: {
      size: 5,
    },
    xaxis: {
      ...chartsConfig.xaxis,
      title: {
        ...chartsConfig.xaxis.title,
        text: "Period",
      },
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yaxis: {
      ...chartsConfig.yaxis,
      title: {
        ...chartsConfig.yaxis.title,
        text: "Sales Amount in (KES)",
      },
    },
  },
};

const completedTaskChart = {
  type: "line",
  height: 320,
  series: [
    {
      name: "Sales",
      data: [ 10, 90,20,50, 40, 300, 320, 500, 350, 200, 230, 500],
    },
  ],
  options: {
    ...chartsConfig,
    colors: ["#388e3c"],
    stroke: {
      lineCap: "round",
    },
    markers: {
      size: 5,
    },
    xaxis: {
      ...chartsConfig.xaxis,
      title: {
        ...chartsConfig.xaxis.title,
        text: "Products",
      },
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yaxis: {
      ...chartsConfig.yaxis,
      title: {
        ...chartsConfig.yaxis.title,
        text: "Total Collections",
      },
    },
  },
};
const completedTasksChart = {
  ...completedTaskChart,
  series: [
    {
      name: "Tasks",
      data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
    },
  ],
};


const farmerGenderDistributionChart = {
  type: "pie",
  width: 280,
  height: 280,
  series: [44, 48, 28], // Numeric values representing the data for each slice
  options: {
    ...chartsConfig,
    colors: ["#7ed957", "#0089fa", "#6E7276"], // Colors for each slice
    labels: ["Male", "Female", "Others"], // Labels corresponding to the series
    legend: {
      formatter: function (label, opts) {
        const seriesValue = opts.w.globals.series[opts.seriesIndex];
        return `${label}: ${seriesValue}`;
      },
    },
  },
};




export const lineChartsData = [

  {
    color: "white",
    title: "Last 12 Month sales Trend\n",
    description: "15% increase in today sales",
    footer: "updated 4 min ago",
    chart: dailySalesChart,
  },
  {
    color: "white",
    title: "Products Collection in 1 Week\n",
    description: "Last Campaign Performance",
    footer: "just updated",
    chart: completedTasksChart,
  },
];

export const pieChartsData = [

  {
    color: "white",
    title: "Gender Distribution",
    description: "Farmers Gender Distribution\n",
    footer: "campaign sent 2 days ago",
    chart: farmerGenderDistributionChart,
  },
]

export default { lineChartsData, pieChartsData };
