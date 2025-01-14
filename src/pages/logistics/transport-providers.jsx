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
  
  const initialTransportProviders = [
    { number: 1, name: "North Rift", phoneNumber: "0720991991", location: "Kapsabet" },
    { number: 2, name: "Easy Coach", phoneNumber: "0722001002", location: "Mbale" },
    { number: 3, name: "Cargo Carriers", phoneNumber: "254711392922", location: "Kiambu" },
    { number: 4, name: "Rick Felix", phoneNumber: "+254713524876", location: "Kimilili" },
    { number: 5, name: "North Rift", phoneNumber: "0701010101", location: "Nakuru" },
    { number: 6, name: "Wambua Kigen", phoneNumber: "829574856", location: "Mandera" },
    { number: 7, name: "Kapu", phoneNumber: "0780808080", location: "Nyandarua" },
    { number: 8, name: "Sendy", phoneNumber: "0789086437", location: "Eldoret" },
    { number: 9, name: "Little", phoneNumber: "0721437890", location: "Kitale" },
    { number: 10, name: "Copia", phoneNumber: "0743987653", location: "Kisumu" },
  ];
  
  export function LogisticsTransportProviders() {
    const [providers, setProviders] = useState(initialTransportProviders);
    const [showForm, setShowForm] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editIndex, setEditIndex] = useState(null);
    const [formData, setFormData] = useState({
      name: "",
      phoneNumber: "",
      location: "",
    });
    const [searchQuery, setSearchQuery] = useState("");
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
  
      if (isEditing) {
        const updatedProviders = [...providers];
        updatedProviders[editIndex] = { ...updatedProviders[editIndex], ...formData };
        setProviders(updatedProviders);
        setIsEditing(false);
        setEditIndex(null);
      } else {
        const newProvider = {
          number: providers.length + 1,
          ...formData,
        };
        setProviders([...providers, newProvider]);
      }
  
      setFormData({
        name: "",
        phoneNumber: "",
        location: "",
      });
      setShowForm(false);
    };
  
    const handleEdit = (index) => {
      const providerToEdit = providers[index];
      setFormData(providerToEdit);
      setIsEditing(true);
      setEditIndex(index);
      setShowForm(true);
    };
  
    const filteredProviders = providers.filter(
      (provider) =>
        provider.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        provider.phoneNumber.includes(searchQuery) ||
        provider.location.toLowerCase().includes(searchQuery.toLowerCase())
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
                  name: "",
                  phoneNumber: "",
                  location: "",
                });
              }
            }}
          >
            {showForm ? "Close Form" : "+ Add Transport Provider"}
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
  
        {/* Add/Edit Transport Provider Form */}
        {showForm && (
          <Card className="p-4">
            <Typography variant="h6" className="mb-4">
              {isEditing ? "Edit Transport Provider" : "Add Transport Provider"}
            </Typography>
            <form onSubmit={handleFormSubmit} className="grid grid-cols-3 gap-4">
              <Input
                type="text"
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <Input
                type="text"
                label="Phone Number"
                name="phoneNumber"
                value={formData.phoneNumber}
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
              <Button type="submit" className="col-span-1 bg-blue-500">
                {isEditing ? "Update" : "Add"}
              </Button>
            </form>
          </Card>
        )}
  
        {/* Transport Providers Table */}
        <Card>
          <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
            <Typography variant="h6" color="white">
              Registered Transport Providers
            </Typography>
          </CardHeader>
          <CardBody className="overflow-x-auto px-0 pt-0 pb-2">
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  {["#", "Name", "Phone Number", "Location", "Actions"].map((header) => (
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
                {filteredProviders.map(({ number, name, phoneNumber, location }, index) => (
                  <tr key={number}>
                    <td className="border-b border-blue-gray-50 py-3 px-5">{number}</td>
                    <td className="border-b border-blue-gray-50 py-3 px-5">{name}</td>
                    <td className="border-b border-blue-gray-50 py-3 px-5">{phoneNumber}</td>
                    <td className="border-b border-blue-gray-50 py-3 px-5">{location}</td>
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
  
  export default LogisticsTransportProviders;
  