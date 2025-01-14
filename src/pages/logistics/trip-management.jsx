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
  
  const initialTrips = [
    {
      number: 1,
      transportProvider: "Company Vehicle",
      loadType: "Cereals",
      departureDate: "2023-08-25 12:13 AM",
      departureLocation: "Nandi County",
      departureLoadWeight: "10,000",
      arrivalDate: "2023-08-25 01:32 PM",
      arrivalLocation: "Kapenguria",
      arrivalLoadWeight: "-",
      discrepancy: "-",
      tripCost: "147,000.00",
    },
    {
      number: 2,
      transportProvider: "Company Vehicle",
      loadType: "Milk",
      departureDate: "2023-11-15 07:10 PM",
      departureLocation: "Juja",
      departureLoadWeight: "4,000.00",
      arrivalDate: "2023-11-15 07:10 PM",
      arrivalLocation: "Juja",
      arrivalLoadWeight: "3,000.00",
      discrepancy: "1,000.00",
      tripCost: "7,000.00",
    },
    {
      number: 3,
      transportProvider: "Company Vehicle",
      loadType: "Maize",
      departureDate: "2023-08-24 11:30 PM",
      departureLocation: "Kitale",
      departureLoadWeight: "10,000",
      arrivalDate: "2023-08-25 01:32 PM",
      arrivalLocation: "Nakuru",
      arrivalLoadWeight: "-",
      discrepancy: "-",
      tripCost: "115,500.00",
    },
  ];
  
  export function LogisticsTripManagement() {
    const [trips, setTrips] = useState(initialTrips);
    const [showForm, setShowForm] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editIndex, setEditIndex] = useState(null);
    const [formData, setFormData] = useState({
      transportProvider: "",
      vehicle: "",
      loadType: "",
      departureDate: "",
      departureLocation: "",
      arrivalDate: "",
      arrivalLocation: "",
      departureWeighbridge: "",
      arrivalWeighbridge: "",
      loadUnit: "",
      tripCost: "",
    });
    const [searchQuery, setSearchQuery] = useState("");
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
  
      if (isEditing) {
        const updatedTrips = [...trips];
        updatedTrips[editIndex] = { ...updatedTrips[editIndex], ...formData };
        setTrips(updatedTrips);
        setIsEditing(false);
        setEditIndex(null);
      } else {
        const newTrip = {
          number: trips.length + 1,
          ...formData,
        };
        setTrips([...trips, newTrip]);
      }
  
      setFormData({
        transportProvider: "",
        vehicle: "",
        loadType: "",
        departureDate: "",
        departureLocation: "",
        arrivalDate: "",
        arrivalLocation: "",
        departureWeighbridge: "",
        arrivalWeighbridge: "",
        loadUnit: "",
        tripCost: "",
      });
      setShowForm(false);
    };
  
    const handleEdit = (index) => {
      const tripToEdit = trips[index];
      setFormData(tripToEdit);
      setIsEditing(true);
      setEditIndex(index);
      setShowForm(true);
    };
  
    const filteredTrips = trips.filter(
      (trip) =>
        trip.transportProvider.toLowerCase().includes(searchQuery.toLowerCase()) ||
        trip.loadType.toLowerCase().includes(searchQuery.toLowerCase()) ||
        trip.departureLocation.toLowerCase().includes(searchQuery.toLowerCase())
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
                  transportProvider: "",
                  vehicle: "",
                  loadType: "",
                  departureDate: "",
                  departureLocation: "",
                  arrivalDate: "",
                  arrivalLocation: "",
                  departureWeighbridge: "",
                  arrivalWeighbridge: "",
                  loadUnit: "",
                  tripCost: "",
                });
              }
            }}
          >
            {showForm ? "Close Form" : "+ Book a Trip"}
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
  
        {/* Add/Edit Trip Form */}
        {showForm && (
          <Card className="p-4">
            <Typography variant="h6" className="mb-4">
              {isEditing ? "Edit Trip" : "Book a Trip"}
            </Typography>
            <form onSubmit={handleFormSubmit} className="grid grid-cols-3 gap-4">
              <Select
                label="Transport Provider"
                name="transportProvider"
                value={formData.transportProvider}
                onChange={(value) => setFormData({ ...formData, transportProvider: value })}
                required
              >
                <Option value="Company Vehicle">Company Vehicle</Option>
                <Option value="Faras">Faras</Option>
              </Select>
              <Input
                type="text"
                label="Vehicle"
                name="vehicle"
                value={formData.vehicle}
                onChange={handleInputChange}
                required
              />
              <Input
                type="text"
                label="Load Type"
                name="loadType"
                value={formData.loadType}
                onChange={handleInputChange}
                required
              />
              <Input
                type="datetime-local"
                label="Departure Date/Time"
                name="departureDate"
                value={formData.departureDate}
                onChange={handleInputChange}
                required
              />
              <Input
                type="text"
                label="Departure Location"
                name="departureLocation"
                value={formData.departureLocation}
                onChange={handleInputChange}
                required
              />
              <Input
                type="datetime-local"
                label="Arrival Date/Time"
                name="arrivalDate"
                value={formData.arrivalDate}
                onChange={handleInputChange}
                required
              />
              <Input
                type="text"
                label="Arrival Location"
                name="arrivalLocation"
                value={formData.arrivalLocation}
                onChange={handleInputChange}
                required
              />
              <Input
                type="text"
                label="Trip Cost (Ksh)"
                name="tripCost"
                value={formData.tripCost}
                onChange={handleInputChange}
                required
              />
              <Button type="submit" className="col-span-1 bg-blue-500">
                {isEditing ? "Update" : "Book"}
              </Button>
            </form>
          </Card>
        )}
  
        {/* Trips Table */}
        <Card>
          <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
            <Typography variant="h6" color="white">
              Booked Trips
            </Typography>
          </CardHeader>
          <CardBody className="overflow-x-auto px-0 pt-0 pb-2">
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  {[
                    "#",
                    "Transport Provider",
                    "Load Type",
                    "Departure Date",
                    "Departure Location",
                    "Arrival Date",
                    "Arrival Location",
                    "Trip Cost (Ksh)",
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
                {filteredTrips.map(
                  (
                    {
                      number,
                      transportProvider,
                      loadType,
                      departureDate,
                      departureLocation,
                      arrivalDate,
                      arrivalLocation,
                      tripCost,
                    },
                    index
                  ) => (
                    <tr key={number}>
                      <td className="border-b border-blue-gray-50 py-3 px-5">{number}</td>
                      <td className="border-b border-blue-gray-50 py-3 px-5">{transportProvider}</td>
                      <td className="border-b border-blue-gray-50 py-3 px-5">{loadType}</td>
                      <td className="border-b border-blue-gray-50 py-3 px-5">{departureDate}</td>
                      <td className="border-b border-blue-gray-50 py-3 px-5">{departureLocation}</td>
                      <td className="border-b border-blue-gray-50 py-3 px-5">{arrivalDate}</td>
                      <td className="border-b border-blue-gray-50 py-3 px-5">{arrivalLocation}</td>
                      <td className="border-b border-blue-gray-50 py-3 px-5">{tripCost}</td>
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
  
  export default LogisticsTripManagement;
  