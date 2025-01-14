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
    ordersOverviewData, comparisonBarChartsData,
} from "@/data";
import { TableWithSearch } from "@/Components/TableWithSearch.jsx";
import {CheckCircleIcon} from "@heroicons/react/24/solid";
import {MagnifyingGlassIcon} from "@heroicons/react/24/outline/index.js";
import {ArrowDownTrayIcon} from "@heroicons/react/24/solid/index.js"; // Import TableWithSearch

export function  ProductManagementDashboard() {
    return (
        <div className="mt-12">
            {/* <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
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
            </div> */}

            {/* Comparison Chart Section */}
            <div className="mb-12">
                <Typography variant="h5" className="mb-6 text-blue-gray-700">
                    Comparison Chart
                </Typography>
                <div className="grid gap-6 md:grid-cols-1 xl:grid-cols-1">
                    {comparisonBarChartsData.map((props) => (
                        <StatisticsChart
                            key={props.title}
                            {...props}
                            footer={
                                <Typography
                                    variant="small"
                                    className="flex items-center font-normal text-blue-gray-600"
                                >
                                    <ClockIcon strokeWidth={2} className="h-4 w-4 text-blue-gray-400" />
                                    &nbsp;{props.footer}
                                </Typography>
                            }
                        />
                    ))}
                </div>
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

        </div>
    );
}

export default ProductManagementDashboard;
