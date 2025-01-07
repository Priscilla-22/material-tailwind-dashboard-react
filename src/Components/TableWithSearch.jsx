import React, { useState } from "react";
import {
    Card,
    Input,
    Checkbox,
    CardHeader,
    IconButton,
    Typography, Button, CardFooter,
} from "@material-tailwind/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { DocumentIcon, ArrowDownTrayIcon } from "@heroicons/react/24/solid";

const TABLE_HEAD = ["Route", "Farmers"];

const TABLE_ROWS = [
    {
        route: "Nairobi",
        farmers: 90,
    },
    {
        route: "Rift Valley",
        farmers: 126,
    },
    {
        route: "Western",
        farmers: 103,
    },
    {
        route: "Mount Kenya",
        farmers: 415,
    },
    {
        route: "Nairobi",
        farmers: 90,
    },
    {
        route: "Rift Valley",
        farmers: 126,
    },
    {
        route: "Western",
        farmers: 103,
    },
    {
        route: "Mount Kenya",
        farmers: 415,
    },
];


export function TableWithSearch() {
    const [search, setSearch] = useState("");

    // Filter rows based on search
    const filteredRows = TABLE_ROWS.filter(
        (row) =>
            row.route.toLowerCase().includes(search.toLowerCase()) ||
            row.farmers.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <Card className="h-full w-full overflow-scroll">
    <table className="w-full min-w-max table-auto text-left">
        <thead>
        <tr>
            {TABLE_HEAD.map((head) => (
                <th key={head} className="border-b border-gray-300 p-4">
                    <Typography
                        color="blue-gray"
                        variant="small"
                        className="!font-bold"
                    >
                                {head}
                            </Typography>
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {filteredRows.map(
                    ({ route, farmers }, index) => {
                        const isLast = index === filteredRows.length - 1;
                        const classes = isLast ? "p-4" : "p-4 border-b border-gray-300";

                        return (
                            <tr key={route}>
                                <td className={classes}>
                                    <div className="flex items-center gap-1">
                                        <Checkbox />
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-bold"
                                        >
                                            {route}
                                        </Typography>
                                    </div>
                                </td>
                                <td className={classes}>
                                    <Typography
                                        variant="small"
                                        className="font-normal text-gray-600"
                                    >
                                        {farmers}
                                    </Typography>
                                </td>

                                <td className={classes}>
                                    <div className="flex items-center gap-2">
                                        <IconButton variant="text" size="sm">
                                            <DocumentIcon className="h-4 w-4 text-gray-900" />
                                        </IconButton>
                                        <IconButton variant="text" size="sm">
                                            <ArrowDownTrayIcon
                                                strokeWidth={3}
                                                className="h-4 w-4 text-gray-900"
                                            />
                                        </IconButton>
                                    </div>
                                </td>
                            </tr>
                        );
                    }
                )}
                </tbody>
            </table>
            <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                    Page 1 of 10
                </Typography>
                <div className="flex gap-2">
                    <Button variant="outlined" size="sm">
                        Previous
                    </Button>
                    <Button variant="outlined" size="sm">
                        Next
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );
}

export default TableWithSearch;
