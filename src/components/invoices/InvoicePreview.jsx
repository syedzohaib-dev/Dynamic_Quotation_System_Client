import React from "react";

const InvoicePreview = () => {
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
          <p><strong>Invoice Number :</strong> INV-04568</p>
          <p><strong>Date Issued :</strong> Nov 01, 2025</p>
          <p><strong>Due Date :</strong> Nov 10, 2025</p>
          <p>07526</p>
        </div>

        <div className="text-right space-y-1">
          <p><strong>Thomas Shelby</strong></p>
          <p>thomasshelby@gmail.com</p>
          <p>Houston, Texas</p>
          <p>77002</p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-b border-blue-300 my-5"></div>

      {/* Project Description */}
      <div>
        <p className="font-semibold">Project Description :</p>
        <p className="text-sm mt-1">
          Add a brief and concise description of the project, item, or service here.
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
            {[
              ["01", "Gas torch", "60pcs", "40.00$", "6%", "2%"],
              ["02", "Scrapers", "45pcs", "25.00$", "8%", "2%"],
              ["03", "Sealant guns", "30pcs", "50.00$", "5%", "3%"],
              ["04", "Heat gun", "80pcs", "60.00$", "9%", "4%"],
              ["05", "Mixing paddles", "15pcs", "15.00$", "8%", "2%"],
            ].map((row, i) => (
              <tr key={i}>
                {row.map((col, idx) => (
                  <td key={idx} className=" py-2">{col}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Totals Section */}
      <div className="flex justify-end mt-6">
        <div className="text-right text-sm space-y-1">
          <p><strong>Subtotal</strong> &nbsp; 190.00$</p>
          <p><strong>Discount Applied</strong> &nbsp; 36%</p>
          <p><strong>Tax Applied</strong> &nbsp; 13%</p>
          <p className="font-bold text-lg mt-1">
            Grand Total &nbsp; 137.40$
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
