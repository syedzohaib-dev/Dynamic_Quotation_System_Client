import React from 'react'
import { FaUsers } from 'react-icons/fa6'
import { IoMdCheckmark } from 'react-icons/io'
import { RxCross1 } from "react-icons/rx";
import { AiOutlineNumber } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";
import { CiShare2 } from "react-icons/ci";




const Dashboard = () => {

    const usersData = [
        {
            id: 1,
            clientName: 'zohaib',
            date: 'Jan.02.2022',
            total: '230',
            status: ['Send'],
        },
        {
            id: 2,
            clientName: 'zohaib',
            date: 'Jan.02.2022',
            total: '230',
            status: ['Send'],
        },
        {
            id: 3,
            clientName: 'zohaib',
            date: 'Jan.02.2022',
            total: '230',
            status: ['Send'],
        },
        {
            id: 4,
            clientName: 'zohaib',
            date: 'Jan.02.2022',
            total: '230',
            status: ['Pending'],
        },


    ];


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
                                <span className="text-blue-600 text-lg"><FaUsers /></span>
                            </div>
                            <span className="text-gray-600 text-[1.2rem] font-bold">Total Clients</span>
                        </div>
                        <div className="text-3xl font-bold text-gray-900 mb-2">00</div>
                        <div className="text-gray-500 text-sm w-full flex gap-2">
                            <span className='text-blue-400 bg-gray-100 rounded-md px-1 font-semibold'>+0%</span>
                            vs last week
                        </div>
                    </div>

                    {/* Approved */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                <span className="text-green-600 text-lg"><IoMdCheckmark /></span>
                            </div>
                            <span className="text-gray-600 text-[1.2rem] font-bold">Approved Quotation</span>
                        </div>
                        <div className="flex items-end justify-between">
                            <div>
                                <div className="text-3xl font-bold text-gray-900 mb-2">00</div>
                                <div className="text-gray-500 text-sm w-full flex gap-2">
                                    <span className='text-green-400 bg-gray-100 rounded-md px-1 font-semibold'>+0%</span>
                                    vs last week
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Pending */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                                <span className="text-red-600 text-lg"><RxCross1 /></span>
                            </div>
                            <span className="text-gray-600 text-[1.2rem] font-bold">Reject Quotation</span>
                        </div>
                        <div className="text-3xl font-bold text-gray-900 mb-2">00</div>
                        <div className="text-gray-500 text-sm w-full flex gap-2">
                            <span className='text-red-400 bg-gray-100 rounded-md px-1 font-semibold'>+0%</span>
                            vs last week
                        </div>
                    </div>

                    {/* Reject */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                                <span className="text-green-600 text-lg"><AiOutlineNumber /></span>
                            </div>
                            <span className="text-gray-600 text-[1.2rem] font-bold">Total Value</span>
                        </div>
                        <div className="text-3xl font-bold text-gray-900 mb-2">$00</div>
                        <div className="text-gray-500 text-sm w-full flex gap-2">
                            <span className='text-green-400 bg-gray-100 rounded-md px-1 font-semibold'>+0%</span>
                            vs last week
                        </div>
                    </div>
                </div>

                {/* Table Section */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 ">
                    {/* Table Container with Scroll */}
                    <div className="w-full flex ">

                    </div>
                </div>
            </div>


            <div className="overflow-x-auto" >
                <table className="w-full">
                    {/* Table Header */}
                    <thead className="bg-gray-50 border-b border-gray-200 rounded-ms">
                        <tr>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">
                                #
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">
                                Clients Name
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider flex items-center gap-1">
                                Date
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">
                                Total Amount
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">
                                Status
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">
                                Action
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">
                                View All
                            </th>
                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody className="bg-white divide-y divide-gray-200 ">
                        {usersData.map((user) => (
                            <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                                {/* User Info Column */}
                                <td className="px-6 py-2">
                                    <div className="text-sm font-medium text-gray-900">{user.id}</div>
                                </td>
                                <td className="px-6 py-2">
                                    <div className="text-sm font-medium text-gray-900">{user.clientName}</div>
                                </td>
                                <td className="px-6 py-2">
                                    <div className="text-sm font-medium text-gray-900">{user.date}</div>
                                </td>
                                <td className="px-6 py-2">
                                    <div className="text-sm font-medium text-gray-900">{user.total}</div>
                                </td>

                                {/* Access Column */}
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex  gap-1">
                                        {user.status.map((statusItem, index) => (

                                            <span
                                                key={index}
                                                className={`inline-flex min-w-20 items-center px-3 py-1 rounded-full text-xs font-medium border 
                            ${statusItem === 'Send' ? 'bg-green-200 border-green-500' :
                                                        'bg-red-200 border-red-500'} text-gray-800`}
                                            >
                                                {statusItem}
                                            </span>
                                        ))}
                                    </div>
                                </td>

                                {/* 3 buttons */}
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900 flex ">
                                        <button type="button" className='w-6 h-6 flex justify-center items-center text-green-600 text-lg'><CiEdit /></button>
                                        <button type="button" className='w-6 h-6 flex justify-center items-center text-red-600 text-lg'><RiDeleteBin5Line /></button>
                                        <button type="button" className='w-6 h-6 flex justify-center items-center text-blue-600 text-lg'><CiShare2 /></button>
                                    </div>
                                </td>

                                {/* Date Added Column */}
                                <td className="px-6 py-4 whitespace-nowrap">side
                                    <div className="text-sm text-gray-900"></div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>



        </div>
    )
}

export default Dashboard