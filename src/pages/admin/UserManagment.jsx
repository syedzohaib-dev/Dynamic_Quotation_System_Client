import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { IoAdd } from "react-icons/io5";


const UserManagment = () => {

    const usersData = [
        {
            id: 1,
            name: 'Florence Shaw',
            email: 'florencesha@gmail.com',
            access: ['Data export', 'Data import'],
            lastActive: 'Jan.02.2023',
            dateAdded: 'Jan.02.2022'
        },
        {
            id: 2,
            name: 'Jhon Maverick Sins',
            email: 'jhonmaverick09@gmail.com',
            access: ['Data export', 'Data import'],
            lastActive: 'Feb.09.2023',
            dateAdded: 'Feb.09.2022'
        },
        {
            id: 3,
            name: 'Smith Jones',
            email: 'smithjones99@gmail.com',
            access: ['Data export', 'Data import'],
            lastActive: 'Feb.20.2023',
            dateAdded: 'Feb.20.2022'
        },
        {
            id: 4,
            name: 'Tremblay Morton Singh',
            email: 'tremblaymortonsingh@outlook.com',
            access: ['Data export', 'Data import'],
            lastActive: 'March.02.2024',
            dateAdded: 'March.02.2023'
        },
        {
            id: 5,
            name: 'Gagnon Martin',
            email: 'gagnonmartin@gmail.com',
            access: ['Data export', 'Data import'],
            lastActive: 'April.04.2024',
            dateAdded: 'April.04.2023'
        },
        {
            id: 6,
            name: 'Amelia Margaret',
            email: 'ameliamargaret@yahoo.com',
            access: ['Data export', 'Data import'],
            lastActive: 'July.18.2024',
            dateAdded: 'July.18.2023'
        },
        {
            id: 7,
            name: 'Evans O\'Ryan',
            email: 'evansoryan@outlook.com',
            access: ['Data export', 'Data import'],
            lastActive: 'Dec.30.2024',
            dateAdded: 'Dec.02.2023'
        },
        {
            id: 8,
            name: 'William Damian',
            email: 'williamdamian@gmail.com',
            access: ['Data export', 'Data import'],
            lastActive: 'Jan.02.2025',
            dateAdded: 'Jan.02.2024'
        },
        {
            id: 9,
            name: 'Isabella Victoria',
            email: 'isabellavictoria@gmail.com',
            access: ['Data export', 'Data import'],
            lastActive: 'Feb.17.2025',
            dateAdded: 'Feb.17.2024'
        },
        {
            id: 9,
            name: 'Isabella Victoria',
            email: 'isabellavictoria@gmail.com',
            access: ['Data export', 'Data import'],
            lastActive: 'Feb.17.2025',
            dateAdded: 'Feb.17.2024'
        },

        {
            id: 9,
            name: 'Isabella Victoria',
            email: 'isabellavictoria@gmail.com',
            access: ['Data export', 'Data import'],
            lastActive: 'Feb.17.2025',
            dateAdded: 'Feb.17.2024'
        },


        {
            id: 9,
            name: 'Isabella Victoria',
            email: 'isabellavictoria@gmail.com',
            access: ['Data export', 'Data import'],
            lastActive: 'Feb.17.2025',
            dateAdded: 'Feb.17.2024'
        },


        {
            id: 9,
            name: 'Isabella Victoria',
            email: 'isabellavictoria@gmail.com',
            access: ['Data export', 'Data import'],
            lastActive: 'Feb.17.2025',
            dateAdded: 'Feb.17.2024'
        },

        {
            id: 9,
            name: 'Isabella Victoria',
            email: 'isabellavictoria@gmail.com',
            access: ['Data export', 'Data import'],
            lastActive: 'Feb.17.2025',
            dateAdded: 'Feb.17.2024'
        },

        {
            id: 9,
            name: 'Isabella Victoria',
            email: 'isabellavictoria@gmail.com',
            access: ['Data export', 'Data import'],
            lastActive: 'Feb.17.2025',
            dateAdded: 'Feb.17.2024'
        },
    ];

    return (
        <>
            <div className="w-full">
                <div className="flex justify-between items-center w-full flex-col px-6 py-4 bg-white border-gray-200">
                    {/* Left Side - All Users with Count */}
                    <div className="min-w-30 flex items-center justify-center gap-2">
                        <p className="text-[1.2rem] font-bold text-gray-900">All Users</p>
                        <p className="text-gray-500 text-sm font-medium">
                            2000
                        </p>
                    </div>

                    {/* Right Side - Search Input with Icon */}
                    <div className="relative flex flex-col">
                        <div className="flex items-center gap-2">
                            <input
                                type="text"
                                placeholder="Search users..."
                                className="w-100 min-w-5 pl-10 pr-4 py-1 border border-gray-300 rounded-lg hover:border-blue-400 outline-none"
                            />
                            <button type="button" className='bg-black text-white w-30 h-8 rounded-md flex items-center justify-center'><IoAdd />Add User</button>
                            <FaSearch className="absolute left-3 text-gray-400" />
                        </div>
                    </div>
                </div>

                <div className="overflow-x-auto max-w-7xl mx-auto" >
                    <table className="w-full">
                        {/* Table Header */}
                        <thead className="bg-gray-50 border-b border-gray-200 rounded-ms">
                            <tr>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">
                                    User name
                                </th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">
                                    Access
                                </th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider flex items-center gap-1">
                                    Last active
                                    <span className="text-gray-400">↓</span>
                                </th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">
                                    Date added
                                </th>
                            </tr>
                        </thead>

                        {/* Table Body */}
                        <tbody className="bg-white divide-y divide-gray-200 ">
                            {usersData.map((user) => (
                                <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                                    {/* User Info Column */}
                                    <td className="px-6 py-2 whitespace-nowrap flex gap-2">
                                        <input type="checkbox" />
                                        <div className="min-w-8 h-8 flex justify-center items-center rounded-full border">
                                            <img
                                                src="/images/image.png"
                                                alt="Profile"
                                                className="w-8 h-8 rounded-ful"
                                            />
                                        </div>
                                        <div>

                                            <div className="text-sm font-medium text-gray-900">{user.name}</div>
                                            <div className="text-sm text-gray-500">{user.email}</div>
                                        </div>
                                    </td>

                                    {/* Access Column */}
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex  gap-1">
                                            {user.access.map((accessItem, index) => (

                                                <span
                                                    key={index}
                                                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border 
                                                         ${accessItem === 'Data export' ? 'bg-blue-200 border-blue-500' :
                                                            'bg-fuchsia-200 border-fuchsia-500'} text-gray-800`}
                                                >
                                                    {accessItem}
                                                </span>
                                            ))}
                                        </div>
                                    </td>

                                    {/* Last Active Column */}
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{user.lastActive}</div>
                                    </td>

                                    {/* Date Added Column */}
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{user.dateAdded}</div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>


            </div>
        </>
    )
}

export default UserManagment