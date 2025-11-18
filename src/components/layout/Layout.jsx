import React, { useState } from 'react';
import Header from '../common/Header.jsx';
import Sidebar from '../common/Sidebar.jsx';

const Layout = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    return (
        <div className="flex h-screen bg-gray-50">
            {/* Sidebar - Full height from top to bottom */}
            <Sidebar open={sidebarOpen} />

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-w-0">
                {/* Header - Compact, sidebar ke right mein */}
                <Header setSidebarOpen={setSidebarOpen} />

                {/* Main Content */}
                <main className="flex-1 overflow-auto p-6">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default Layout;