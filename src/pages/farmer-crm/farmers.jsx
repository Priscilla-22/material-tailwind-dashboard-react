import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
    Chip,
    Button,
} from "@material-tailwind/react";
import { authorsTableData } from "@/data";
import BaseForm from "@/widgets/layout/base-form.jsx";
import {useState} from "react";


export function FarmerCrmFarmers() {
    const [activeForm, setActiveForm] = useState(null); // Track which form is active

    // Define the fields for each form
    const addFarmerFields = [
        { label: "First Name", value: "", onChange: () => {}, required: true },
        { label: "Last Name", value: "", onChange: () => {}, required: true },
        { label: "Username", value: "", onChange: () => {}, required: true },
        { label: "Email", value: "", onChange: () => {}, required: true },
        { label: "Gender", value: "", onChange: () => {}, required: true },
        { label: "Date of Birth", value: "", onChange: () => {}, required: true },
        { label: "Country", value: "", onChange: () => {}, required: true },
        { label: "County/State/Province", value: "", onChange: () => {}, required: true },
        { label: "Location", value: "", onChange: () => {}, required: true },
        { label: "ID No./Passport", value: "", onChange: () => {}, required: true },
        { label: "Phone Number", value: "", onChange: () => {}, required: true },
        { label: "Route", value: "", onChange: () => {}, required: true },
        { label: "Member No.", value: "", onChange: () => {}, required: true },
        { label: "Products", value: "", onChange: () => {}, required: true },
        { label: "Farm Size", value: "", onChange: () => {}, required: true },
        { label: "Profile Picture", value: "", onChange: () => {}, required: false },
    ];

    const bulkImportFields = [
        { label: "Upload File", value: "", onChange: () => {}, required: true },
    ];

    const globalFilterFields = [
        { label: "Name", value: "", onChange: () => {}, required: false },
        { label: "Member No.", value: "", onChange: () => {}, required: false },
        { label: "Date of Birth (Range)", value: "", onChange: () => {}, required: false },
        { label: "Country", value: "", onChange: () => {}, required: false },
        { label: "Location", value: "", onChange: () => {}, required: false },
        { label: "Route", value: "", onChange: () => {}, required: false },
        { label: "Bank", value: "", onChange: () => {}, required: false },
        { label: "Customer Type", value: "", onChange: () => {}, required: false },
        { label: "Gender", value: "", onChange: () => {}, required: false },
    ];

    const handleToggleForm = (form) => {
        setActiveForm(form === activeForm ? null : form); // Close form if it's already open
    };

    return (
        <div className="mt-12 mb-8 flex flex-col gap-12">
            {/* Buttons to toggle forms */}
            <div className="flex gap-4">
                <Button onClick={() => handleToggleForm("addFarmer")}>Add Farmer</Button>
                <Button onClick={() => handleToggleForm("bulkImport")}>Bulk Import</Button>
                <Button onClick={() => handleToggleForm("globalFilter")}>Global Filter</Button>
            </div>

            {/* Add Farmer Form */}
            {activeForm === "addFarmer" && (
                <div className="mt-6">
                    <BaseForm fields={addFarmerFields} onSubmit={() => {}} onCancel={() => handleToggleForm("addFarmer")} />
                </div>
            )}

            {/* Bulk Import Form */}
            {activeForm === "bulkImport" && (
                <div className="mt-6">
                    <BaseForm fields={bulkImportFields} onSubmit={() => {}} onCancel={() => handleToggleForm("bulkImport")} />
                    <Button variant="outlined" className="mt-4">
                        Download Template
                    </Button>
                </div>
            )}

            {/* Global Filter Form */}
            {activeForm === "globalFilter" && (
                <div className="mt-6">
                    <BaseForm fields={globalFilterFields} onSubmit={() => {}} onCancel={() => handleToggleForm("globalFilter")} />
                    <div className="flex gap-4 mt-4">
                        {/* Filter Button */}
                        {/*<Button color="blue" className="w-full">*/}
                        {/*    Filter*/}
                        {/*</Button>*/}

                        {/*/!* Reset Button *!/*/}
                        {/*<Button color="red" className="w-full">*/}
                        {/*    Reset*/}
                        {/*</Button>*/}
                    </div>
                </div>
            )}

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
