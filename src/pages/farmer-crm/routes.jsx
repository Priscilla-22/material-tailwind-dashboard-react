import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
    Chip,
    Tooltip,
    Progress,
    Button,
} from "@material-tailwind/react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { projectsTableData } from "@/data";

export function FarmerCrmRoutes() {
    return (
        <div className="mt-12 mb-8 flex flex-col gap-12">
            <Card>
                <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
                    <Typography variant="h6" color="white">
                        Registered Routes
                    </Typography>
                </CardHeader>
                <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
                    <table className="w-full min-w-[640px] table-auto">
                        <thead>
                        <tr>
                            {["Names", "members", "farmers", "Action"].map(
                                (el) => (
                                    <th
                                        key={el}
                                        className="border-b border-blue-gray-50 py-3 px-5 text-left"
                                    >
                                        <Typography
                                            variant="small"
                                            className="text-[11px] font-bold uppercase text-blue-gray-400"
                                        >
                                            {el}
                                        </Typography>
                                    </th>
                                )
                            )}
                        </tr>
                        </thead>
                        <tbody>
                        {projectsTableData.map(
                            ({ img, name, members, budget, completion }, key) => {
                                const className = `py-3 px-5 ${
                                    key === projectsTableData.length - 1
                                        ? ""
                                        : "border-b border-blue-gray-50"
                                }`;

                                return (
                                    <tr key={name}>
                                        <td className={className}>
                                            <div className="flex items-center gap-4">
                                                {/*<Avatar src={img} alt={name} size="sm" />*/}
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
                                            {members.map(({ img, name }, key) => (
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
                                            <div className="w-10/12">
                                                <Button variant="text" className="flex items-center gap-2 bg-green-100" color="green">
                                                    Farmers {" "}
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={2}
                                                        stroke="currentColor"
                                                        className="h-5 w-5"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                                        />
                                                    </svg>
                                                </Button>
                                            </div>
                                        </td>
                                        <td className={className}>
                                            <Typography
                                                as="a"
                                                href="#"
                                                className="text-xs font-semibold text-blue-gray-600"
                                            >
                                                <EllipsisVerticalIcon
                                                    strokeWidth={2}
                                                    className="h-5 w-5 text-inherit"
                                                />
                                            </Typography>
                                        </td>
                                    </tr>
                                );
                            }
                        )}
                        </tbody>
                    </table>
                </CardBody>
            </Card>
        </div>
    );
}

export default FarmerCrmRoutes;
