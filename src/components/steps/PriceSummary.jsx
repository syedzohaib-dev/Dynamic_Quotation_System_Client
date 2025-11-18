import React, { useState } from 'react';

const PriceSummary = ({ handlePrevious, handleNext }) => {
    const [formData, setFormData] = useState({
        subTotal: '',
        totalDiscountApplied: '',
        totalTaxApplied: '',
        grandTotal: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.subTotal.trim()) newErrors.subTotal = 'Sub Total is required';
        if (!formData.totalDiscountApplied.trim()) newErrors.totalDiscountApplied = 'Total Discount is required';
        if (!formData.totalTaxApplied.trim()) newErrors.totalTaxApplied = 'Total Tax is required';
        if (!formData.grandTotal.trim()) newErrors.grandTotal = 'Grand Total is required';

        return newErrors;
    };

    const handleSubmit = (e, type) => {
        e.preventDefault();
        const formErrors = validateForm();

        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        // Submit logic here
        console.log('Form submitted:', formData);
        if (type === 'next') {
            // Next step logic
        } else {
            // Preview logic
        }
    };

    return (
        <div className="p-4 h-full">
            <form className="space-y-2 flex flex-col justify-between h-full">
                {/* Customer Name & Company */}
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Sub Total
                            </label>
                            <input
                                type="number"
                                name="subTotal"
                                value={formData.subTotal}
                                onChange={handleChange}
                                placeholder="Add Calculated"
                                className={`w-full p-1 border rounded-lg hover:border-blue-400 outline-none  ${errors.subTotal ? 'border-red-400' : 'border-gray-300'
                                    }`}
                            />
                            <div className='h-5'>
                                {errors.subTotal && (
                                    <p className="text-red-500 text-xs mt-0.3">{errors.subTotal}</p>
                                )}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Total Discount Applied
                            </label>
                            <input
                                type="number"
                                name="totalDiscountApplied"
                                value={formData.totalDiscountApplied}
                                onChange={handleChange}
                                placeholder="Add Calculated"
                                className={`w-full p-1 border rounded-lg hover:border-blue-400 outline-none transition ${errors.totalDiscountApplied ? 'border-red-500' : 'border-gray-300'
                                    }`}
                            />
                            <div className='h-5'>
                                {errors.totalDiscountApplied && (
                                    <p className="text-red-500 text-xs mt-0.3">{errors.totalDiscountApplied}</p>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Total Tax Applied
                            </label>
                            <input
                                type="number"
                                name="totalTaxApplied"
                                value={formData.totalTaxApplied}
                                onChange={handleChange}
                                placeholder="Add Calculated"
                                className={`w-full p-1 border rounded-lg hover:border-blue-400 outline-none  ${errors.totalTaxApplied ? 'border-red-400' : 'border-gray-300'
                                    }`}
                            />
                            <div className='h-5'>
                                {errors.totalTaxApplied && (
                                    <p className="text-red-500 text-xs mt-0.3">{errors.totalTaxApplied}</p>
                                )}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Grand Total
                            </label>
                            <input
                                type="number"
                                name="grandTotal"
                                value={formData.grandTotal}
                                onChange={handleChange}
                                placeholder="Add Calculated"
                                className={`w-full p-1 border rounded-lg hover:border-blue-400 outline-none transition ${errors.grandTotal ? 'border-red-500' : 'border-gray-300'
                                    }`}
                            />
                            <div className='h-5'>
                                {errors.grandTotal && (
                                    <p className="text-red-500 text-xs mt-0.3">{errors.grandTotal}</p>
                                )}
                            </div>
                        </div>
                    </div>

                </div>



                {/* Buttons */}
                <div className="flex gap-3 pt-2">
                    <button
                        type="button"
                        onClick={(e) => handlePrevious(e, 'prev')}
                        className="flex-1 py-2  text-white bg-black rounded-lg transition font-medium"
                    >
                        Preview
                    </button>
                    <button
                        type="button"
                        onClick={(e) => handleSubmit(e, 'next')}
                        className="flex-1 py-2 bg-black text-white rounded-lg  transition font-medium"
                    >
                        Next
                    </button>
                </div>
            </form>
        </div>
    );
};

export default PriceSummary;