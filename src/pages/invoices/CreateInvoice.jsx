import React, { useState } from 'react'
import { PiEyeClosed } from "react-icons/pi";
import { IoSaveOutline } from "react-icons/io5";
import { BsSend } from "react-icons/bs";
import CustomerDetails from '../../components/steps/CustomerDetails.jsx';
import OrderSources from '../../components/steps/OrderSources.jsx';
import AddProduct from '../../components/steps/AddProduct.jsx';
import InvoicePreview from '../../components/invoices/InvoicePreview.jsx';
import PriceSummary from '../../components/steps/PriceSummary.jsx';
import SaveAsDraft from '../../components/Modal/SaveAsDraft.jsx';
import SendInvoice from '../../components/Modal/SendInvoice.jsx';

const CreateInvoice = () => {
    const [activeTab, setActiveTab] = useState('Customer Details');
    const [isSaveModalOpen, setIsSaveModalOpen] = useState(false)
    const [isSendModalOpen, setIsSendModalOpen] = useState(false);


    const handleSaveDraft = () => {
        setIsSaveModalOpen(true);
    };

    const handleSaveFile = (fileName, fileType) => {
        console.log('Saving file:', { fileName, fileType });
        // Add your save logic here
        alert(`File saved as: ${fileName}.${fileType}`);
    };

    const handleCloseModal = () => {
        setIsSaveModalOpen(false);
    };




    const handleSendInvoice = (email) => {
        setIsSendModalOpen(true)
        console.log('Sending invoice to:', email);
    };
    const tabs = [
        'Customer Details',
        'Order Sources',
        'Add Products',
        'Price Summary'
    ];
    const currentIndex = tabs.indexOf(activeTab);



    const handlePrevious = () => {
        if (currentIndex > 0) {
            setActiveTab(tabs[currentIndex - 1]);
        }
    };

    const handleNext = () => {
        if (currentIndex < tabs.length - 1) {
            setActiveTab(tabs[currentIndex + 1]);
        }
    };

    return (
        <>
            {/* Save As Modal */}
            <SaveAsDraft
                isOpen={isSaveModalOpen}
                onClose={handleCloseModal}
                onSave={handleSaveFile}
            />

            {/* Send Invoice Modal */}
            <SendInvoice
                isOpen={isSendModalOpen}
                onClose={() => setIsSendModalOpen(false)}
                onSend={handleSendInvoice}
            />
            <div className="w-full h-full overflow-y-auto bg-white"> {/* ⭐ UPDATED */}

                {/* Header Section */}
                <div className="w-full min-h-[60px] flex flex-col sm:flex-row items-center justify-between p-4 bg-white">
                    <div className="mb-3 sm:mb-0">
                        <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900">New Invoice</p>
                    </div>

                    <div className="w-full sm:w-auto flex flex-wrap gap-2 justify-center sm:justify-end">
                        <button className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg text-sm hover:bg-gray-200 transition">
                            <PiEyeClosed className='w-4 h-4' />
                            <span className="hidden sm:inline">Hide Preview</span>
                            <span className="sm:hidden">Preview</span>
                        </button>

                        <button className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg text-sm hover:bg-gray-200 transition">
                            <IoSaveOutline className='w-4 h-4' />
                            <span className="hidden sm:inline" onClick={handleSaveDraft}>Save as Draft</span>
                            <span className="sm:hidden">Draft</span>
                        </button>

                        <button onClick={handleSendInvoice} className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition">
                            <BsSend className='w-4 h-4' />
                            <span className="hidden sm:inline">Send Invoice</span>
                            <span className="sm:hidden">Send</span>
                        </button>
                    </div>
                </div>

                {/* ⭐ UPDATED RESPONSIVE LAYOUT FIX */}
                <div className="flex-1 flex flex-col lg:flex-row gap-4 p-4 overflow-hidden">

                    {/* Left - Form Section */}
                    <div className="w-full lg:w-1/2 flex flex-col  rounded-lg shadow-sm 
                    md:h-[580px] overflow-hidden" style={{ backgroundColor: 'var(--color-gray-50)' }}>

                        <div className="flex overflow-x-auto hide-scrollbar p-3  min-h-[60px]">
                            <div className="flex gap-2 min-w-max">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`px-4 py-2 text-sm rounded-full min-w-[140px] transition-all ${activeTab === tab
                                            ? 'bg-blue-100 text-blue-700 border-blue-500 font-medium'
                                            : 'text-gray-600 border-gray-300 hover:bg-gray-50'
                                            }`}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="flex-1 overflow-x-scroll hide-scrollbar">
                            {activeTab === 'Customer Details' && <CustomerDetails handlePrevious={handlePrevious} handleNext={handleNext} />}
                            {activeTab === "Order Sources" && <OrderSources handlePrevious={handlePrevious} handleNext={handleNext} />}
                            {activeTab === "Add Products" && <AddProduct handlePrevious={handlePrevious} handleNext={handleNext} />}
                            {activeTab === "Price Summary" && <PriceSummary handlePrevious={handlePrevious} handleNext={handleNext} />}
                        </div>
                    </div>

                    {/* Right - Invoice Preview */}
                    <div className="w-full lg:w-1/2 rounded-lg shadow-sm 
                    md:h-[580px] overflow-x-scroll hide-scrollbar" style={{ backgroundColor: 'var(--color-gray-50)' }}>
                        <InvoicePreview />

                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateInvoice;
