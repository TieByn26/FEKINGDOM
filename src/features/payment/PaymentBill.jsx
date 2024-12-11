import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PaymentService from "../../services/PaymentService";
import "../../assets/css/bill.css";
import html2pdf from "html2pdf.js";

export function PaymentBill() {
    const [payment, setPayment] = useState(null);
    const { id } = useParams();
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
        <div className="bill-container">
            <div className="bill-header">
                <h1>Bill for {payment.customerName}</h1>
                <p>Date: {new Date(payment.historyDate).toLocaleDateString()}</p>
            </div>
            <div className="bill-body">
                <table className="bill-table" style={{border : 0}}>
                    <thead>
                        <tr>
                            <th colSpan={2} style={{textAlign : "center"}}>
                                <h1>Bill for {payment.customerName}</h1>
                                <p>Date: {new Date(payment.historyDate).toLocaleDateString()}</p>
                                <h1>Total : {payment.deposit}</h1>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            <tr>
                                <td>Title : {payment.title}</td>
                            </tr>
                            <tr>
                                <td>Customer Name : {payment.customerName}</td>
                            </tr>
                            <tr>
                                <td>Date : {new Date(payment.historyDate).toLocaleString()}</td>
                            </tr>
                            <tr>
                                <td>Check by : {payment.employeeName}</td>
                            </tr>
                            <tr>
                                <td>Status : {payment.status}</td>
                            </tr>
                        </td>
                        <td>
                             <img width={300} height={400} alt={"bank"} src={"https://firebasestorage.googleapis.com/v0/b/ryukingdom-48b31.appspot.com/o/tpBank.jpg?alt=media&token=b99c941d-1b56-4a4a-ba1e-8a4a425ea483"}/>
                        </td>
                    </tr>

                    </tbody>
                </table>
            </div>
            <div className="bill-footer">
                <button style={{backgroundColor : "var(--bs-yellow)"}} className="m-2" onClick={() => printPDF()}>Print PDF</button>
                <button onClick={() => navigate('/user/payment')}>Back to Payments</button>
            </div>
        </div>
    );
}