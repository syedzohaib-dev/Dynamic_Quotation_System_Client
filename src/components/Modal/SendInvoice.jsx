import React, { useState } from 'react';
import { FaFacebook, FaWhatsapp, FaTelegram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const SendInvoice = ({ isOpen, onClose, onSend }) => {
    const [email, setEmail] = useState('marinabudarina@gmail.com');

    const handleSend = () => {
        if (email.trim()) {
            onSend(email);
            onClose();
        }
    };

    const handleCancel = () => {
        setEmail('marinabudarina@gmail.com');
        onClose();
    };

    const handleShare = (platform) => {
        const shareText = `Check out my quotation: ${email}`;
        let shareUrl = '';

        switch (platform) {
            case 'facebook':
                shareUrl = `https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(email)}`;
                break;
            case 'whatsapp':
                shareUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
                break;
            case 'telegram':
                shareUrl = `https://t.me/share/url?url=${encodeURIComponent(email)}&text=${encodeURIComponent(shareText)}`;
                break;
            case 'linkedin':
                shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(email)}`;
                break;
            case 'twitter':
                shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;
                break;
            default:
                return;
        }

        window.open(shareUrl, '_blank');
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/80 bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-xl w-full md:w-[800px]">
                {/* Header */}
                {/* Header */}
                <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-2">
                    <img src="/images/Logo.png" className='w-10 h-12' alt="" />
                    <h3 className="text-lg font-semibold border-2 text-blue-500 px-4 border-blue-500 rounded-full">
                        Send Invoice
                    </h3>
                </div>
                {/* Main */}
                <div className="px-6 py-4 h-20 flex flex-col  border-gray-200 items-center gap-2">
                    <h1 className="text-2xl font-bold">
                        Share Your Quotation
                    </h1>
                    <p className="text-center text-gray-600">Trading is more effective when you connect with clients!</p>
                </div>

                {/* Content */}
                <div className="px-8 py-6 space-y-6">
                    {/* Share Link Section */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Share you link
                        </label>
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-gray-600 hover:border-blue-400 outline-none"
                                placeholder="Enter your email or link"
                            />
                            <button
                                onClick={() => navigator.clipboard.writeText(email)}
                                className="px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
                            >
                                Copy
                            </button>
                        </div>
                    </div>

                    {/* Share To Section */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-4">
                            Share to
                        </label>
                        <div className="flex justify-center gap-4">
                            {/* Facebook */}
                            <button
                                onClick={() => handleShare('facebook')}
                                className="flex flex-col items-center justify-center p-2"
                            >
                                <FaFacebook className="w-10 h-10 text-blue-600 mb-2" />
                                <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600">Facebook</span>
                            </button>

                            {/* WhatsApp */}
                            <button
                                onClick={() => handleShare('whatsapp')}
                                className="flex flex-col items-center justify-center p-2 "
                            >
                                <FaWhatsapp className="w-10 h-10 text-green-500 mb-2" />
                                <span className="text-sm font-medium text-gray-700 group-hover:text-green-600">Whatsapp</span>
                            </button>

                            {/* Telegram */}
                            <button
                                onClick={() => handleShare('telegram')}
                                className="flex flex-col items-center justify-center p-2"
                            >
                                <FaTelegram className="w-10 h-10 text-blue-400 mb-2" />
                                <span className="text-sm font-medium text-gray-700 group-hover:text-blue-500">Telegram</span>
                            </button>

                            {/* LinkedIn */}
                            <button
                                onClick={() => handleShare('linkedin')}
                                className="flex flex-col items-center justify-center p-2"
                            >
                                <FaLinkedin className="w-10 h-10 text-blue-700 mb-2" />
                                <span className="text-sm font-medium text-gray-700 group-hover:text-blue-800">LinkedIn</span>
                            </button>

                            {/* Twitter */}
                            <button
                                onClick={() => handleShare('twitter')}
                                className="flex flex-col items-center justify-center p-2"
                            >
                                <FaTwitter className="w-10 h-10 text-blue-400 mb-2" />
                                <span className="text-sm font-medium text-gray-700 group-hover:text-blue-500">Twitter</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="px-8 py-6 border-t border-gray-200 flex justify-end gap-3">
                    <button
                        onClick={handleCancel}
                        className="px-8 py-3 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSend}
                        className="px-8 py-3 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SendInvoice;