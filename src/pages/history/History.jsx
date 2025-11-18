import React from 'react';
import { FaClipboardList } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { MdAccessTime } from "react-icons/md";
import { RiFileCloseLine } from "react-icons/ri";





const History = () => {
    // Sample data for the table
    const quotationData = [
        { id: 'Q - 125', date: '12 Nov 2025', amount: '200,000', status: 'Approved' },
        { id: 'Q - 124', date: '08 Nov 2025', amount: '150,000', status: 'Approved' },
        { id: 'Q - 123', date: '02 Nov 2025', amount: '350,000', status: 'Pending' },
        { id: 'Q - 122', date: '28 Oct 2025', amount: '50,000', status: 'Approved' },
        { id: 'Q - 121', date: '25 Oct 2025', amount: '145,000', status: 'Pending' },
        { id: 'Q - 120', date: '23 Oct 2025', amount: '245,000', status: 'Approved' },
        { id: 'Q - 119', date: '20 Oct 2025', amount: '195,000', status: 'Pending' },
        { id: 'Q - 119', date: '20 Oct 2025', amount: '195,000', status: 'Pending' },
        { id: 'Q - 119', date: '20 Oct 2025', amount: '195,000', status: 'Pending' },
        { id: 'Q - 119', date: '20 Oct 2025', amount: '195,000', status: 'Pending' },
    ];

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
        <div className="min-h-screen bg-white p-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}


                {/* Statistics Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    {/* Total Quotation */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
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
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
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
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
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
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
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
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200">
                    {/* Table Container with Scroll */}
                    <div className="">
                        <table className="w-full min-w-[400px]">
                            {/* Table Header */}
                            <thead className="bg-gray-50 border-b border-gray-200">
                                <tr>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-black uppercase tracking-wider">
                                        Quotation ID
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-black uppercase tracking-wider">
                                        Date
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-black uppercase tracking-wider">
                                        Amount
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-black uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-black uppercase tracking-wider">
                                        Action
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-black uppercase tracking-wider">
                                        Edit
                                    </th>
                                </tr>
                            </thead>

                            {/* Table Body */}
                            <tbody className="bg-white divide-y divide-gray-200">
                                {quotationData.map((item, index) => (
                                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm font-medium text-gray-900">{item.id}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{item.date}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">${item.amount}</div>
                                        </td>
                                        <td className="px-4 py-4 whitespace-nowrap">
                                            <StatusBadge status={item.status} />
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors">
                                                View File
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
    );
};

export default History;