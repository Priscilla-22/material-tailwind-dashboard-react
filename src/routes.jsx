import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  BellIcon,
  ArrowRightOnRectangleIcon,
  ArrowLeftOnRectangleIcon,
  ChartBarIcon,
  MapIcon,
  UsersIcon,
  TagIcon,
  CubeIcon,
  TruckIcon,
  ScaleIcon,
  ArrowPathRoundedSquareIcon,
  ChartPieIcon,
  AdjustmentsHorizontalIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";

import { Home, Profile, Tables, Notifications } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";
import { FarmerCrmDashboard, FarmerCrmRoutes, FarmerCrmFarmers } from "@/pages/farmer-crm";
import {
  ProductManagementCategories,
  ProductManagementDashboard,
  ProductManagementUnits,
  ProductManagementProducts,
} from "@/pages/product-management/index.js";
import {
  LogisticsDashboard,
  LogisticsVehicleTypes,
  LogisticsVehicles,
  LogisticsTransportProviders,
  LogisticsWeighbridgeManagement,
  LogisticsTripManagement,
} from "@/pages/logistics";
import {
  BankManagementBank,
  BankManagementBranches,
} from "@/pages/bank-management/index.js";

const icon = {
  className: "w-5 h-5 text-inherit",
};

function ProductManagementSuppliers() {
  return null;
}

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "profile",
        path: "/profile",
        element: <Profile />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "tables",
        path: "/tables",
        element: <Tables />,
      },
      {
        icon: <BellIcon {...icon} />,
        name: "notifications",
        path: "/notifications",
        element: <Notifications />,
      },
    ],
  },
  {
    title: "Auth Pages",
    layout: "auth",
    pages: [
      {
        icon: <ArrowRightOnRectangleIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        icon: <ArrowLeftOnRectangleIcon {...icon} />,
        name: "sign up",
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
  {
    title: "Farmer CRM",
    layout: "farmer-crm",
    pages: [
      {
        icon: <ChartBarIcon {...icon} />,
        name: "dashboard",
        path: "/dashboard",
        element: <FarmerCrmDashboard />,
      },
      {
        icon: <MapIcon {...icon} />,
        name: "routes",
        path: "/routes",
        element: <FarmerCrmRoutes />,
      },
      {
        icon: <UsersIcon {...icon} />,
        name: "farmers",
        path: "/farmers",
        element: <FarmerCrmFarmers />,
      },
    ],
  },
  // {
  //   title: "Product Management",
  //   layout: "product-management",
  //   pages: [
  //     {
  //       icon: <ChartPieIcon {...icon} />,
  //       name: "dashboard",
  //       path: "/dashboard",
  //       element: <ProductManagementDashboard />,
  //     },
  //     {
  //       icon: <AdjustmentsHorizontalIcon {...icon} />,
  //       name: "units",
  //       path: "/units",
  //       element: <ProductManagementUnits />,
  //     },
  //     {
  //       icon: <TagIcon {...icon} />,
  //       name: "categories",
  //       path: "/categories",
  //       element: <ProductManagementCategories />,
  //     },
  //     {
  //       icon: <CubeIcon {...icon} />,
  //       name: "products",
  //       path: "/products",
  //       element: <ProductManagementProducts />,
  //     },
  //     {
  //       icon: <TruckIcon {...icon} />,
  //       name: "suppliers",
  //       path: "/suppliers",
  //       element: <ProductManagementSuppliers />,
  //     },
  //   ],
  // },
  {
    title: "Logistics",
    layout: "logistics",
    pages: [
      {
        icon: <ChartBarIcon {...icon} />,
        name: "dashboard",
        path: "/dashboard",
        element: <LogisticsDashboard />,
      },
      {
        icon: <TruckIcon {...icon} />,
        name: "vehicle types",
        path: "/vehicle-types",
        element: <LogisticsVehicleTypes />,
      },
      {
        icon: <TruckIcon {...icon} />,
        name: "vehicles",
        path: "/vehicles",
        element: <LogisticsVehicles />,
      },
      {
        icon: <UserGroupIcon {...icon} />,
        name: "transport providers",
        path: "/transport-providers",
        element: <LogisticsTransportProviders />,
      },
      {
        icon: <ScaleIcon {...icon} />,
        name: "weighbridge",
        path: "/weighbridge-management",
        element: <LogisticsWeighbridgeManagement />,
      },
      {
        icon: <ArrowPathRoundedSquareIcon {...icon} />,
        name: "trip management",
        path: "/trip-management",
        element: <LogisticsTripManagement />,
      },
    ],
  },
  {
    title: "Bank Management",
    layout: "bank-management",
    pages: [
      {
        icon: <ChartBarIcon {...icon} />,
        name: "banks",
        path: "/banks",
        element: <BankManagementBank />,
      },
      {
        icon: <TruckIcon {...icon} />,
        name: "branches",
        path: "/branches",
        element: <BankManagementBranches />,
      },
    ],
  },
];

export default routes;
