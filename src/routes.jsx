import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  InformationCircleIcon,
  ServerStackIcon,
  RectangleStackIcon, MapIcon, UsersIcon,
} from "@heroicons/react/24/solid";
import { Home, Profile, Tables, Notifications } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";
import { FarmerCrmDashboard,FarmerCrmRoutes, FarmerCrmFarmers } from '@/pages/farmer-crm';
import {
  ProductManagementCategories,
  ProductManagementDashboard,
  ProductManagementUnits
} from "@/pages/product-management/index.js";


const icon = {
  className: "w-5 h-5 text-inherit",
};

function FProductManagementUnits() {
  return null;
}

function ProductManagementProducts() {
  return null;
}

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
        icon: <InformationCircleIcon {...icon} />,
        name: "notifications",
        path: "/notifications",
        element: <Notifications />,
      },
    ],
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <ServerStackIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        icon: <RectangleStackIcon {...icon} />,
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
        icon: <UserCircleIcon {...icon} />,
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
        element: <FarmerCrmFarmers  />,
      },
    ],
  },
      {
    title: "Product Management",
    layout: "product-management",
    pages: [
      {
        icon: <UserCircleIcon {...icon} />,
        name: "dashboard",
        path: "/dashboard",
        element: <ProductManagementDashboard />,
      },
      {
        icon: <MapIcon {...icon} />,
        name: "units",
        path: "/units",
        element: <ProductManagementUnits />,
      },
      {
        icon: <UsersIcon {...icon} />,
        name: "categories",
        path: "/categories",
        element: <ProductManagementCategories  />,
      },
      {
        icon: <UsersIcon {...icon} />,
        name: "products",
        path: "/products",
        element: <ProductManagementProducts  />,
      },
      {
        icon: <UsersIcon {...icon} />,
        name: "suppliers",
        path: "/suppliers",
        element: <ProductManagementSuppliers  />,
      },
    ],
  },
];

export default routes;
