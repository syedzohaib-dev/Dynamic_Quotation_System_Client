import React, { useRef } from "react";
import { MdDownload } from "react-icons/md";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const InvoiceModal = ({ isOpen, onClose, data }) => {
    const pdfRef = useRef();

    if (!isOpen || !data) return null;

    const customer = data.customerDetails;
    const order = data.orderSources;
    const products = data.products;
    const price = data.priceSummary;

    const downloadPDF = async () => {
        const element = pdfRef.current;

        const canvas = await html2canvas(element, { scale: 2, useCORS: true });
        const imgData = canvas.toDataURL("image/png");

        const pdf = new jsPDF("p", "mm", "a4");
        const pdfWidth = pdf.internal.pageSize.getWidth();

        const imgProps = pdf.getImageProperties(imgData);
        const imgHeight = (imgProps.height * pdfWidth) / imgProps.width;

        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, imgHeight);
        pdf.save(order?.invoiceNumber + ".pdf");
    };

    return (
        <div
            className="fixed inset-0 flex py-20 justify-center items-center z-50"
            style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
            <div
                className="rounded-lg md:h-[720px] min-w-[600px] md:w-[40%] shadow-lg overflow-auto hide-scrollbar w-full h-[680px]"
                style={{ backgroundColor: "#ffffff" }}
            >

                {/* BUTTONS */}
                <div
                    className="absolute top-2 right-3 flex gap-2 items-center"
                    style={{ backgroundColor: "#ffffff", padding: "12px", borderRadius: "8px" }}
                >
                    <button
                        onClick={downloadPDF}
                        className="flex justify-center items-center gap-1 rounded-md px-5 py-1 text-white"
                        style={{ backgroundColor: "#000" }}
                    >
                        <MdDownload /> Download
                    </button>

                    <button
                        onClick={onClose}
                        className="font-bold rounded-full px-2"
                        style={{ color: "#000" }}
                    >
                        x
                    </button>
                </div>

                {/* INVOICE BODY */}
                <div
                    ref={pdfRef}
                    className="p-8 py-8 md:p-10 font-sans"
                    style={{ backgroundColor: "#f9fafb" }}   // replaced gray-50
                >

                    {/* Header */}
                    <div className="flex justify-between items-start">
                        <img src="/images/Logo.png" alt="logo" className="w-13 h-15" />

                        <div className="text-right text-sm leading-5" style={{ color: "#374151" }}>
                            <p>19th Street, Mckinney Walker</p>
                            <p>Jaddah</p>
                            <p>+1-0281-856-6521</p>
                        </div>
                    </div>

                    {/* Invoice Info */}
                    <div className="grid grid-cols-2 mt-6 text-sm">
                        <div className="space-y-1" style={{ color: "#1f2937" }}>
                            <p><strong>Invoice Number :</strong> {order?.invoiceNumber}</p>
                            <p><strong>Date Issued :</strong> {order?.issueDate}</p>
                            <p><strong>Due Date :</strong> {order?.dueDate}</p>
                            <p>{customer?.postalCode}</p>
                        </div>

                        <div className="text-right space-y-1" style={{ color: "#1f2937" }}>
                            <p><strong>{customer?.customerName}</strong></p>
                            <p>{customer?.email}</p>
                            <p>{customer?.city}</p>
                            <p>{customer?.postalCode}</p>
                        </div>
                    </div>

                    {/* Divider */}
                    <div style={{ borderBottom: "2px solid #93c5fd", margin: "20px 0" }}></div>

                    {/* Project Description */}
                    <div>
                        <p className="font-semibold" style={{ color: "#111827" }}>Project Description :</p>
                        <p className="text-sm mt-1" style={{ color: "#4b5563" }}>
                            {customer?.specialNote}
                        </p>
                    </div>

                    {/* Product Table */}
                    <div className="mt-5">
                        <p className="font-semibold" style={{ color: "#111827" }}>Product Details</p>

                        <table className="w-full text-sm mt-3 border-collapse"  style={{ backgroundColor: "#ffffff" }}>
                            <thead className="w-full" style={{ backgroundColor: "#ffffff" }}>
                                <tr style={{ backgroundColor: "#c0dbff", color: "#374151" }}>
                                    <th className="py-2 rounded-full">S.no</th>
                                    <th className="py-2 rounded-full">Product Name</th>
                                    <th className="py-2 rounded-full">Quantity</th>
                                    <th className="py-2 rounded-full">Unit Price</th>
                                    <th className="py-2 rounded-full">Discount %</th>
                                    <th className="py-2 rounded-full">Tax %</th>
                                </tr>
                            </thead>

                            <tbody className="text-center">
                                {products?.map((p, index) => (
                                    <tr key={index} style={{ color: "#1f2937" }}>
                                        <td className="py-2">{index + 1}</td>
                                        <td className="py-2">{p.productName}</td>
                                        <td className="py-2">{p.quantity}</td>
                                        <td className="py-2">{p.unitPrice}</td>
                                        <td className="py-2">{p.discountApplied}%</td>
                                        <td className="py-2">{p.taxApplied}%</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Totals */}
                    <div className="flex justify-end mt-6">
                        <div className="text-right text-sm space-y-1" style={{ color: "#111827" }}>
                            <p><strong>Subtotal</strong> &nbsp; {price?.subTotal}</p>
                            <p><strong>Discount Applied</strong> &nbsp; {price?.totalDiscountApplied}</p>
                            <p><strong>Tax Applied</strong> &nbsp; {price?.totalTaxApplied}</p>
                            <p className="font-bold text-lg mt-1">
                                Grand Total &nbsp; {price?.grandTotal}
                            </p>
                        </div>
                    </div>

                    {/* Divider */}
                    <div style={{ borderBottom: "2px solid #93c5fd", margin: "20px 0" }}></div>

                    {/* Terms */}
                    <div className="text-sm" style={{ color: "#4b5563" }}>
                        <p className="font-semibold" style={{ color: "#111827" }}>Terms & Conditions :</p>
                        <p className="mt-1">
                            Above information is not an invoice and only an estimate of goods or services.
                        </p>

                        <p className="font-semibold mt-3" style={{ color: "#111827" }}>
                            Please Confirm Your Acceptance Of This Quote
                        </p>

                        <div className="mt-8 flex justify-end">
                            <div
                                className="text-center pt-2"
                                style={{
                                    borderTop: "1px solid #9ca3af",
                                    width: "240px",
                                    color: "#111827",
                                }}
                            >
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
