import React from "react";
import {
    Typography,
    Card,
    CardHeader,
    CardBody,
    IconButton,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Avatar,
    Tooltip,
    Progress, Input, Button,
} from "@material-tailwind/react";
import {
    EllipsisVerticalIcon,
    ArrowUpIcon,
    ClockIcon,
} from "@heroicons/react/24/outline";
import { StatisticsCard } from "@/widgets/cards";
import { StatisticsChart } from "@/widgets/charts";
import {
    statisticsCardsData,
    lineChartsData,
    barChartsData,
    projectsTableData,
    ordersOverviewData,
} from "@/data";
import { TableWithSearch } from "@/Components/TableWithSearch.jsx";
import {CheckCircleIcon} from "@heroicons/react/24/solid";
import {MagnifyingGlassIcon} from "@heroicons/react/24/outline/index.js";
import {ArrowDownTrayIcon} from "@heroicons/react/24/solid/index.js"; // Import TableWithSearch

export function FarmerCrmDashboard() {
    return (
        <div className="mt-12">
            <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
                {statisticsCardsData.map(({icon, title, footer, ...rest}) => (
                    <StatisticsCard
                        key={title}
                        {...rest}
                        title={title}
                        icon={React.createElement(icon, {
                            className: "w-6 h-6 text-white",
                        })}
                        footer={
                            <Typography className="font-normal text-blue-gray-600">
                                <strong className={footer.color}>{footer.value}</strong>
                                &nbsp;{footer.label}
                            </Typography>
                        }
                    />
                ))}
            </div>


                {/* Bar Charts 1 */}
                <div className="mb-6 grid grid-cols-1 gap-y-12 gap-x-6 md:grid-cols-1 xl:grid-cols-1">
                    {barChartsData.map((props) => (
                        <StatisticsChart
                            key={props.title}
                            {...props}
                            footer={
                                <Typography
                                    variant="small"
                                    className="flex items-center font-normal text-blue-gray-600"
                                >
                                    <ClockIcon strokeWidth={2} className="h-4 w-4 text-blue-gray-400"/>
                                    &nbsp;{props.footer}
                                </Typography>
                            }
                        />
                    ))}
                </div>



                {/* Tables */}
                <div className="mb-8 mt-20 grid grid-cols-1 gap-6 md:grid-cols-2">

                    {/* Table 1 */}
                    <Card className="h-full w-full">
                        <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
                            <Typography variant="h6" color="white">
                                Farmers Per Route
                            </Typography>
                        </CardHeader>
                        <CardHeader floated={false} shadow={false} className="rounded-none">
                            <div className="mb-4 flex flex-col gap-8 lg:flex-row lg:justify-between lg:items-center">
                                {/* Typography Section */}
                                <Typography color="gray" className="mt-1 font-normal">
                                    These are details about number of farmers per route
                                </Typography>
                                {/* Search and Download Section */}
                                <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:gap-2 sm:justify-between sm:mb-4">
                                    <div className="w-full sm:w-auto lg:w-72">
                                        <Input
                                            label="Search"
                                            icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                                        />
                                    </div>
                                    <Button className="flex items-center gap-3 bg-customGreen-dark" size="sm">
                                        <ArrowDownTrayIcon strokeWidth={2} className="h-4 w-4" /> Download
                                    </Button>
                                </div>
                            </div>
                        </CardHeader>
                        <TableWithSearch />
                    </Card>



                    {/* Table 2 */}
                    <Card className="h-full w-full">
                        <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
                            <Typography variant="h6" color="white">
                                Collections Per Route
                            </Typography>
                        </CardHeader>
                        <CardHeader floated={false} shadow={false} className="rounded-none">
                            <div className="mb-4 flex flex-col gap-8 lg:flex-row lg:justify-between lg:items-center">
                                {/* Typography Section */}
                                <Typography color="gray" className="mt-1 font-normal">
                                    These are details about collections per route
                                </Typography>
                                {/* Search and Download Section */}
                                <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:gap-2 sm:justify-between sm:mb-4">
                                    <div className="w-full sm:w-auto lg:w-72">
                                        <Input
                                            label="Search"
                                            icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                                        />
                                    </div>
                                    <Button className="flex items-center gap-3 bg-customGreen-dark" size="sm">
                                        <ArrowDownTrayIcon strokeWidth={2} className="h-4 w-4" /> Download
                                    </Button>
                                </div>
                            </div>
                        </CardHeader>
                        <TableWithSearch />
                    </Card>
                </div>

                {/* Other Sections */}
                <div className="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-3">
                    <Card className="overflow-hidden xl:col-span-2 border border-blue-gray-100 shadow-sm">
                        <CardHeader
                            floated={false}
                            shadow={false}
                            color="transparent"
                            className="m-0 flex items-center justify-between p-6"
                        >
                            <div>
                                <Typography variant="h6" color="blue-gray" className="mb-1">
                                    Projects
                                </Typography>
                                <Typography
                                    variant="small"
                                    className="flex items-center gap-1 font-normal text-blue-gray-600"
                                >
                                    <CheckCircleIcon strokeWidth={3} className="h-4 w-4 text-blue-gray-200"/>
                                    <strong>30 done</strong> this month
                                </Typography>
                            </div>
                            <Menu placement="left-start">
                                <MenuHandler>
                                    <IconButton size="sm" variant="text" color="blue-gray">
                                        <EllipsisVerticalIcon
                                            strokeWidth={3}
                                            fill="currenColor"
                                            className="h-6 w-6"
                                        />
                                    </IconButton>
                                </MenuHandler>
                                <MenuList>
                                    <MenuItem>Action</MenuItem>
                                    <MenuItem>Another Action</MenuItem>
                                    <MenuItem>Something else here</MenuItem>
                                </MenuList>
                            </Menu>
                        </CardHeader>
                        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
                            <table className="w-full min-w-[640px] table-auto">
                                <thead>
                                <tr>
                                    {["companies", "members", "budget", "completion"].map((el) => (
                                        <th
                                            key={el}
                                            className="border-b border-blue-gray-50 py-3 px-6 text-left"
                                        >
                                            <Typography
                                                variant="small"
                                                className="text-[11px] font-medium uppercase text-blue-gray-400"
                                            >
                                                {el}
                                            </Typography>
                                        </th>
                                    ))}
                                </tr>
                                </thead>
                                <tbody>
                                {projectsTableData.map(
                                    ({img, name, members, budget, completion}, key) => {
                                        const className = `py-3 px-5 ${
                                            key === projectsTableData.length - 1
                                                ? ""
                                                : "border-b border-blue-gray-50"
                                        }`;

                                        return (
                                            <tr key={name}>
                                                <td className={className}>
                                                    <div className="flex items-center gap-4">
                                                        <Avatar src={img} alt={name} size="sm"/>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-bold"
                                                        >
                                                            {name}
                                                        </Typography>
                                                    </div>
                                                </td>
                                                <td className={className}>
                                                    {members.map(({img, name}, key) => (
                                                        <Tooltip key={name} content={name}>
                                                            <Avatar
                                                                src={img}
                                                                alt={name}
                                                                size="xs"
                                                                variant="circular"
                                                                className={`cursor-pointer border-2 border-white ${
                                                                    key === 0 ? "" : "-ml-2.5"
                                                                }`}
                                                            />
                                                        </Tooltip>
                                                    ))}
                                                </td>
                                                <td className={className}>
                                                    <Typography
                                                        variant="small"
                                                        className="text-xs font-medium text-blue-gray-600"
                                                    >
                                                        {budget}
                                                    </Typography>
                                                </td>
                                                <td className={className}>
                                                    <div className="w-10/12">
                                                        <Typography
                                                            variant="small"
                                                            className="mb-1 block text-xs font-medium text-blue-gray-600"
                                                        >
                                                            {completion}%
                                                        </Typography>
                                                        <Progress
                                                            value={completion}
                                                            variant="gradient"
                                                            color={completion === 100 ? "green" : "blue"}
                                                            className="h-1"
                                                        />
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    }
                                )}
                                </tbody>
                            </table>
                        </CardBody>
                    </Card>
                    <Card className="border border-blue-gray-100 shadow-sm">
                        <CardHeader
                            floated={false}
                            shadow={false}
                            color="transparent"
                            className="m-0 p-6"
                        >
                            <Typography variant="h6" color="blue-gray" className="mb-2">
                                Orders Overview
                            </Typography>
                            <Typography
                                variant="small"
                                className="flex items-center gap-1 font-normal text-blue-gray-600"
                            >
                                <ArrowUpIcon
                                    strokeWidth={3}
                                    className="h-3.5 w-3.5 text-green-500"
                                />
                                <strong>24%</strong> this month
                            </Typography>
                        </CardHeader>
                        <CardBody className="pt-0">
                            {ordersOverviewData.map(
                                ({icon, color, title, description}, key) => (
                                    <div key={title} className="flex items-start gap-4 py-3">
                                        <div
                                            className={`relative p-1 after:absolute after:-bottom-6 after:left-2/4 after:w-0.5 after:-translate-x-2/4 after:bg-blue-gray-50 after:content-[''] ${
                                                key === ordersOverviewData.length - 1
                                                    ? "after:h-0"
                                                    : "after:h-4/6"
                                            }`}
                                        >
                                            {React.createElement(icon, {
                                                className: `!w-5 !h-5 ${color}`,
                                            })}
                                        </div>
                                        <div>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="block font-medium"
                                            >
                                                {title}
                                            </Typography>
                                            <Typography
                                                as="span"
                                                variant="small"
                                                className="text-xs font-medium text-blue-gray-500"
                                            >
                                                {description}
                                            </Typography>
                                        </div>
                                    </div>
                                )
                            )}
                        </CardBody>
                    </Card>
                </div>
            </div>
            );
            }

            export default FarmerCrmDashboard;
