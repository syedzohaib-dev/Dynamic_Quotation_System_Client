import React, { useState } from 'react';

const CustomerDetails = ({ handlePrevious, handleNext }) => {
  const [formData, setFormData] = useState({
    customerName: '',
    companyName: '',
    deliveryAddress: '',
    city: '',
    state: '',
    postalCode: '',
    email: '',
    phoneNumber: '',
    specialNote: ''
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

    if (!formData.customerName.trim()) newErrors.customerName = 'Customer name is required';
    if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
    if (!formData.deliveryAddress.trim()) newErrors.deliveryAddress = 'Delivery address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.state.trim()) newErrors.state = 'State is required';
    if (!formData.postalCode.trim()) newErrors.postalCode = 'Postal code is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'Phone number is required';
    if (!formData.specialNote.trim()) newErrors.specialNote = 'Special node is required';

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
      handleNext()
    }
  };

  return (
    <div className="p-4">
      <form className="space-y-2">
        {/* Customer Name & Company */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Customer Name
            </label>
            <input
              type="text"
              name="customerName"
              value={formData.customerName}
              onChange={handleChange}
              placeholder="Brown Martin"
              className={`w-full p-1 border rounded-lg hover:border-blue-400 outline-none  ${errors.customerName ? 'border-red-400' : 'border-gray-300'
                }`}
            />
            <div className='h-5'>
              {errors.customerName && (
                <p className="text-red-500 text-xs mt-0.3">{errors.customerName}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Company Name
            </label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Digital Thermal"
              className={`w-full p-1 border rounded-lg hover:border-blue-400 outline-none transition ${errors.companyName ? 'border-red-500' : 'border-gray-300'
                }`}
            />
            <div className='h-5'>
              {errors.companyName && (
                <p className="text-red-500 text-xs mt-0.3">{errors.companyName}</p>
              )}
            </div>
          </div>
        </div>

        {/* Delivery Address */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Delivery Address
          </label>
          <input
            type="text"
            name="deliveryAddress"
            value={formData.deliveryAddress}
            onChange={handleChange}
            placeholder="901 Bagby, between McKinney and Walker, Houston"
            className={`w-full p-1 border rounded-lg hover:border-blue-400 outline-none transition ${errors.deliveryAddress ? 'border-red-500' : 'border-gray-300'
              }`}
          />
          <div className='h-5'>
            {errors.deliveryAddress && (
              <p className="text-red-500 text-xs mt-0.3">{errors.deliveryAddress}</p>
            )}
          </div>
        </div>

        {/* City, State, Postal Code */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              City
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Houston"
              className={`w-full p-1 border rounded-lg hover:border-blue-400 outline-none transition ${errors.city ? 'border-red-500' : 'border-gray-300'
                }`}
            />
            <div className="h-5">
              {errors.city && (
                <p className="text-red-500 text-xs mt-0.3">{errors.city}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              State
            </label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              placeholder="Texas"
              className={`w-full p-1 border rounded-lg hover:border-blue-400 outline-none transition ${errors.state ? 'border-red-500' : 'border-gray-300'
                }`}
            />
            <div className="h-5">
              {errors.state && (
                <p className="text-red-500 text-xs mt-0.3">{errors.state}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Postal Code
            </label>
            <input
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              placeholder="77002"
              className={`w-full p-1 border rounded-lg hover:border-blue-400 outline-none transition ${errors.postalCode ? 'border-red-500' : 'border-gray-300'
                }`}
            />
            <div className="h-5">
              {errors.postalCode && (
                <p className="text-red-500 text-xs mt-0.3">{errors.postalCode}</p>
              )}
            </div>
          </div>
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="thomasshelby@gmail.com"
              className={`w-full p-1 border rounded-lg hover:border-blue-400 outline-none transition ${errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
            />
            <div className="h-5">
              {errors.email && (
                <p className="text-red-500 text-xs mt-0.3">{errors.email}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="+1-281-658-5421"
              className={`w-full p-1 border rounded-lg hover:border-blue-400 outline-none transition ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'
                }`}
            />
            <div className="h-5">
              {errors.phoneNumber && (
                <p className="text-red-500 text-xs mt-0.3">{errors.phoneNumber || ""}</p>
              )}
            </div>
          </div>
        </div>

        {/* Special Instruction */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Special Instruction
          </label>
          <input
            name="specialNote"
            value={formData.specialNote}
            onChange={handleChange}
            placeholder="Type Special Note"

            className={`w-full p-1 border border-gray-300 rounded-lg hover:border-blue-400 outline-none resize-none ${errors.postalCode ? 'border-red-500' : 'border-gray-300'
              }`}
          />
          <div className="h-5">
            {errors.phoneNumber && (
              <p className="text-red-500 text-xs mt-0.3">{errors.specialNote}</p>
            )}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 pt-2">
          <button
            type="button"
            onClick={(e) => handlePrevious(e, 'preview')}
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

export default CustomerDetails;