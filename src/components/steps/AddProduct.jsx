import React, { useState } from "react";

const AddProduct = ({ handlePrevious, handleNext }) => {
  const [formData, setFormData] = useState({
    productName: "",
    category: "",
    unitMeasure: "",
    quantity: "",
    city: "",
    phoneNumber: "",
    unitPrice: "",
    discountApplied: "",
    taxApplied: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // ⭐ VALIDATION ⭐
  const validateForm = () => {
    const newErrors = {};

    if (!formData.productName.trim()) newErrors.productName = "Product name required";
    if (!formData.category.trim()) newErrors.category = "Category required";
    if (!formData.unitMeasure.trim()) newErrors.unitMeasure = "Unit measure required";
    if (!formData.quantity.trim()) newErrors.quantity = "Quantity required";
    if (!formData.city.trim()) newErrors.city = "City required";
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = "Phone number required";
    if (!formData.unitPrice.trim()) newErrors.unitPrice = "Unit price required";
    if (!formData.discountApplied.trim()) newErrors.discountApplied = "Discount required";
    if (!formData.taxApplied.trim()) newErrors.taxApplied = "Tax required";

    return newErrors;
  };

  const handleSubmit = (e, type) => {
    e.preventDefault();

    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    console.log("Form Submitted", formData);
  };

  return (
    <div className="p-4">
      <form className="space-y-3">
        {/* Grid 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Product Name */}
          <div>
            <label className="block text-sm mb-1">Product Name</label>
            <input
              type="text"
              name="productName"
              value={formData.productName}
              onChange={handleChange}
              placeholder="Mixing Paddles"
              className={`w-full p-2 border rounded-lg outline-none ${errors.productName ? "border-red-400" : "border-gray-300"
                }`}
            />
            <div className="h-5">
              {errors.productName && (
                <p className="text-red-500 text-xs">{errors.productName}</p>
              )}
            </div>
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm mb-1">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className={`w-full p-2 border rounded-lg outline-none ${errors.category ? "border-red-400" : "border-gray-300"
                }`}
            >
              <option value="">Select</option>
              <option value="Construction">Construction</option>
              <option value="Tools">Tools</option>
              <option value="Wood">Wood</option>
            </select>
            <div className="h-5">
              {errors.category && (
                <p className="text-red-500 text-xs">{errors.category}</p>
              )}
            </div>
          </div>
        </div>

        {/* Grid 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Unit Measure */}
          <div>
            <label className="block text-sm mb-1">Unit Measure</label>
            <select
              name="unitMeasure"
              value={formData.unitMeasure}
              onChange={handleChange}
              className={`w-full p-2 border rounded-lg outline-none ${errors.unitMeasure ? "border-red-400" : "border-gray-300"
                }`}
            >
              <option value="">Select Unit</option>
              <option value="pcs">Pcs</option>
              <option value="kg">Kg</option>
            </select>
            <div className="h-5">
              {errors.unitMeasure && (
                <p className="text-red-500 text-xs">{errors.unitMeasure}</p>
              )}
            </div>
          </div>

          {/* Quantity */}
          <div>
            <label className="block text-sm mb-1">Quantity</label>
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              placeholder="15"
              className={`w-full p-2 border rounded-lg outline-none ${errors.quantity ? "border-red-400" : "border-gray-300"
                }`}
            />
            <div className="h-5">
              {errors.quantity && (
                <p className="text-red-500 text-xs">{errors.quantity}</p>
              )}
            </div>
          </div>
        </div>

        {/* Grid 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* City */}
          <div>
            <label className="block text-sm mb-1">City</label>
            <select
              name="city"
              value={formData.city}
              onChange={handleChange}
              className={`w-full p-2 border rounded-lg outline-none ${errors.city ? "border-red-400" : "border-gray-300"
                }`}
            >
              <option value="">Select City</option>
              <option value="Houston">Houston</option>
              <option value="Karachi">Karachi</option>
            </select>
            <div className="h-5">
              {errors.city && <p className="text-red-500 text-xs">{errors.city}</p>}
            </div>
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm mb-1">Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="+1-281-658-5421"
              className={`w-full p-2 border rounded-lg outline-none ${errors.phoneNumber ? "border-red-400" : "border-gray-300"
                }`}
            />
            <div className="h-5">
              {errors.phoneNumber && (
                <p className="text-red-500 text-xs">{errors.phoneNumber}</p>
              )}
            </div>
          </div>
        </div>

        {/* Grid 4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Unit Price */}
          <div>
            <label className="block text-sm mb-1">Unit Price</label>
            <input
              type="text"
              name="unitPrice"
              value={formData.unitPrice}
              onChange={handleChange}
              placeholder="15.00$"
              className={`w-full p-2 border rounded-lg outline-none ${errors.unitPrice ? "border-red-400" : "border-gray-300"
                }`}
            />
            <div className="h-5">
              {errors.unitPrice && (
                <p className="text-red-500 text-xs">{errors.unitPrice}</p>
              )}
            </div>
          </div>

          {/* Discount */}
          <div>
            <label className="block text-sm mb-1">Discount Applied</label>
            <input
              type="text"
              name="discountApplied"
              value={formData.discountApplied}
              onChange={handleChange}
              placeholder="8%"
              className={`w-full p-2 border rounded-lg outline-none ${errors.discountApplied ? "border-red-400" : "border-gray-300"
                }`}
            />
            <div className="h-5">
              {errors.discountApplied && (
                <p className="text-red-500 text-xs">{errors.discountApplied}</p>
              )}
            </div>
          </div>
        </div>

        {/* Tax */}
        <div className="w-full">
          <label className="block text-sm mb-1">Tax Applied</label>
          <input
            type="text"
            name="taxApplied"
            value={formData.taxApplied}
            onChange={handleChange}
            placeholder="2%"
            className={`w-full p-2 border rounded-lg outline-none ${errors.taxApplied ? "border-red-400" : "border-gray-300"
              }`}
          />
          <div className="h-5">
            {errors.taxApplied && (
              <p className="text-red-500 text-xs">{errors.taxApplied}</p>
            )}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 pt-3">
          <button
            type="button"
            className="flex-1 py-2 rounded-lg bg-gray-900 text-white"
            onClick={(e) => handlePrevious(e, "prev")}
          >
            Back
          </button>
          <button
            type="button"
            onClick={(e) => handleSubmit(e, "next")}
            className="flex-1 py-2 rounded-lg bg-gray-900 text-white"
          >
            Preview
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
