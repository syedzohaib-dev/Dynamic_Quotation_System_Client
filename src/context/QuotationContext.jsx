import { createContext, useContext, useState } from "react";
import axios from "axios";
import { API_PATHS, BASE_URL } from "../utils/apiPath.js";
import { useEffect } from "react";

export const QuotationContext = createContext();

export const QuotationProvider = ({ children }) => {
    const [quotations, setQuotations] = useState([]);
    const [singleQuotation, setSingleQuotation] = useState(null);
    const [loading, setLoading] = useState(false);

    const token = localStorage.getItem("token");

    const getQuotations = async () => {
        try {
            setLoading(true);

            const res = await axios.get(
                `${BASE_URL}${API_PATHS.QUOTATION.GET_ALL}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            setQuotations(res.data.data);
            console.log('login user quotation data', res?.data?.data)
        } catch (error) {
            console.error("Failed to fetch quotations:", error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        getQuotations()
    }, [])

    // ===========================
    //  GET SINGLE QUOTATION
    // ===========================
    // const getQuotationById = async (id) => {
    //     try {
    //         setLoading(true);

    //         const res = await axios.get(
    //             `http://localhost:3000/api/v1/quotation/${id}`,
    //             {
    //                 headers: {
    //                     Authorization: `Bearer ${token}`,
    //                 },
    //             }
    //         );

    //         // setSingleQuotation(res.data.data);
    //     } catch (error) {
    //         console.error("Failed to fetch single quotation:", error);
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    // ===========================
    // EXPORT CONTEXT VALUE
    // ===========================
    return (
        <QuotationContext.Provider
            value={{
                quotations,
                singleQuotation,
                loading,
                getQuotations,
                // getQuotationById,
            }}
        >
            {children}
        </QuotationContext.Provider>
    );
};

// Helper hook
export const useQuotation = () => useContext(QuotationContext);
