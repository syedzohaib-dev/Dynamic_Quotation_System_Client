import React, { useState } from 'react';

const OrderSources = ({ handlePrevious, handleNext, data, setData }) => {
  const today = new Date().toISOString().split("T")[0];

  const [formData, setFormData] = useState({
    orderSources: "",
    orderDate: today,
    deliveryAddress: "",
    city: "",
    phoneNumber: "",
    issueDate: "",
    dueDate: "",
    paymentMethod: "",
    advance: "",
    termsAndCondition: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  // ⭐ FIXED VALIDATION ⭐
  const validateForm = () => {
    const newErrors = {};

    if (!formData.orderSources.trim())
      newErrors.orderSources = "Order source is required";

    if (!formData.orderDate.trim())
      newErrors.orderDate = "Order date is required";

    if (!formData.deliveryAddress.trim())
      newErrors.deliveryAddress = "Delivery address is required";

    if (!formData.city.trim())
      newErrors.city = "City is required";

    if (!formData.phoneNumber.trim())
      newErrors.phoneNumber = "Phone number is required";

    if (!formData.issueDate.trim())
      newErrors.issueDate = "Issue date is required";

    if (!formData.dueDate.trim())
      newErrors.dueDate = "Due date is required";

    if (!formData.paymentMethod.trim())
      newErrors.paymentMethod = "Payment method is required";

    if (!formData.advance.trim())
      newErrors.advance = "Advance amount is required";

    if (!formData.termsAndCondition.trim())
      newErrors.termsAndCondition = "Special instruction is required";

    return newErrors;
  };

  const handleSubmit = (e, type) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setData(formData);   // save to parent
    console.log("Form 2 submitted:", formData);
    if (type === 'next') {
      handleNext();
    };
  };

  return (
    <div className="p-4" style={{ backgroundColor: 'var(--color-gray-50)' }}>
      <form className="space-y-2">

        {/* Order Source + Date */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Order Sources
            </label>
            <input
              type="text"
              name="orderSources"
              value={formData.orderSources}
              onChange={handleChange}
              placeholder="Website"
              className={`w-full p-1 border rounded-lg outline-none ${errors.orderSources ? "border-red-400" : "border-gray-300"}`}
            />
            <div className="h-5">
              {errors.orderSources && <p className="text-red-500 text-xs">{errors.orderSources}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Order Date</label>
            <input
              type="date"
              name="orderDate"
              value={formData.orderDate}
              onChange={handleChange}
              className={`w-full p-1 border rounded-lg outline-none ${errors.orderDate ? "border-red-400" : "border-gray-300"}`}
            />
            <div className="h-5">
              {errors.orderDate && <p className="text-red-500 text-xs">{errors.orderDate}</p>}
            </div>
          </div>

        </div>

        {/* Delivery Address */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Address</label>
          <input
            type="text"
            name="deliveryAddress"
            value={formData.deliveryAddress}
            onChange={handleChange}
            placeholder="901 Bagby, Houston"
            className={`w-full p-1 border rounded-lg outline-none ${errors.deliveryAddress ? "border-red-400" : "border-gray-300"}`}
          />
          <div className="h-5">
            {errors.deliveryAddress && <p className="text-red-500 text-xs">{errors.deliveryAddress}</p>}
          </div>
        </div>

        {/* City + Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
            <select
              name="city"
              value={formData.city}
              onChange={handleChange}
              className={`w-full p-1 border rounded-lg outline-none ${errors.city ? "border-red-400" : "border-gray-300"}`}
            >
              <option value="select">select</option>
              <option value="Karachi">Karachi</option>
              <option value="Lahore">Lahore</option>
              <option value="Islamabad">Islamabad</option>
              <option value="Rawalpindi">Rawalpindi</option>
              <option value="Faisalabad">Faisalabad</option>
              <option value="Multan">Multan</option>
              <option value="Peshawar">Peshawar</option>
              <option value="Quetta">Quetta</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Sialkot">Sialkot</option>
              <option value="Gujranwala">Gujranwala</option>
              <option value="Sukkur">Sukkur</option>
              <option value="Larkana">Larkana</option>
              <option value="Bahawalpur">Bahawalpur</option>
              <option value="Sargodha">Sargodha</option>
              <option value="Abbottabad">Abbottabad</option>
              <option value="Mardan">Mardan</option>
              <option value="Swat">Swat</option>
              <option value="Kohat">Kohat</option>
              <option value="Mirpur">Mirpur</option>
              <option value="Rahim Yar Khan">Rahim Yar Khan</option>
              <option value="Dera Ghazi Khan">Dera Ghazi Khan</option>
            </select>
            <div className="h-5">
              {errors.city && <p className="text-red-500 text-xs">{errors.city}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input
              type="number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Phone Number"
              className={`w-full p-1 border rounded-lg outline-none ${errors.phoneNumber ? "border-red-400" : "border-gray-300"}`}
            />
            <div className="h-5">
              {errors.phoneNumber && <p className="text-red-500 text-xs">{errors.phoneNumber}</p>}
            </div>
          </div>

        </div>

        {/* Issue + Due Date */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Issue Date</label>
            <input
              type="date"
              name="issueDate"
              value={formData.issueDate}
              onChange={handleChange}
              className={`w-full p-1 border rounded-lg outline-none ${errors.issueDate ? "border-red-400" : "border-gray-300"}`}
            />
            <div className="h-5">
              {errors.issueDate && <p className="text-red-500 text-xs">{errors.issueDate}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Due Date</label>
            <input
              type="date"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleChange}
              className={`w-full p-1 border rounded-lg outline-none ${errors.dueDate ? "border-red-400" : "border-gray-300"}`}
            />
            <div className="h-5">
              {errors.dueDate && <p className="text-red-500 text-xs">{errors.dueDate}</p>}
            </div>
          </div>

        </div>

        {/* Payment + Advance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Payment Method</label>
            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              className={`w-full p-1 border rounded-lg outline-none ${errors.paymentMethod ? "border-red-400" : "border-gray-300"}`}
            >
              <option value="">Select Method</option>
              <option value="cash">Cash</option>
            </select>
            <div className="h-5">
              {errors.paymentMethod && <p className="text-red-500 text-xs">{errors.paymentMethod}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Advance</label>
            <input
              type="number"
              name="advance"
              value={formData.advance}
              onChange={handleChange}
              placeholder="30% Mandatory"
              className={`w-full p-1 border rounded-lg outline-none ${errors.advance ? "border-red-400" : "border-gray-300"}`}
            />
            <div className="h-5">
              {errors.advance && <p className="text-red-500 text-xs">{errors.advance}</p>}
            </div>
          </div>

        </div>

        {/* Special Instruction */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Terms & Conditions</label>
          <input
            name="termsAndCondition"
            value={formData.termsAndCondition}
            onChange={handleChange}
            placeholder="Type Special Note"
            className={`w-full p-1 border rounded-lg outline-none ${errors.termsAndCondition ? "border-red-400" : "border-gray-300"}`}
          />
          <div className="h-5">
            {errors.termsAndCondition && (
              <p className="text-red-500 text-xs">{errors.termsAndCondition}</p>
            )}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 pt-2">
          <button
            type="button"
            onClick={(e) => handlePrevious(e, "prev")}
            className="flex-1 py-2 bg-black text-white rounded-lg  transition"
          >
            Preview
          </button>
          <button
            type="button"
            onClick={(e) => handleSubmit(e, "next")}
            className="flex-1 py-2 bg-black text-white rounded-lg  transition"
          >
            Next
          </button>
        </div>

      </form>
    </div>
  );
};

export default OrderSources;
