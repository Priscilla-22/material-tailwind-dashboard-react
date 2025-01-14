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
    Select,
    Option,
  } from "@material-tailwind/react";
  import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
  import { useState } from "react";
  
  const initialVehicleData = [
    { number: 1, registrationNumber: "KBK 354H", vehicleType: "Canter", driver: "Aaron Kamau", vehicleWeight: 1200, status: "Account Closed", statusComment: "DEAD", statusDate: "2023-08-28" },
    { number: 2, registrationNumber: "KDD234R", vehicleType: "SUV", driver: "Magaret Ambundo", vehicleWeight: 1200, status: "Active", statusComment: "Good Condition", statusDate: "2023-08-31" },
    { number: 3, registrationNumber: "KDR 470V", vehicleType: "Pickup", driver: "Hannah Wangechi", vehicleWeight: 1800, status: "Active", statusComment: "In good condition", statusDate: "2025-01-07" },
    { number: 4, registrationNumber: "KCW234G", vehicleType: "7 seater", driver: "John Kibet", vehicleWeight: 12000, status: "Under Service", statusComment: "Active", statusDate: "2024-09-27" },
    { number: 5, registrationNumber: "KCD414K", vehicleType: "Compact tractors", driver: "John Kibet", vehicleWeight: 1800, status: "Active", statusComment: "Good Condition", statusDate: "2024-10-07" },
    { number: 6, registrationNumber: "KBK 456H", vehicleType: "5 seater", driver: "Brian Oino", vehicleWeight: 1000, status: "Active", statusComment: "GOOD", statusDate: "2023-08-31" },
    { number: 7, registrationNumber: "KEK444J", vehicleType: "5 seater", driver: "John Kibet", vehicleWeight: 1000, status: "Active", statusComment: "Very fuel efficient", statusDate: "2023-08-31" },
    { number: 8, registrationNumber: "KDD777V", vehicleType: "Truck", driver: "Aaron Kamau", vehicleWeight: 1000, status: "Active", statusComment: "good condition", statusDate: "2024-09-27" },
    { number: 9, registrationNumber: "KAJ 590X", vehicleType: "Pick Up", driver: "Brian Oino", vehicleWeight: 1300, status: "Under Service", statusComment: "Undergoing Repairs", statusDate: "2025-01-07" },
    { number: 10, registrationNumber: "KDD 923V", vehicleType: "7 seater", driver: "Magaret Ambundo", vehicleWeight: 800, status: "Active", statusComment: "good condition", statusDate: "2023-08-22" },
  ];
  
  export function LogisticsVehicles() {
    const [vehicles, setVehicles] = useState(initialVehicleData);
    const [showForm, setShowForm] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editIndex, setEditIndex] = useState(null);
    const [formData, setFormData] = useState({
      registrationNumber: "",
      vehicleType: "",
      driver: "",
      vehicleWeight: "",
      status: "",
      statusComment: "",
    });
    const [searchQuery, setSearchQuery] = useState("");
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
  
      if (isEditing) {
        const updatedVehicles = [...vehicles];
        updatedVehicles[editIndex] = { ...updatedVehicles[editIndex], ...formData };
        setVehicles(updatedVehicles);
        setIsEditing(false);
        setEditIndex(null);
      } else {
        const newVehicle = {
          number: vehicles.length + 1,
          ...formData,
          statusDate: new Date().toISOString().split("T")[0],
        };
        setVehicles([...vehicles, newVehicle]);
      }
  
      setFormData({
        registrationNumber: "",
        vehicleType: "",
        driver: "",
        vehicleWeight: "",
        status: "",
        statusComment: "",
      });
      setShowForm(false);
    };
  
    const handleEdit = (index) => {
      const vehicleToEdit = vehicles[index];
      setFormData(vehicleToEdit);
      setIsEditing(true);
      setEditIndex(index);
      setShowForm(true);
    };
  
    const filteredVehicles = vehicles.filter(
      (vehicle) =>
        vehicle.registrationNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
        vehicle.vehicleType.toLowerCase().includes(searchQuery.toLowerCase()) ||
        vehicle.driver.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    return (
      <div className="mt-12 mb-8 flex flex-col gap-12">
        {/* Add/Edit Button */}
        <div className="flex justify-between items-center">
          <Button
            color="blue"
            className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
            onClick={() => {
              setShowForm((prev) => !prev);
              if (!showForm) {
                setIsEditing(false);
                setFormData({
                  registrationNumber: "",
                  vehicleType: "",
                  driver: "",
                  vehicleWeight: "",
                  status: "",
                  statusComment: "",
                });
              }
            }}
          >
            {showForm ? "Close Form" : "+ Add Vehicle"}
          </Button>
        </div>
  
        {/* Search Bar */}
        <div className="flex justify-end mt-4">
          <Input
            type="text"
            label="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-1/2"
          />
        </div>
        
        {/* Export Options */}
        <div className="flex gap-4 mt-4">
          <Button color="green" onClick={() => console.log("Export to PDF")}>
            PDF
          </Button>
          <Button color="black" onClick={() => console.log("Export to Excel")}>
            Excel
          </Button>
          <Button color="purple" onClick={() => console.log("Export to CSV")}>
            CSV
          </Button>
        </div>
        
        {/* Add/Edit Vehicle Form */}
        {showForm && (
          <Card className="p-4">
            <Typography variant="h6" className="mb-4">
              {isEditing ? "Edit Vehicle" : "Add Vehicle"}
            </Typography>
            <form onSubmit={handleFormSubmit} className="grid grid-cols-3 gap-4">
              <Input
                type="text"
                label="Registration Number"
                name="registrationNumber"
                value={formData.registrationNumber}
                onChange={handleInputChange}
                required
              />
              <Select
                label="Vehicle Type"
                name="vehicleType"
                value={formData.vehicleType}
                onChange={(value) => setFormData({ ...formData, vehicleType: value })}
                required
              >
                <Option value="Canter">Canter</Option>
                <Option value="SUV">SUV</Option>
                <Option value="Pickup">Pickup</Option>
                <Option value="Truck">Truck</Option>
                <Option value="7 Seater">7 Seater</Option>
              </Select>
              <Select
                label="Driver"
                name="driver"
                value={formData.driver}
                onChange={(value) => setFormData({ ...formData, driver: value })}
                required
              >
                <Option value="Aaron Kamau">Aaron Kamau</Option>
                <Option value="Magaret Ambundo">Magaret Ambundo</Option>
                <Option value="John Kibet">John Kibet</Option>
              </Select>
              <Input
                type="number"
                label="Vehicle Weight (Kgs)"
                name="vehicleWeight"
                value={formData.vehicleWeight}
                onChange={handleInputChange}
                required
              />
              <Select
                label="Status"
                name="status"
                value={formData.status}
                onChange={(value) => setFormData({ ...formData, status: value })}
                required
              >
                <Option value="Active">Active</Option>
                <Option value="Under Service">Under Service</Option>
                <Option value="Account Closed">Account Closed</Option>
              </Select>
              <Input
                type="text"
                label="Status Comment"
                name="statusComment"
                value={formData.statusComment}
                onChange={handleInputChange}
                required
              />
              <Button type="submit" className="col-span-1 bg-blue-500">
                {isEditing ? "Update" : "Add"}
              </Button>
            </form>
          </Card>
        )}
  
        {/* Vehicles Table */}
        <Card>
          <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
            <Typography variant="h6" color="white">
              Vehicles Table
            </Typography>
          </CardHeader>
          <CardBody className="overflow-x-auto px-0 pt-0 pb-2">
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  {[
                    "#",
                    "Registration Number",
                    "Vehicle Type",
                    "Driver",
                    "Vehicle Weight",
                    "Status",
                    "Status Comment",
                    "Status Date",
                    "Actions",
                  ].map((header) => (
                    <th
                      key={header}
                      className="border-b border-blue-gray-50 py-3 px-5 text-left"
                    >
                      <Typography
                        variant="small"
                        className="text-[11px] font-bold uppercase text-blue-gray-400"
                      >
                        {header}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredVehicles.map(
                  (
                    {
                      number,
                      registrationNumber,
                      vehicleType,
                      driver,
                      vehicleWeight,
                      status,
                      statusComment,
                      statusDate,
                    },
                    index
                  ) => (
                    <tr key={number}>
                      <td className="border-b border-blue-gray-50 py-3 px-5">{number}</td>
                      <td className="border-b border-blue-gray-50 py-3 px-5">
                        {registrationNumber}
                      </td>
                      <td className="border-b border-blue-gray-50 py-3 px-5">
                        {vehicleType}
                      </td>
                      <td className="border-b border-blue-gray-50 py-3 px-5">{driver}</td>
                      <td className="border-b border-blue-gray-50 py-3 px-5">
                        {vehicleWeight}
                      </td>
                      <td className="border-b border-blue-gray-50 py-3 px-5">{status}</td>
                      <td className="border-b border-blue-gray-50 py-3 px-5">
                        {statusComment}
                      </td>
                      <td className="border-b border-blue-gray-50 py-3 px-5">{statusDate}</td>
                      <td className="border-b border-blue-gray-50 py-3 px-5">
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
                            <MenuItem onClick={() => handleEdit(index)}>Edit</MenuItem>
                            <MenuItem className="text-red-500">Delete</MenuItem>
                          </MenuList>
                        </Menu>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </div>
    );
  }
  
  export default LogisticsVehicles;
  