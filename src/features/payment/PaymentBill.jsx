import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PaymentService from "../../services/PaymentService";
import "../../assets/css/bill.css";
import html2pdf from "html2pdf.js";
import { useOverlay } from "@/components/overlay/use-overlay";

export const PaymentBill = (idBill) => {
    const {dismiss} = useOverlay();
    const [payment, setPayment] = useState(null);
    const id = idBill.idBill;
    const navigate = useNavigate();

    useEffect(() => {
        fetchPayment();
    }, []);

    const fetchPayment = async () => {
        try {
            const response = await PaymentService.getPayment(localStorage.getItem('token'), id);
            setPayment(response);
        } catch (error) {
            console.log(error);
        }
    };

    if (!payment) {
        return <div>Loading...</div>;
    }
    const printPDF = () => {
        html2pdf(document.querySelector(".bill-body"), {
            margin: 1,
            filename: `bill-${payment.customerName}.pdf`,
            image: { type: 'webp', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        });
    };

    return (
        <div className="bill-container w-[600px] max-h-[700px] overflow-y-auto bg-white shadow-md rounded-lg p-4">
            <div className="bill-header">
                <h1 className="text-lg font-bold">Bill for {payment.customerName}</h1>
                <p className="text-sm text-gray-600">Date: {new Date(payment.historyDate).toLocaleDateString()}</p>
            </div>
            <div className="bill-body">
                <table className="bill-table w-full text-sm text-left text-gray-600">
                    <thead>
                        <tr>
                            <th colSpan={2} className="text-center py-2 text-lg font-semibold">
                                Bill for {payment.customerName}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className="space-y-2">
                                    <div>Title: {payment.title}</div>
                                    <div>Customer Name: {payment.customerName}</div>
                                    <div>Date: {new Date(payment.historyDate).toLocaleString()}</div>
                                    <div>Check by: {payment.employeeName}</div>
                                    <div>Status: {payment.status}</div>
                                </div>
                            </td>
                            <td>
                                <img
                                    className="w-[300px] h-[400px] object-cover"
                                    alt="bank"
                                    src="https://res.cloudinary.com/dhsv9jnul/image/upload/v1734043658/bank_nbrv7c.jpg"
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="bill-footer flex justify-center mt-4 gap-2">
                <button
                    className="bg-yellow-400 text-white px-4 py-2 rounded hover:bg-yellow-500 transition"
                    onClick={() => printPDF()}
                >
                    Print PDF
                </button>
                <button
                    className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition"
                    onClick={() => dismiss()}
                >
                    cancel
                </button>
            </div>
        </div>

    );
}