import React from "react";
import { MdDownload } from "react-icons/md";
import { useQuotation } from "../../context/QuotationContext";


const InvoiceModal = ({ isOpen, onClose }) => {
    const { quotations } = useQuotation();
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/60 flex py-20 justify-center items-center z-50">
            <div className="rounded-lg md:h-[720px] md:w-[40%] shadow-lg overflow-auto hide-scrollbar w-full h-[680px]">
                <div className="w-50 bg-white rounded-md p-3 mb-5  flex justify-center gap-2 items-center  absolute top-2 right-3 text-gray-600">
                    <button

                        className="text-1xl border  flex justify-center items-center gap-1 rounded-md px-5 py-1  bg-black text-white"
                    >
                        <MdDownload /> Download
                    </button>

                    <button
                        onClick={onClose}
                        className="txt-1xl border-2 px-2 text-black hover:text-red-500 font-bold rounded-full"
                    >
                        x
                    </button>
                </div>

                <div className="bg-gray-100 p-8 py-8 md:p-10  font-sans" style={{ backgroundColor: 'var(--color-gray-50)' }}>

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
                            <p><strong>Date Issued :</strong> 2025-11-22</p>
                            <p><strong>Due Date :</strong> 2025-11-24</p>
                            <p>98987</p>
                        </div>

                        <div className="text-right space-y-1">
                            <p><strong>Ali</strong></p>
                            <p>muhammadali@gmail.com</p>
                            <p>Peshawar</p>
                            <p>98987</p>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="border-b border-blue-300 my-5"></div>

                    {/* Project Description */}
                    <div>
                        <p className="font-semibold">Project Description : </p>
                        <p className="text-sm mt-1">
                            fragile item be careful
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
                                <tr>
                                    <td className="py-2">1</td>
                                    <td className="py-2">eplazyme</td>
                                    <td className="py-2">1500</td>
                                    <td className="py-2">140</td>
                                    <td className="py-2">2%</td>
                                    <td className="py-2">1%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Totals */}
                    <div className="flex justify-end mt-6">
                        <div className="text-right text-sm space-y-1">
                            <p><strong>Subtotal</strong> &nbsp; 210000</p>
                            <p><strong>Discount Applied</strong> &nbsp; 4200</p>
                            <p><strong>Tax Applied</strong> &nbsp; 2100</p>
                            <p className="font-bold text-lg mt-1">
                                Grand Total &nbsp; 207900
                            </p>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="border-b border-blue-300 my-5"></div>

                    {/* Terms */}
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



            </div>
        </div>
    );
};

export default InvoiceModal;
