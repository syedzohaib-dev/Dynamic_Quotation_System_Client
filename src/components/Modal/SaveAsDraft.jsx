import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa6";
import { BsBrowserChrome } from "react-icons/bs";


const SaveAsDraft = ({ isOpen, onClose, onSave }) => {
    const [fileName, setFileName] = useState('');
    const [fileType, setFileType] = useState('pdf');

    const handleSave = () => {
        if (fileName.trim()) {
            onSave(fileName, fileType);
            setFileName('');
            setFileType('pdf');
            onClose();
        }
    };

    const handleCancel = () => {
        setFileName('');
        setFileType('pdf');
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/80 bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-xl w-full md:w-[800px]">
                {/* Header */}
                <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-2">
                    <img src="/images/Logo.png" className='w-10 h-12' alt="" />
                    <h3 className="text-lg font-semibold border-2 text-blue-500 px-4 border-blue-500 rounded-full">
                        Save As
                    </h3>
                </div>

                {/* Content */}
                <div className="px-6 py-4 space-y-4">
                    {/* New Folder + Browser */}
                    <div className="flex gap-2 w-full">
                        <button className="flex w-[130px] h-[130px] justify-center items-center flex-col px-2 py-8 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                            <span> <FaPlus className='w-8 h-8 text-black' /></span> New Folder
                        </button>
                        <button className="flex w-[130px] h-[130px] justify-center items-center flex-col px-2 py-8 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                            <span> <BsBrowserChrome className='w-8 h-8 text-black' /></span> Browser
                        </button>
                    </div>

                    {/* File Name */}
                    <div className='w-full flex gap-2 items-center justify-between'>
                        <label className="block text-sm font-medium text-gray-700 mb-1 min-w-20">
                            File Name:
                        </label>
                        <select
                            type="file"
                            value={fileName}
                            onChange={(e) => setFileName(e.target.value)}
                            placeholder="Enter file name"
                            className="w-[600px] px-3 py-2 border border-gray-300 rounded-lg  hover:border-blue-400  outline-none"
                        >
                            <option value="">Excel</option>
                            <option value="">Download</option>
                            <option value="">Picture</option>
                        </select>
                    </div>

                    {/* Save as type */}
                    <div className='w-full flex gap-2 items-center justify-between'>
                        <label className="block text-sm font-medium text-gray-700 mb-1 min-w-30">
                            Save as type:
                        </label>
                        <select
                            value={fileType}
                            onChange={(e) => setFileType(e.target.value)}
                            className="w-[600px] px-3 py-2 border border-gray-300 rounded-lg outline-none hover:border-blue-400"
                        >
                            <option value="pdf">PDF</option>
                            <option value="jpg">JPG</option>
                            <option value="png">PNG</option>
                            <option value="doc">DOC</option>
                            <option value="txt">TXT</option>
                        </select>
                    </div>
                </div>

                {/* Footer */}
                <div className="px-6 py-4 border-t border-gray-200 flex justify-end gap-3">

                    <button
                        onClick={handleSave}
                        className="px-8 py-2 bg-black text-white text-sm font-medium rounded-lg  transition-colors"
                    >
                        Save
                    </button>

                    <button
                        onClick={handleCancel}
                        className="px-8 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                    >
                        Cancel
                    </button>

                </div>
            </div>
        </div>
    );
};

export default SaveAsDraft;