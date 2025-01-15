import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
    Input,
    Select,
    Option,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
  } from "@material-tailwind/react";
  import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
  import { useState } from "react";
  
  const initialBranchData = [
    { number: 1, name: "Westlands Branch", bank: "African Banking Corp. Ltd", address: "Nairobi, ABC Bank House", code: "ABC001", farmers: 1 },
    { number: 2, name: "Westlands Branch", bank: "ABSA", address: "Westlands Commercial Centre", code: "023", farmers: 0 },
    { number: 3, name: "Kenyatta University", bank: "Family Bank", address: "Nairobi", code: "CODFER", farmers: 2 },
    { number: 4, name: "KCB BIASHARA", bank: "KCB", address: "Biashara street", code: "KCB", farmers: 42 },
    { number: 5, name: "Utawala Branch", bank: "NCBA", address: "Nairobi, Eastern Bypass", code: "NCBA UTW", farmers: 17 },
  ];
  
  export function BankManagementBranches() {
    const [branches, setBranches] = useState(initialBranchData);
    const [showForm, setShowForm] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editIndex, setEditIndex] = useState(null);
    const [formData, setFormData] = useState({
      bank: "",
      name: "",
      address: "",
      code: "",
    });
    const [searchQuery, setSearchQuery] = useState("");
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
  
      if (isEditing) {
        const updatedBranches = [...branches];
        updatedBranches[editIndex] = { ...updatedBranches[editIndex], ...formData };
        setBranches(updatedBranches);
        setIsEditing(false);
        setEditIndex(null);
      } else {
        const newBranch = {
          number: branches.length + 1,
          ...formData,
          farmers: 0, // Default number of farmers for a new branch
        };
        setBranches([...branches, newBranch]);
      }
  
      setFormData({
        bank: "",
        name: "",
        address: "",
        code: "",
      });
      setShowForm(false);
    };
  
    const handleEdit = (index) => {
      const branchToEdit = branches[index];
      setFormData(branchToEdit);
      setIsEditing(true);
      setEditIndex(index);
      setShowForm(true);
    };
  
    const filteredBranches = branches.filter(
      (branch) =>
        branch.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        branch.bank.toLowerCase().includes(searchQuery.toLowerCase()) ||
        branch.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
        branch.code.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    return (
      <div className="mt-12 mb-8 flex flex-col gap-12">
        {/* Add/Edit Branch Form */}
        {showForm && (
          <Card className="p-4">
            <Typography variant="h6" className="mb-4">
              {isEditing ? "Edit Bank Branch" : "Register Bank Branch"}
            </Typography>
            <form onSubmit={handleFormSubmit} className="grid grid-cols-4 gap-4">
              <Select
                label="Bank"
                name="bank"
                value={formData.bank}
                onChange={(value) => setFormData({ ...formData, bank: value })}
                required
              >
                <Option value="African Banking Corp. Ltd">African Banking Corp. Ltd</Option>
                <Option value="ABSA">ABSA</Option>
                <Option value="Family Bank">Family Bank</Option>
                <Option value="KCB">KCB</Option>
                <Option value="NCBA">NCBA</Option>
              </Select>
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
                label="Code"
                name="code"
                value={formData.code}
                onChange={handleInputChange}
                required
              />
              <Input
                type="text"
                label="Address"
                name="address"
                value={formData.address}
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
                  bank: "",
                  name: "",
                  address: "",
                  code: "",
                });
              }
            }}
          >
            {showForm ? "Close Form" : "+ Add Bank Branch"}
          </Button>
          <Button color="gray">Filter Bank Branches</Button>
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
  
        {/* Registered Bank Branches Table */}
        <Card>
          <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
            <Typography variant="h6" color="white">
              Registered Bank Branches
            </Typography>
          </CardHeader>
          <CardBody className="overflow-x-auto px-0 pt-0 pb-2">
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  {["#", "Name", "Bank", "Address", "Code", "No. Of Farmers", "Actions"].map(
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
                {filteredBranches.map(
                  ({ number, name, bank, address, code, farmers }, index) => (
                    <tr key={number}>
                      <td className="border-b border-blue-gray-50 py-3 px-5">{number}</td>
                      <td className="border-b border-blue-gray-50 py-3 px-5">{name}</td>
                      <td className="border-b border-blue-gray-50 py-3 px-5">{bank}</td>
                      <td className="border-b border-blue-gray-50 py-3 px-5">{address}</td>
                      <td className="border-b border-blue-gray-50 py-3 px-5">{code}</td>
                      <td className="border-b border-blue-gray-50 py-3 px-5">
                        {farmers}
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
  
  export default BankManagementBranches;
  