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
  
  const initialBankData = [
    { number: 1, name: "African Banking Corp. Ltd", contact: "0700040002", swiftCode: "ABC", branches: 1 },
    { number: 2, name: "ABSA", contact: "0710130000", swiftCode: "ABSAZAJJ", branches: 1 },
    { number: 3, name: "Family Bank", contact: "0712546716", swiftCode: "ABCDF", branches: 1 },
    { number: 4, name: "DTB", contact: "0744749282", swiftCode: "DTB", branches: 2 },
    { number: 5, name: "NCBA", contact: "0790786965", swiftCode: "NCBA1", branches: 2 },
  ];
  
  export function BankManagementBank() {
    const [banks, setBanks] = useState(initialBankData);
    const [showForm, setShowForm] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editIndex, setEditIndex] = useState(null);
    const [formData, setFormData] = useState({
      name: "",
      contact: "",
      swiftCode: "",
    });
    const [searchQuery, setSearchQuery] = useState("");
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
  
      if (isEditing) {
        const updatedBanks = [...banks];
        updatedBanks[editIndex] = { ...updatedBanks[editIndex], ...formData };
        setBanks(updatedBanks);
        setIsEditing(false);
        setEditIndex(null);
      } else {
        const newBank = {
          number: banks.length + 1,
          ...formData,
          branches: 0, // Default branches for new bank
        };
        setBanks([...banks, newBank]);
      }
  
      setFormData({
        name: "",
        contact: "",
        swiftCode: "",
      });
      setShowForm(false);
    };
  
    const handleEdit = (index) => {
      const bankToEdit = banks[index];
      setFormData(bankToEdit);
      setIsEditing(true);
      setEditIndex(index);
      setShowForm(true);
    };
  
    const filteredBanks = banks.filter(
      (bank) =>
        bank.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        bank.contact.includes(searchQuery) ||
        bank.swiftCode.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    return (
      <div className="mt-12 mb-8 flex flex-col gap-12">
        {/* Add/Edit Bank Form */}
        {showForm && (
          <Card className="p-4">
            <Typography variant="h6" className="mb-4">
              {isEditing ? "Edit Bank" : "Register Bank"}
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
                label="Contact No."
                name="contact"
                value={formData.contact}
                onChange={handleInputChange}
                required
              />
              <Input
                type="text"
                label="Swift Code"
                name="swiftCode"
                value={formData.swiftCode}
                onChange={handleInputChange}
                required
              />
              <Button type="submit" className="col-span-1 bg-blue-500">
                {isEditing ? "Update" : "Add"}
              </Button>
            </form>
          </Card>
        )}
  
        {/* Add and Filter Buttons */}
        <div className="flex justify-between items-center">
          <Button
            color="blue"
            onClick={() => {
              setShowForm((prev) => !prev);
              if (!showForm) {
                setIsEditing(false);
                setFormData({
                  name: "",
                  contact: "",
                  swiftCode: "",
                });
              }
            }}
          >
            {showForm ? "Close Form" : "+ Add Bank"}
          </Button>
          <Button color="gray">Filter Banks</Button>
        </div>
  
        {/* Search and Export Options */}
        <div className="flex justify-between mt-4">
          <div className="flex gap-4">
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
          <Input
            type="text"
            label="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-1/3"
          />
        </div>
  
        {/* Registered Banks Table */}
        <Card>
          <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
            <Typography variant="h6" color="white">
              Registered Banks
            </Typography>
          </CardHeader>
          <CardBody className="overflow-x-auto px-0 pt-0 pb-2">
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  {["#", "Name", "Contact", "Swift Code", "Branches", "Actions"].map(
                    (header) => (
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
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {filteredBanks.map(
                  ({ number, name, contact, swiftCode, branches }, index) => (
                    <tr key={number}>
                      <td className="border-b border-blue-gray-50 py-3 px-5">{number}</td>
                      <td className="border-b border-blue-gray-50 py-3 px-5">{name}</td>
                      <td className="border-b border-blue-gray-50 py-3 px-5">{contact}</td>
                      <td className="border-b border-blue-gray-50 py-3 px-5">
                        {swiftCode}
                      </td>
                      <td className="border-b border-blue-gray-50 py-3 px-5">
                        {branches} 
                      </td>
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
  
  export default BankManagementBank;
  