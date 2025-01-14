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
  
  const initialWeighBridges = [
    { number: 1, code: "WB001", weightLimit: 10000, location: "Kilifi County", status: "Active", statusComment: "Mlolongo", registrationDate: "2023-08-22" },
    { number: 2, code: "032", weightLimit: 10000, location: "Nakuru", status: "Active", statusComment: "Gilgil", registrationDate: "2023-08-22" },
    { number: 3, code: "WB003", weightLimit: 10000, location: "Kisumu", status: "Active", statusComment: "Mosop", registrationDate: "2023-08-22" },
    { number: 4, code: "047", weightLimit: 10000, location: "Nairobi", status: "Active", statusComment: "active", registrationDate: "2023-08-22" },
    { number: 5, code: "001", weightLimit: 4500, location: "Nyandarua County", status: "Active", statusComment: "twice a week", registrationDate: "2023-08-25" },
    { number: 6, code: "001", weightLimit: 10000, location: "Mombasa County", status: "Active", statusComment: "active", registrationDate: "2023-08-28" },
    { number: 7, code: "002", weightLimit: 100000, location: "Kwale", status: "Active", statusComment: "active", registrationDate: "2023-08-28" },
    { number: 8, code: "003", weightLimit: 10000, location: "Kilifi County", status: "Active", statusComment: "active", registrationDate: "2023-08-28" },
    { number: 9, code: "004", weightLimit: 10000, location: "Tana River County", status: "Active", statusComment: "active", registrationDate: "2023-08-28" },
    { number: 10, code: "005", weightLimit: 10000, location: "Lamu", status: "Active", statusComment: "active", registrationDate: "2023-08-28" },
  ];
  
  export function LogisticsWeighbridgeManagement() {
    const [weighBridges, setWeighBridges] = useState(initialWeighBridges);
    const [showForm, setShowForm] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editIndex, setEditIndex] = useState(null);
    const [formData, setFormData] = useState({
      code: "",
      weightLimit: "",
      location: "",
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
        const updatedWeighBridges = [...weighBridges];
        updatedWeighBridges[editIndex] = { ...updatedWeighBridges[editIndex], ...formData };
        setWeighBridges(updatedWeighBridges);
        setIsEditing(false);
        setEditIndex(null);
      } else {
        const newWeighBridge = {
          number: weighBridges.length + 1,
          ...formData,
          registrationDate: new Date().toISOString().split("T")[0],
        };
        setWeighBridges([...weighBridges, newWeighBridge]);
      }
  
      setFormData({
        code: "",
        weightLimit: "",
        location: "",
        status: "",
        statusComment: "",
      });
      setShowForm(false);
    };
  
    const handleEdit = (index) => {
      const weighBridgeToEdit = weighBridges[index];
      setFormData(weighBridgeToEdit);
      setIsEditing(true);
      setEditIndex(index);
      setShowForm(true);
    };
  
    const filteredWeighBridges = weighBridges.filter(
      (bridge) =>
        bridge.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        bridge.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        bridge.status.toLowerCase().includes(searchQuery.toLowerCase())
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
                  code: "",
                  weightLimit: "",
                  location: "",
                  status: "",
                  statusComment: "",
                });
              }
            }}
          >
            {showForm ? "Close Form" : "+ Add Weigh Bridge"}
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
  
        {/* Add/Edit Weigh Bridge Form */}
        {showForm && (
          <Card className="p-4">
            <Typography variant="h6" className="mb-4">
              {isEditing ? "Edit Weigh Bridge" : "Add Weigh Bridge"}
            </Typography>
            <form onSubmit={handleFormSubmit} className="grid grid-cols-3 gap-4">
              <Input
                type="text"
                label="Code"
                name="code"
                value={formData.code}
                onChange={handleInputChange}
                required
              />
              <Input
                type="number"
                label="Weight Limit (Kgs)"
                name="weightLimit"
                value={formData.weightLimit}
                onChange={handleInputChange}
                required
              />
              <Input
                type="text"
                label="Location"
                name="location"
                value={formData.location}
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
                <Option value="Inactive">Inactive</Option>
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
  
        {/* Weigh Bridges Table */}
        <Card>
          <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
            <Typography variant="h6" color="white">
              Weigh Bridges
            </Typography>
          </CardHeader>
          <CardBody className="overflow-x-auto px-0 pt-0 pb-2">
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  {["#", "Code", "Weight Limit (KGS)", "Location", "Status", "Status Comment", "Registration Date", "Actions"].map((header) => (
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
                {filteredWeighBridges.map(({ number, code, weightLimit, location, status, statusComment, registrationDate }, index) => (
                  <tr key={number}>
                    <td className="border-b border-blue-gray-50 py-3 px-5">{number}</td>
                    <td className="border-b border-blue-gray-50 py-3 px-5">{code}</td>
                    <td className="border-b border-blue-gray-50 py-3 px-5">{weightLimit}</td>
                    <td className="border-b border-blue-gray-50 py-3 px-5">{location}</td>
                    <td className="border-b border-blue-gray-50 py-3 px-5">{status}</td>
                    <td className="border-b border-blue-gray-50 py-3 px-5">{statusComment}</td>
                    <td className="border-b border-blue-gray-50 py-3 px-5">{registrationDate}</td>
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
                ))}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </div>
    );
  }
  
  export default LogisticsWeighbridgeManagement;
  