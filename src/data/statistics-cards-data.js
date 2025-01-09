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

export const statisticsCardsData = [
  {
    color: "blue",
    icon: UsersIcon,
    title: "Our Farmers",
    value: "2,300",
    footer: {
      color: "text-green-500",
      value: "+3%",
      label: "than last month",
    },
  },
  {
    color: "green",
    icon: BanknotesIcon,
    title: "Collections",
    value: "$53k",
    footer: {
      color: "text-green-500",
      value: "+55%",
      label: "than last week",
    },
  },
  {
    color: "yellow",
    icon: BanknotesIcon,
    title: "Income",
    value: "$53k",
    footer: {
      color: "text-green-500",
      value: "+18%",
      label: "than last week",
    },
  },
  {
    color: "red",
    icon: ChartBarIcon,
    title: "Expenses",
    value: "KSH 103,430",
    footer: {
      color: "text-green-500",
      value: "+5%",
      label: "than yesterday",
    },
  },
  {
    color: "yellow",
    icon: ChartBarIcon,
    title: "Profit Margins",
    value: "KSH 39,430",
    footer: {
      color: "text-green-500",
      value: "+5%",
      label: "than yesterday",
    },
  },
  {
    color: "red",
    icon: BanknotesIcon,
    title: "Sales",
    value: "$37k",
    footer: {
      color: "text-green-500",
      value: "+23%",
      label: "than last week",
    },
  },
  {
    color: "green",
    icon: UserPlusIcon,
    title: "Employees",
    value: "3,462",
    footer: {
      color: "text-red-500",
      value: "-2%",
      label: "than yesterday",
    },
  },
  {
    color: "blue",
    icon: ChartBarIcon,
    title: "Available Stock Value",
    value: "KSH 1.26M",
    footer: {
      color: "text-green-500",
      value: "+5%",
      label: "than yesterday",
    },
  },
  {
    color: "red",
    icon: CalendarIcon,
    title: "Vet Bookings",
    value: "1200",
    footer: {
      color: "text-green-500",
      value: "+5%",
      label: "than yesterday",
    },
  },
  {
    color: "green",
    icon: GiftIcon,
    title: "Products",
    value: "150",
    footer: {
      color: "text-green-500",
      value: "+15%",
      label: "than last week",
    },
  },
  {
    color: "blue",
    icon: TruckIcon,
    title: "Trips Completed",
    value: "750",
    footer: {
      color: "text-red-500",
      value: "-2%",
      label: "than last month",
    },
  },
  {
    color: "yellow",
    icon: UserGroupIcon,
    title: "Livestock Registered",
    value: "5400",
    footer: {
      color: "text-green-500",
      value: "+5%",
      label: "than last month",
    },
  },
];

export default statisticsCardsData;
