import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
    Chip,
} from "@material-tailwind/react";
import { authorsTableData } from "@/data";

export function FarmerCrmFarmers() {
    return (
        <div className="mt-12 mb-8 flex flex-col gap-12">
            <Card>
                <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
                    <Typography variant="h6" color="white">
                        Farmers Table
                    </Typography>
                </CardHeader>
                <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
                    <table className="w-full min-w-[640px] table-auto">
                        <thead>
                        <tr>
                            {[
                                "Author",
                                // "Function",
                                "Status",
                                "Farm Size",
                                "Route",
                                "Country",
                                "Member No.",
                                "ID No.",
                                "Phone No.",
                                "Customer Type",
                                "Gender",
                                "Joined Date",
                                "Actions",
                            ].map((el) => (
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
                            ))}
                        </tr>
                        </thead>
                        <tbody>
                        {authorsTableData.map(
                            (
                                {
                                    img,
                                    name,
                                    email,
                                    // job,
                                    online,
                                    date,
                                    farm_size,
                                    route,
                                    country_code,
                                    flag,
                                    member_no,
                                    id_no,
                                    phone_no,
                                    customer_type,
                                    gender,
                                },
                                key
                            ) => {
                                const className = `py-3 px-5 ${
                                    key === authorsTableData.length - 1
                                        ? ""
                                        : "border-b border-blue-gray-50"
                                }`;

                                return (
                                    <tr key={name}>
                                        {/* Author Info */}
                                        <td className={className}>
                                            <div className="flex items-center gap-4">
                                                <Avatar src={img} alt={name} size="sm" variant="rounded" />
                                                <div>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-semibold"
                                                    >
                                                        {name}
                                                    </Typography>
                                                    <Typography className="text-xs font-normal text-blue-gray-500">
                                                        {email}
                                                    </Typography>
                                                </div>
                                            </div>
                                        </td>

                                        {/*/!* Job Info *!/*/}
                                        {/*<td className={className}>*/}
                                        {/*    <Typography className="text-xs font-semibold text-blue-gray-600">*/}
                                        {/*        {job[0]}*/}
                                        {/*    </Typography>*/}
                                        {/*    <Typography className="text-xs font-normal text-blue-gray-500">*/}
                                        {/*        {job[1]}*/}
                                        {/*    </Typography>*/}
                                        {/*</td>*/}

                                        {/* Status (Online/Offline) */}
                                        <td className={className}>
                                            <Chip
                                                variant="gradient"
                                                color={online ? "green" : "blue-gray"}
                                                value={online ? "online" : "offline"}
                                                className="py-0.5 px-2 text-[11px] font-medium w-fit"
                                            />
                                        </td>

                                        {/* Farm Size */}
                                        <td className={className}>
                                            <Typography className="text-xs font-normal text-blue-gray-600">
                                                {farm_size} acres
                                            </Typography>
                                        </td>

                                        {/* Route */}
                                        <td className={className}>
                                            <Typography className="text-xs font-normal text-blue-gray-600">
                                                {route}
                                            </Typography>
                                        </td>

                                        {/* Country */}
                                        <td className={className}>
                                            <div className="flex items-center gap-2">
                                                <span>{flag}</span>
                                                <Typography className="text-xs font-normal text-blue-gray-600">
                                                    {country_code}
                                                </Typography>
                                            </div>
                                        </td>

                                        {/* Member No. */}
                                        <td className={className}>
                                            <Typography className="text-xs font-normal text-blue-gray-600">
                                                {member_no}
                                            </Typography>
                                        </td>

                                        {/* ID No. */}
                                        <td className={className}>
                                            <Typography className="text-xs font-normal text-blue-gray-600">
                                                {id_no}
                                            </Typography>
                                        </td>

                                        {/* Phone No. */}
                                        <td className={className}>
                                            <Typography className="text-xs font-normal text-blue-gray-600">
                                                {phone_no}
                                            </Typography>
                                        </td>

                                        {/* Customer Type */}
                                        <td className={className}>
                                            <Typography className="text-xs font-normal text-blue-gray-600">
                                                {customer_type}
                                            </Typography>
                                        </td>

                                        {/* Gender */}
                                        <td className={className}>
                                            <Typography className="text-xs font-normal text-blue-gray-600">
                                                {gender}
                                            </Typography>
                                        </td>

                                        {/* Joined Date */}
                                        <td className={className}>
                                            <Typography className="text-xs font-normal text-blue-gray-600">
                                                {date}
                                            </Typography>
                                        </td>

                                        {/* Actions */}
                                        <td className={className}>
                                            <Typography
                                                as="a"
                                                href="#"
                                                className="text-xs font-semibold text-blue-gray-600"
                                            >
                                                Edit
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

export default FarmerCrmFarmers;
