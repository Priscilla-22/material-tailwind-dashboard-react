// src/App.js

import React, { useState } from "react";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
    Chip,
    Button,
    Input,
    Select,
} from "@material-tailwind/react";

export function ProductManagementProducts() {
    const initialProducts = [
        {
            img: "/img/team-1.jpeg",
            name: "Organic Apple",
            mode: "Wholesale",
            buyingPrice: 1.5,
            sellingPrice: 2.0,
            vat: "5%",
            category: "Fruits",
            unitMeasure: "Kg",
            serialNumber: "SN123456",
            productImage: "/img/team-1.jpeg",
            minQuantityAlert: 50,
        },

        {
            img: "/img/team-1.jpeg",
            name: "Fresh Carrots",
            mode: "Retail",
            buyingPrice: 0.8,
            sellingPrice: 1.2,
            vat: "5%",
            category: "Vegetables",
            unitMeasure: "Kg",
            serialNumber: "SN654321",
            productImage: "https://via.placeholder.com/100",
            minQuantityAlert: 30,
        },
        {
            img: "/img/team-1.jpeg",
            name: "Organic Apple",
            mode: "Wholesale",
            buyingPrice: 1.5,
            sellingPrice: 2.0,
            vat: "5%",
            category: "Fruits",
            unitMeasure: "Kg",
            serialNumber: "SN123456",
            productImage: "https://via.placeholder.com/100",
            minQuantityAlert: 50,
        },
        {
            img: "/img/team-1.jpeg",
            name: "Organic Apple",
            mode: "Wholesale",
            buyingPrice: 1.5,
            sellingPrice: 2.0,
            vat: "5%",
            category: "Fruits",
            unitMeasure: "Kg",
            serialNumber: "SN123456",
            productImage: "https://via.placeholder.com/100",
            minQuantityAlert: 50,
        },
        {
            img: "/img/team-1.jpeg",
            name: "Organic Apple",
            mode: "Wholesale",
            buyingPrice: 1.5,
            sellingPrice: 2.0,
            vat: "5%",
            category: "Fruits",
            unitMeasure: "Kg",
            serialNumber: "SN123456",
            productImage: "https://via.placeholder.com/100",
            minQuantityAlert: 50,
        },
        {
            img: "/img/team-1.jpeg",
            name: "Organic Apple",
            mode: "Wholesale",
            buyingPrice: 1.5,
            sellingPrice: 2.0,
            vat: "5%",
            category: "Fruits",
            unitMeasure: "Kg",
            serialNumber: "SN123456",
            productImage: "https://via.placeholder.com/100",
            minQuantityAlert: 50,
        },
        {
            img: "/img/team-1.jpeg",
            name: "Organic Apple",
            mode: "Wholesale",
            buyingPrice: 1.5,
            sellingPrice: 2.0,
            vat: "5%",
            category: "Fruits",
            unitMeasure: "Kg",
            serialNumber: "SN123456",
            productImage: "https://via.placeholder.com/100",
            minQuantityAlert: 50,
        },
    ];

    // State Management
    const [activeForm, setActiveForm] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        mode: "",
        buyingPrice: "",
        sellingPrice: "",
        vat: "",
        category: "",
        unitMeasure: "",
        serialNumber: "",
        productImage: null,
        minQuantityAlert: "",
        // Bulk Import Form
        uploadFile: null,
        // Filter Product Form
        filterCategory: "",
        filterSerialNumber: "",
        filterMode: "",
        filterUnitMeasure: "",
    });

    const [products, setProducts] = useState(initialProducts);
    const [filteredProducts, setFilteredProducts] = useState(initialProducts);

    const handleInputChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleToggleForm = (form) => {
        setActiveForm(form === activeForm ? null : form);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (activeForm === "registerProduct") {
            const newProduct = {
                img: formData.productImage
                    ? URL.createObjectURL(formData.productImage)
                    : "https://via.placeholder.com/150",
                name: formData.name,
                mode: formData.mode,
                buyingPrice: parseFloat(formData.buyingPrice),
                sellingPrice: parseFloat(formData.sellingPrice),
                vat: formData.vat,
                category: formData.category,
                unitMeasure: formData.unitMeasure,
                serialNumber: formData.serialNumber,
                productImage: formData.productImage
                    ? URL.createObjectURL(formData.productImage)
                    : "https://via.placeholder.com/100",
                minQuantityAlert: parseInt(formData.minQuantityAlert),
            };
            setProducts((prev) => [...prev, newProduct]);
            setFilteredProducts((prev) => [...prev, newProduct]);
            console.log("Registered Product:", newProduct);
        } else if (activeForm === "bulkImport") {
            // Handle file upload (for demonstration, we'll log the file)
            console.log("Bulk Import File:", formData.uploadFile);
            // Implement actual bulk import logic here
        } else if (activeForm === "filterProduct") {
            // Apply filters
            let filtered = [...products];
            if (formData.filterCategory) {
                filtered = filtered.filter(
                    (product) =>
                        product.category
                            .toLowerCase()
                            .includes(formData.filterCategory.toLowerCase())
                );
            }
            if (formData.filterSerialNumber) {
                filtered = filtered.filter((product) =>
                    product.serialNumber
                        .toLowerCase()
                        .includes(formData.filterSerialNumber.toLowerCase())
                );
            }
            if (formData.filterMode) {
                filtered = filtered.filter(
                    (product) =>
                        product.mode
                            .toLowerCase()
                            .includes(formData.filterMode.toLowerCase())
                );
            }
            if (formData.filterUnitMeasure) {
                filtered = filtered.filter(
                    (product) =>
                        product.unitMeasure
                            .toLowerCase()
                            .includes(formData.filterUnitMeasure.toLowerCase())
                );
            }
            setFilteredProducts(filtered);
            console.log("Applied Filters:", formData);
        }
        setActiveForm(null);
    };

    // Reset Filters
    const handleResetFilters = () => {
        setFilteredProducts(products);
        setFormData((prev) => ({
            ...prev,
            filterCategory: "",
            filterSerialNumber: "",
            filterMode: "",
            filterUnitMeasure: "",
        }));
    };

    const registerProductFields = [
        {
            label: "Name",
            value: formData.name,
            onChange: (e) => handleInputChange("name", e.target.value),
            required: true,
        },
        {
            label: "Mode",
            value: formData.mode,
            onChange: (e) => handleInputChange("mode", e.target.value),
            required: true,
        },
        {
            label: "Buying Price",
            type: "number",
            value: formData.buyingPrice,
            onChange: (e) => handleInputChange("buyingPrice", e.target.value),
            required: true,
        },
        {
            label: "Selling Price",
            type: "number",
            value: formData.sellingPrice,
            onChange: (e) => handleInputChange("sellingPrice", e.target.value),
            required: true,
        },
        {
            label: "V.A.T",
            value: formData.vat,
            onChange: (e) => handleInputChange("vat", e.target.value),
            required: true,
        },
        {
            label: "Category",
            value: formData.category,
            onChange: (e) => handleInputChange("category", e.target.value),
            required: true,
        },
        {
            label: "Unit Measure",
            value: formData.unitMeasure,
            onChange: (e) => handleInputChange("unitMeasure", e.target.value),
            required: true,
        },
        {
            label: "Serial Number",
            value: formData.serialNumber,
            onChange: (e) => handleInputChange("serialNumber", e.target.value),
            required: true,
        },
        {
            label: "Product Image",
            type: "file",
            onChange: (e) =>
                handleInputChange("productImage", e.target.files[0] || null),
            required: false,
        },
        {
            label: "Minimum Quantity Alert",
            type: "number",
            value: formData.minQuantityAlert,
            onChange: (e) =>
                handleInputChange("minQuantityAlert", e.target.value),
            required: true,
        },
    ];

    const bulkImportFields = [
        {
            label: "Upload File",
            type: "file",
            onChange: (e) => handleInputChange("uploadFile", e.target.files[0]),
            required: true,
        },
    ];

    const filterProductFields = [
        {
            label: "Category",
            value: formData.filterCategory,
            onChange: (e) => handleInputChange("filterCategory", e.target.value),
            required: false,
        },
        {
            label: "Serial Number",
            value: formData.filterSerialNumber,
            onChange: (e) => handleInputChange("filterSerialNumber", e.target.value),
            required: false,
        },
        {
            label: "Mode",
            value: formData.filterMode,
            onChange: (e) => handleInputChange("filterMode", e.target.value),
            required: false,
        },
        {
            label: "Unit Measure",
            value: formData.filterUnitMeasure,
            onChange: (e) =>
                handleInputChange("filterUnitMeasure", e.target.value),
            required: false,
        },
    ];

    const handleEdit = (product) => {
        console.log(`Edit product: ${product.name}`);
    };

    // BaseForm Component (defined inside App for single file)
    const BaseForm = ({ fields, onSubmit, onCancel, formTitle }) => {
        return (
            <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {fields.map((field, index) => {
                        if (field.type === "select") {
                            return (
                                <Select
                                    key={index}
                                    label={field.label}
                                    value={field.value}
                                    onChange={field.onChange}
                                    required={field.required}
                                    className="col-span-1"
                                >
                                    {field.options.map((option, idx) => (
                                        <option key={idx} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </Select>
                            );
                        }

                        if (field.type === "file") {
                            return (
                                <div key={index} className="col-span-1">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        {field.label}
                                    </label>
                                    <Input
                                        type="file"
                                        onChange={field.onChange}
                                        required={field.required}
                                    />
                                </div>
                            );
                        }

                        return (
                            <Input
                                key={index}
                                type={field.type || "text"}
                                label={field.label}
                                placeholder={field.placeholder}
                                value={field.value}
                                onChange={field.onChange}
                                required={field.required}
                                className="col-span-1"
                            />
                        );
                    })}
                </div>

                <div className="flex gap-4">
                    <Button type="submit" className="bg-blue-600">
                        Submit
                    </Button>
                    <Button type="button" variant="outlined" onClick={onCancel}>
                        Cancel
                    </Button>
                </div>
            </form>
        );
    };

    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <div className="mt-12 mb-8 flex flex-col gap-12 px-4 md:px-8 lg:px-0">
                {/* Buttons to toggle forms */}
                <div className="flex flex-wrap gap-4">
                    <Button
                        className="bg-blue-600"
                        onClick={() => handleToggleForm("registerProduct")}
                    >
                        Register Product
                    </Button>
                    <Button
                        className="bg-green-600"
                        onClick={() => handleToggleForm("bulkImport")}
                    >
                        Bulk Import
                    </Button>
                    <Button
                        className="bg-purple-600"
                        onClick={() => handleToggleForm("filterProduct")}
                    >
                        Filter Product
                    </Button>
                </div>

                {/* Register Product Form */}
                {activeForm === "registerProduct" && (
                    <div className="mt-6">
                        <Typography variant="h6" className="mb-4">
                            Register Product
                        </Typography>
                        <BaseForm
                            fields={registerProductFields}
                            onSubmit={handleSubmit}
                            onCancel={() => handleToggleForm("registerProduct")}
                        />
                    </div>
                )}

                {/* Bulk Import Form */}
                {activeForm === "bulkImport" && (
                    <div className="mt-6">
                        <Typography variant="h6" className="mb-4">
                            Bulk Import Products
                        </Typography>
                        <BaseForm
                            fields={bulkImportFields}
                            onSubmit={handleSubmit}
                            onCancel={() => handleToggleForm("bulkImport")}
                        />
                        <Button variant="outlined" className="mt-4">
                            Download Template
                        </Button>
                    </div>
                )}

                {/* Filter Product Form */}
                {activeForm === "filterProduct" && (
                    <div className="mt-6">
                        <Typography variant="h6" className="mb-4">
                            Filter Product
                        </Typography>
                        <BaseForm
                            fields={filterProductFields}
                            onSubmit={handleSubmit}
                            onCancel={() => handleToggleForm("filterProduct")}
                        />
                        <div className="flex gap-4 mt-4">
                            {/*<Button className="bg-blue-600">Apply Filters</Button>*/}
                            {/*<Button*/}
                            {/*    variant="outlined"*/}
                            {/*    color="red"*/}
                            {/*    onClick={handleResetFilters}*/}
                            {/*>*/}
                            {/*    Reset*/}
                            {/*</Button>*/}
                        </div>
                    </div>
                )}

                {/* Products Table */}
                <Card>
                    <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
                        <Typography variant="h6" color="white">
                            Products Table
                        </Typography>
                    </CardHeader>
                    <CardBody className="overflow-x-auto px-0 pt-0 pb-2">
                        <table className="w-full min-w-[900px] table-auto">
                            <thead>
                            <tr>
                                {[
                                    "Image",
                                    "Name",
                                    "Mode",
                                    "Buying Price",
                                    "Selling Price",
                                    "V.A.T",
                                    "Category",
                                    "Unit Measure",
                                    "Serial Number",
                                    "Minimum Quantity Alert",
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
                            {filteredProducts.map((product, key) => {
                                const className = `py-3 px-5 ${
                                    key === filteredProducts.length - 1
                                        ? ""
                                        : "border-b border-blue-gray-50"
                                }`;

                                return (
                                    <tr key={product.serialNumber}>
                                        {/* Image */}
                                        <td className={className}>
                                            <Avatar
                                                src={product.img}
                                                alt={product.name}
                                                size="sm"
                                                variant="rounded"
                                            />
                                        </td>

                                        {/* Name */}
                                        <td className={className}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-semibold"
                                            >
                                                {product.name}
                                            </Typography>
                                        </td>

                                        {/* Mode */}
                                        <td className={className}>
                                            <Typography className="text-xs font-normal text-blue-gray-600">
                                                {product.mode}
                                            </Typography>
                                        </td>

                                        {/* Buying Price */}
                                        <td className={className}>
                                            <Typography className="text-xs font-normal text-blue-gray-600">
                                                ${product.buyingPrice.toFixed(2)}
                                            </Typography>
                                        </td>

                                        {/* Selling Price */}
                                        <td className={className}>
                                            <Typography className="text-xs font-normal text-blue-gray-600">
                                                ${product.sellingPrice.toFixed(2)}
                                            </Typography>
                                        </td>

                                        {/* V.A.T */}
                                        <td className={className}>
                                            <Typography className="text-xs font-normal text-blue-gray-600">
                                                {product.vat}
                                            </Typography>
                                        </td>

                                        {/* Category */}
                                        <td className={className}>
                                            <Typography className="text-xs font-normal text-blue-gray-600">
                                                {product.category}
                                            </Typography>
                                        </td>

                                        {/* Unit Measure */}
                                        <td className={className}>
                                            <Typography className="text-xs font-normal text-blue-gray-600">
                                                {product.unitMeasure}
                                            </Typography>
                                        </td>

                                        {/* Serial Number */}
                                        <td className={className}>
                                            <Typography className="text-xs font-normal text-blue-gray-600">
                                                {product.serialNumber}
                                            </Typography>
                                        </td>

                                        {/* Minimum Quantity Alert */}
                                        <td className={className}>
                                            <Typography className="text-xs font-normal text-blue-gray-600">
                                                {product.minQuantityAlert}
                                            </Typography>
                                        </td>

                                        {/* Actions */}
                                        <td className={className}>
                                            <Button
                                                variant="text"
                                                color="blue"
                                                size="sm"
                                                onClick={() => handleEdit(product)}
                                            >
                                                Edit
                                            </Button>
                                        </td>
                                    </tr>
                                );
                            })}
                            </tbody>
                        </table>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
}

export default ProductManagementProducts;
