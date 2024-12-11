import React from 'react';
import { Input, Button, Typography } from '@material-tailwind/react';

export function BaseForm({ fields, onSubmit, onCancel }) {
    return (
        <form onSubmit={onSubmit} className="space-y-4">
            {fields.map((field, index) => (
                <div key={index} className="flex flex-col">
                    <Typography variant="h6" color="blue-gray" className="mb-2">
                        {field.label}
                    </Typography>
                    <Input
                        label={field.label}
                        value={field.value}
                        onChange={field.onChange}
                        required={field.required}
                    />
                </div>
            ))}
            <div className="flex gap-4">
                <Button
                    type="submit"
                    color="green"
                    className="px-6 py-2 rounded-md text-white hover:bg-green-600 transition-all duration-200"
                >
                    Submit
                </Button>
                <Button
                    type="button"
                    color="red"
                    className="px-6 py-2 rounded-md text-white hover:bg-red-600 transition-all duration-200"
                    onClick={onCancel}
                >
                    Cancel
                </Button>
            </div>
        </form>
    );
}

export default BaseForm;
