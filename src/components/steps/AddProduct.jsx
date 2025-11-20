import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";


const AddProduct = ({ handlePrevious, handleNext, products, setProducts }) => {
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


    if (!formData.productName) newErrors.productName = "Product name required";
    if (!formData.category) newErrors.category = "Category required";
    if (!formData.unitMeasure) newErrors.unitMeasure = "Unit measure required";
    if (!formData.quantity) newErrors.quantity = "Quantity required";
    if (!formData.city) newErrors.city = "City required";
    if (!formData.phoneNumber) newErrors.phoneNumber = "Phone number required";
    if (!formData.unitPrice) newErrors.unitPrice = "Unit price required";
    if (!formData.discountApplied) newErrors.discountApplied = "Discount required";
    if (!formData.taxApplied) newErrors.taxApplied = "Tax required";

    return newErrors;
  };

  const calculateProduct = () => {
    const qty = Number(formData.quantity);
    const price = Number(formData.unitPrice);
    const discount = Number(formData.discountApplied || 0);
    const tax = Number(formData.taxApplied || 0);

    const subtotal = qty * price;
    const discountAmount = (subtotal * discount) / 100;
    const taxAmount = (subtotal * tax) / 100;
    const finalTotal = subtotal - discountAmount + taxAmount;

    return {
      ...formData,
      quantity: qty,
      unitPrice: price,
      discountApplied: discount,
      taxApplied: tax,
      subtotal,
      discountAmount,
      taxAmount,
      finalTotal,
    };
  };

  const handlePush = () => {
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    const calculatedProduct = calculateProduct();
    setProducts((prev) => [...prev, calculatedProduct]);
    console.log('product add hoa')
    // Reset form
    setFormData({
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
  };

  // const handleNext = () => {
  //   if (products.length === 0) {
  //     alert("Please add at least one product");
  //     return;
  //   }
  //   nextStep();
  // };

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
              <option value="">Select Category</option>
              <option value="electronics">Electronics</option>
              <option value="appliances">Appliances</option>
              <option value="furniture">Furniture</option>
              <option value="clothing">Clothing</option>
              <option value="fashion-accessories">Fashion Accessories</option>
              <option value="mobile-accessories">Mobile Accessories</option>
              <option value="computer-hardware">Computer Hardware</option>
              <option value="office-supplies">Office Supplies</option>
              <option value="tools">Tools</option>
              <option value="machinery">Machinery</option>
              <option value="automotive">Automotive</option>
              <option value="construction-materials">Construction Materials</option>
              <option value="home-decor">Home Decor</option>
              <option value="kitchenware">Kitchenware</option>
              <option value="beauty-products">Beauty Products</option>
              <option value="healthcare">Healthcare</option>
              <option value="software">Software</option>
              <option value="services">Services</option>
              <option value="custom-item">Custom Item</option>
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
              <option value="">Select Unit Measure</option>
              <option value="piece">Piece</option>
              <option value="box">Box</option>
              <option value="carton">Carton</option>
              <option value="packet">Packet</option>
              <option value="set">Set</option>
              <option value="pair">Pair</option>

              <option value="kg">Kilogram (kg)</option>
              <option value="g">Gram (g)</option>
              <option value="mg">Milligram (mg)</option>

              <option value="liter">Liter (L)</option>
              <option value="ml">Milliliter (mL)</option>

              <option value="meter">Meter (m)</option>
              <option value="cm">Centimeter (cm)</option>
              <option value="mm">Millimeter (mm)</option>
              <option value="foot">Foot (ft)</option>
              <option value="inch">Inch (in)</option>

              <option value="roll">Roll</option>
              <option value="bundle">Bundle</option>
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
              type="number"
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
              type="number"
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
            type="number"
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
            className="flex w-full justify-center items-center py-2 gap-1 rounded-lg bg-gray-900 text-white"
            onClick={handlePush}
          >
            <IoMdAdd className="text-2xl" /> Add Product
          </button>
        </div>
        <div className="flex gap-4 pt-2">
          <button
            type="button"
            className="flex-1 py-2 rounded-lg bg-gray-900 text-white"
            onClick={(e) => handlePrevious(e, "prev")}
          >
            Back
          </button>
          <button
            type="button"
            onClick={(e) => handleNext(e, "next")}
            className="flex-1 py-2 rounded-lg bg-gray-900 text-white"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
