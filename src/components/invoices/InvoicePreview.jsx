import React from "react";

const InvoicePreview = ({
  customerDetails,
  orderDetails,
  products,
  priceSummary
}) => {
  return (
    <div className="w-full min-h-screen bg-white p-6 md:p-10 overflow-y-auto font-sans" style={{ backgroundColor: 'var(--color-gray-50)' }}>

      {/* Header */}
      <div className="flex justify-between items-start">
        <img
          src="/images/Logo.png"
          alt="logo"
          className="w-15 h-15 object-contain"
        />

        <div className="text-right text-sm leading-5">
          <p>19th Street, Mckinney Walker</p>
          <p>Jaddah</p>
          <p>+1-0281-856-6521</p>
        </div>
      </div>

      {/* Invoice Info */}
      <div className="grid grid-cols-2 mt-6 text-sm">
        <div className="space-y-1">
          <p><strong>Invoice Number :</strong> INV-34345</p>
          <p><strong>Date Issued :</strong> {orderDetails.issueDate || "---"}</p>
          <p><strong>Due Date :</strong> {orderDetails.dueDate || "---"}</p>
          <p>{customerDetails.postalCode || "---"}</p>
        </div>

        <div className="text-right space-y-1">
          <p><strong>{customerDetails.customerName || "Customer Name"}</strong></p>
          <p>{customerDetails.email || "---"}</p>
          <p>{customerDetails.city || "---"}</p>
          <p>{customerDetails.postalCode || "---"}</p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-b border-blue-300 my-5"></div>

      {/* Project Description */}
      <div>
        <p className="font-semibold">Project Description : </p>
        <p className="text-sm mt-1">
          {orderDetails.termsAndCondition || "No description added yet."}
        </p>
      </div>

      {/* Product Table */}
      <div className="mt-5">
        <p className="font-semibold">Product Details</p>

        <table className="w-full text-sm mt-3 border-collapse ">
          <thead>
            <tr className="text-center text-gray-600">
              <th className="py-2 rounded-full bg-blue-100">S.no</th>
              <th className="py-2 rounded-full bg-blue-100">Product Name</th>
              <th className="py-2 rounded-full bg-blue-100">Quantity</th>
              <th className="py-2 rounded-full bg-blue-100">Unit Price</th>
              <th className="py-2 rounded-full bg-blue-100">Discount %</th>
              <th className="py-2 rounded-full bg-blue-100">Tax %</th>
            </tr>
          </thead>

          <tbody className="text-center">
            {products.map((item, index) => (
              <tr key={index}>
                <td className="py-2">{index + 1}</td>
                <td className="py-2">{item.productName}</td>
                <td className="py-2">{item.quantity}</td>
                <td className="py-2">{item.unitPrice}</td>
                <td className="py-2">{item.discountApplied}%</td>
                <td className="py-2">{item.taxApplied}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Totals Section */}
      <div className="flex justify-end mt-6">
        <div className="text-right text-sm space-y-1">
          <p><strong>Subtotal</strong> &nbsp; {priceSummary.subTotal || 0}</p>
          <p><strong>Discount Applied</strong> &nbsp; {priceSummary.totalDiscountApplied || 0}</p>
          <p><strong>Tax Applied</strong> &nbsp; {priceSummary.totalTaxApplied || 0}</p>
          <p className="font-bold text-lg mt-1">
            Grand Total &nbsp; {priceSummary.grandTotal || 0}
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-b border-blue-300 my-5"></div>

      {/* Terms & Conditions */}
      <div className="text-sm">
        <p className="font-semibold">Terms & Conditions :</p>
        <p className="mt-1">
          Above information is not an invoice and only an estimate of goods or services.
          Payment will be due prior to provision or delivery of goods / services.
        </p>

        <p className="font-semibold mt-3">
          Please Confirm Your Acceptance Of This Quote
        </p>

        {/* Signature */}
        <div className="mt-8 w-full flex justify-end">
          <div className="border-t border-gray-400 w-60 text-center pt-2">
            Authorized Signature
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoicePreview;
