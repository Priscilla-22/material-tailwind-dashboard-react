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
    colors: ["#07a5f8"],
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

const productCollectionChart = {
  type: "line",
  height: 320,
  series: [
    {
      name: "Collected",
      data: [50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600], // Data for 2022
    },
    {
      name: "Sold",
      data: [60, 120, 40, 130, 470, 210, 90, 210, 10, 420, 680, 520], // Data for 2023
    },
  ],
  options: {
    ...chartsConfig,
    colors: ["#1fd527", "#07a5f8"], // Colors for the two lines
    stroke: {
      curve: "smooth", // Smooth curve
      width: 2,
    },
    markers: {
      size: 5,
    },
    xaxis: {
      ...chartsConfig.xaxis,
      title: {
        ...chartsConfig.xaxis.title,
        text: "Months",
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
      ], // Months as categories
    },
    yaxis: {
      ...chartsConfig.yaxis,
      title: {
        ...chartsConfig.yaxis.title,
        text: "Collections (KES)",
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "center",
    },
    tooltip: {
      theme: "light",
    },
  },
};

// const completedTasksChart = {
//   ...completedTaskChart,
//   series: [
//     {
//       name: "Tasks",
//       data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
//     },
//   ],
// };

const farmersPerRouteBarChart = {
  type: "bar",
  height: 340,
  series: [
    {
      name: "Sales",
      data: [50, 40, 300, 320, 500, 350, 200, 230, 500, 50, 40, 300, 320, 500, 350, 200, 230, 500],
    },
  ],
  options: {
    ...chartsConfig,
    colors: ["#1fd527"],
    xaxis: {
      ...chartsConfig.xaxis,
      title: {
        ...chartsConfig.xaxis.title,
        text: "Routes",
      },
      categories: [
        "Mombasa",
        "Kisumu",
        "Embu",
        "Taita",
        "Nyamira",
        "Bondo",
        "Laikipia",
        "Moyale",
        "Isiolo",
        "Mombasa",
        "Kisumu",
        "Embu",
        "Taita",
        "Nyamira",
        "Bondo",
        "Laikipia",
        "Moyale",
        "Isiolo",
      ],
    },
    yaxis: {
      ...chartsConfig.yaxis,
      title: {
        ...chartsConfig.yaxis.title,
        text: "Number of Farmers",
      },
    },
  },
};

const volumeOfCollectionPerRouteBarChart = {
  type: "bar",
  height: 340,
  series: [
    {
      name: "Sales",
      data: [50, 40, 300, 320, 500, 350, 200, 230, 500, 50, 40, 300, 320, 500, 350, 200, 230, 500],
    },
  ],
  options: {
    ...chartsConfig,

    xaxis: {
      ...chartsConfig.xaxis,
      title: {
        ...chartsConfig.xaxis.title,
        text: "Routes",
      },
      categories: [
        "Mombasa",
        "Kisumu",
        "Embu",
        "Taita",
        "Nyamira",
        "Bondo",
        "Laikipia",
        "Moyale",
        "Isiolo",
        "Mombasa",
        "Kisumu",
        "Embu",
        "Taita",
        "Nyamira",
        "Bondo",
        "Laikipia",
        "Moyale",
        "Isiolo",
      ],
    },
    yaxis: {
      ...chartsConfig.yaxis,
      title: {
        ...chartsConfig.yaxis.title,
        text: "Volume Collected",
      },
    },
  },
};

const farmerGenderDistributionChart = {
  type: "pie",
  width: 280,
  height: 280,
  series: [44, 48, 28], // Numeric values representing the data for each slice
  options: {
    ...chartsConfig,
    colors: ["#1fd527", "#07a5f8", "#6E7276"], // Colors for each slice
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
    title: "Products Collection in 1Week",
    description: "Last Campaign Performance",
    footer: "campaign sent 2 days ago",
    chart: websiteViewsChart,
  },
  {
    color: "white",
    title: "Daily Sales",
    description: "15% increase in today sales",
    footer: "updated 4 min ago",
    chart: dailySalesChart,
  },
  {
    color: "white",
    title: "Last 12 Months Sales Trend",
    description: "Last Campaign Performance",
    footer: "just updated",
    chart: productCollectionChart,
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
export const barChartsData = [

  {
    color: "white",
    title: "Gender Distribution",
    description: "Farmers Gender Distribution\n",
    footer: "campaign sent 2 days ago",
    chart: farmersPerRouteBarChart,
  },
  {
    color: "white",
    title: "Gender Distribution",
    description: "Farmers Gender Distribution\n",
    footer: "campaign sent 2 days ago",
    chart: volumeOfCollectionPerRouteBarChart,
  },
]

export default { lineChartsData, pieChartsData, barChartsData };
