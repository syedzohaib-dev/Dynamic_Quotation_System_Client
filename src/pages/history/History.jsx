import React from 'react';
import { FaClipboardList } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { MdAccessTime } from "react-icons/md";
import { RiFileCloseLine } from "react-icons/ri";
import { useQuotation } from '../../context/QuotationContext.jsx';
import InvoiceModal from '../../components/Modal/invoiceModal.jsx';
import { useState } from 'react';





const History = () => {
    const { singleQuotation } = useQuotation();
    const { getQuotationById } = useQuotation()
    const [openInvoice, setOpenInvoice] = useState(false);
    const handleOpenInvoice = (id) => {
        setOpenInvoice(true);
        getQuotationById(id)
    };

    const handleClose = () => {
        setOpenInvoice(false);
    };

    const { quotations } = useQuotation()


    // Status badge component
    const StatusBadge = ({ status }) => {
        const getStatusConfig = () => {
            switch (status) {
                case 'Approved':
                    return {
                        color: 'bg-green-100 text-green-800',
                        width: 'min-w-[80px] max-w-[80px]'
                    };
                case 'Pending':
                    return {
                        color: 'bg-yellow-100 text-yellow-800',
                        width: 'min-w-[80px] max-w-[80px]'
                    };
                case 'Reject':
                    return {
                        color: 'bg-red-100 text-red-800',
                        width: 'min-w-[80px] max-w-[80px]'
                    };
                default:
                    return {
                        color: 'bg-gray-100 text-gray-800',
                        width: 'min-w-[80px] max-w-[80px]'
                    };
            }
        };

        const config = getStatusConfig();

        return (
            <span className={`inline-flex items-center justify-center ${config.width} px-3 py-1 rounded-full text-xs font-medium ${config.color}`}>
                {status}
            </span>
        );
    };

    return (
        <>
            <InvoiceModal isOpen={openInvoice} onClose={handleClose} data={singleQuotation} />
            <div className="min-h-screen bg-white p-6">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}


                    {/* Statistics Cards */}
                    <div className="w-full flex flex-wrap justify-center gap-6 mb-8">
                        {/* Total Quotation */}
                        <div className="bg-white rounded-2xl shadow-sm border min-w-50 w-70 border-gray-200 p-6">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                    <span className="text-blue-600 text-lg"><FaClipboardList /></span>
                                </div>
                                <span className="text-gray-600 text-[1.2rem] font-bold">Total Quotation</span>
                            </div>
                            <div className="text-3xl font-bold text-gray-900 mb-2">12</div>
                            <div className="text-gray-500 text-sm">All your quotations</div>
                        </div>

                        {/* Approved */}
                        <div className="bg-white rounded-2xl shadow-sm border min-w-50 w-70 border-gray-200 p-6">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                    <span className="text-green-600 text-lg"><TiTick /></span>
                                </div>
                                <span className="text-gray-600 text-[1.2rem] font-bold">Total Quotation</span>
                            </div>
                            <div className="flex items-end justify-between">
                                <div>
                                    <div className="text-3xl font-bold text-gray-900 mb-2">25%</div>
                                    <div className="text-gray-500 text-sm">Successfully approved</div>
                                </div>
                            </div>
                        </div>

                        {/* Pending */}
                        <div className="bg-white rounded-2xl shadow-sm border min-w-50 w-70 border-gray-200 p-6">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                                    <span className="text-red-600 text-lg"><MdAccessTime /></span>
                                </div>
                                <span className="text-gray-600 text-[1.2rem] font-bold">Total Quotation</span>
                            </div>
                            <div className="text-3xl font-bold text-gray-900 mb-2">08</div>
                            <div className="text-gray-500 text-sm">Waiting for review</div>
                        </div>

                        {/* Reject */}
                        <div className="bg-white rounded-2xl shadow-sm border min-w-50 w-70 border-gray-200 p-6">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                                    <span className="text-red-600 text-lg"><RiFileCloseLine /></span>
                                </div>
                                <span className="text-gray-600 text-[1.2rem] font-bold">Total Quotation</span>
                            </div>
                            <div className="text-3xl font-bold text-gray-900 mb-2">02</div>
                            <div className="text-gray-500 text-sm">Declined quotations</div>
                        </div>
                    </div>

                    {/* Table Section */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-auto">
                        {/* Table Container with Scroll */}
                        <div className="">
                            <table className="w-full min-w-[400px]">
                                {/* Table Header */}
                                <thead className="bg-gray-50 border-b border-gray-200">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-xs font-bold text-black uppercase tracking-wider">
                                            Invoice ID
                                        </th>
                                        <th className="px-6 py-4 text-left text-xs font-bold text-black uppercase tracking-wider">
                                            Customer Name
                                        </th>
                                        <th className="px-6 py-4 text-left text-xs font-bold text-black uppercase tracking-wider">
                                            Company Name
                                        </th>
                                        <th className="px-6 py-4 text-left text-xs font-bold text-black uppercase tracking-wider">
                                            Date
                                        </th>
                                        <th className="px-6 py-4 text-left text-xs font-bold text-black uppercase tracking-wider">
                                            Grand Total
                                        </th>
                                        <th className="px-6 py-4 text-left text-xs font-bold text-black uppercase tracking-wider">
                                            Status
                                        </th>
                                        <th className="px-6 py-4 text-left text-xs font-bold text-black uppercase tracking-wider">
                                            View
                                        </th>
                                        <th className="px-6 py-4 text-left text-xs font-bold text-black uppercase tracking-wider">
                                            Edit
                                        </th>
                                    </tr>
                                </thead>

                                {/* Table Body */}
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {quotations.map((item, index) => (
                                        <tr key={index} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm font-medium text-gray-900">{item?.orderSources?.invoiceNumber}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">{item?.customerDetails?.customerName}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">{item?.customerDetails?.companyName}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">{item?.orderSources?.orderDate}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">{item?.priceSummary?.grandTotal}</div>
                                            </td>
                                            <td className="px-4 py-4 whitespace-nowrap">
                                                <StatusBadge status={item.status} />
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <button onClick={() => handleOpenInvoice(item._id)} className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors">
                                                    View Invoice
                                                </button>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <button className="text-green-600 hover:text-green-800 text-sm font-medium transition-colors">
                                                    Edit File
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default History;