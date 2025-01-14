import {
    BanknotesIcon,
    UserPlusIcon,
    UsersIcon,
    ChartBarIcon,
    CalendarIcon,
    GiftIcon,
    TruckIcon,
    UserGroupIcon,
  } from "@heroicons/react/24/solid";
  
  export const logisticsCardsData = [
    {
      color: "blue",
      icon: TruckIcon,
      title: "Trips Taken",
      value: "2,300",
      footer: {
        color: "text-green-500",
        label: "Total No of trips taken",
      },
    },
    {
      color: "green",
      icon: TruckIcon,
      title: "Company Vehicles",
      value: "48",
      footer: {
        color: "text-green-500",
        label: "No of Company Vehicles",
      },
    },
    {
      color: "yellow",
      icon: TruckIcon,
      title: "3rd Party Vehicles",
      value: "12",
      footer: {
        color: "text-green-500",
        label: "Vehicle Insurance Type",
      },
    },
  ];
  
  export default logisticsCardsData;
  