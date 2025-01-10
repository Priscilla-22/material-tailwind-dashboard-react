import {
  BellIcon,
  PlusCircleIcon,
  ShoppingCartIcon,
  CreditCardIcon,
  LockOpenIcon,
  BanknotesIcon,
} from "@heroicons/react/24/solid";

export const ordersOverviewData = [
  {
    title: "Education",
    startTime: "13 January 08:35",
    endTime: "13 January 12:35",
    user: "Robin Mark",
    color: {
      start: "bg-green-500",
      end: "bg-red-500",
    },
    icon: BellIcon,
  },
  {
    title: "Vaccination",
    startTime: "15 December 00:35",
    endTime: "15 December 01:35",
    user: "Nelson Masibo",
    color: {
      start: "bg-green-500",
      end: "bg-red-500",
    },
    icon: PlusCircleIcon,
  },
  {
    title: "Nutrition Training",
    startTime: "18 December 10:00",
    endTime: "18 December 12:00",
    user: "Emily Carter",
    color: {
      start: "bg-green-500",
      end: "bg-red-500",
    },
    icon: ShoppingCartIcon,
  },
  {
    title: "Farm Inspection",
    startTime: "22 December 14:00",
    endTime: "22 December 16:30",
    user: "John Doe",
    color: {
      start: "bg-green-500",
      end: "bg-red-500",
    },
    icon: CreditCardIcon,
  },
  {
    title: "Animal Health Workshop",
    startTime: "27 December 09:00",
    endTime: "27 December 13:00",
    user: "Samantha Brown",
    color: {
      start: "bg-green-500",
      end: "bg-red-500",
    },
    icon: LockOpenIcon,
  },
  {
    title: "Emergency Response Drill",
    startTime: "05 January 15:00",
    endTime: "05 January 17:00",
    user: "George White",
    color: {
      start: "bg-green-500",
      end: "bg-red-500",
    },
    icon: BanknotesIcon,
  },
];

export default ordersOverviewData;
