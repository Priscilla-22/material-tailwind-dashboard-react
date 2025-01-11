import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
    Input,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from "@material-tailwind/react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const initialUnitsData = [
    { number: 1, name: "Kilograms (kg)" },
    { number: 2, name: "Liters (L)" },
    { number: 3, name: "Meters (m)" },
    { number: 4, name: "Centimeters (cm)" },
    { number: 5, name: "Grams (g)" },
    { number: 6, name: "Milliliters (mL)" },
    { number: 7, name: "Square Meters (m²)" },
    { number: 8, name: "Cubic Meters (m³)" },
    { number: 9, name: "Pieces (pcs)" },
    { number: 10, name: "Dozens (dz)" },
];


export function ProductManagementUnits() {
    const [showForm, setShowForm] = useState(false);
    const [unitName, setUnitName] = useState("");
    const [units, setUnits] = useState(initialUnitsData);
    const [editingUnit, setEditingUnit] = useState(null);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (unitName.trim()) {
            if (editingUnit) {

                setUnits(units.map((unit) =>
                    unit.number === editingUnit.number
                        ? { ...unit, name: unitName }
                        : unit
                ));
                setEditingUnit(null);
            } else {
                const newUnit = { number: units.length + 1, name: unitName };
                setUnits([...units, newUnit]);
            }
            setUnitName("");
            setShowForm(false);
        }
    };

    const handleCancel = () => {
        setShowForm(false);
        setUnitName("");
        setEditingUnit(null);
    }
    const handleEdit = (unit) => {
        setEditingUnit(unit);
        setUnitName(unit.name);
        setShowForm(true);
    };

    const handleDelete = (number) => {
        setUnits(units.filter((unit) => unit.number !== number));
    };

    return (
        <div className="mt-12 mb-8 flex flex-col gap-12">
            {/* Add/Edit Unit Form */}
            {showForm && (
                <Card className="p-4">
                    <Typography variant="h6" className="mb-4">
                        {editingUnit ? "Edit Unit" : "Add New Unit"}
                    </Typography>
                    <form onSubmit={handleFormSubmit} className="flex items-center gap-4">
                        <Input
                            type="text"
                            label="Unit Name"
                            value={unitName}
                            onChange={(e) => setUnitName(e.target.value)}
                            required
                            className="w-1/4"
                        />
                        <Button type="submit" className="bg-customGreen-dark">
                            {editingUnit ? "Update" : "Save"}
                        </Button>
                        <Button type="button" variant="outlined" onClick={handleCancel}>
                            Cancel
                        </Button>
                    </form>
                </Card>
            )}

            {/* Add New Unit Button */}
            {!showForm && (
                <Button
                    onClick={() => setShowForm(true)}
                    color="blue"
                    className="self-start py-2 px-4 bg-customGreen-dark text-white rounded-lg hover:bg-green-700 transition-all duration-300"
                >
                    Add New Unit
                </Button>
            )}

            {/* Units Table */}
            <Card>
                <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
                    <Typography variant="h6" color="white">
                        Product Management Units
                    </Typography>
                </CardHeader>
                <CardBody className="overflow-x-auto px-0 pt-0 pb-2">
                    <table className="w-full min-w-[640px] table-auto">
                        <thead>
                        <tr>
                            {["Number", "Name", "Action"].map((el) => (
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
                        {units.map(({ number, name }, index) => {
                            const className = `py-3 px-5 ${
                                index === units.length - 1 ? "" : "border-b border-blue-gray-50"
                            }`;

                            return (
                                <tr key={number}>
                                    <td className={className}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {number}
                                        </Typography>
                                    </td>
                                    <td className={className}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-bold"
                                        >
                                            {name}
                                        </Typography>
                                    </td>
                                    <td className={className}>
                                        <Menu placement="left-start">
                                            <MenuHandler>
                                                <Button
                                                    variant="text"
                                                    className="text-xs font-semibold text-blue-gray-600"
                                                >
                                                    <EllipsisVerticalIcon
                                                        strokeWidth={2}
                                                        className="h-5 w-5 text-inherit"
                                                    />
                                                </Button>
                                            </MenuHandler>
                                            <MenuList>
                                                <MenuItem onClick={() => handleEdit({ number, name })}>
                                                    Edit
                                                </MenuItem>
                                                <MenuItem
                                                    onClick={() => handleDelete(number)}
                                                    className="text-red-500"
                                                >
                                                    Delete
                                                </MenuItem>
                                            </MenuList>
                                        </Menu>
                                    </td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                </CardBody>
            </Card>
        </div>
    );
}

export default ProductManagementUnits;
