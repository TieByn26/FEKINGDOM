import { useState, useEffect } from "react";
import PaymentService from "../../services/PaymentService";
import { PaymentCard } from "@/components/card/payment-card";
import { ButtonPagination } from "@/components/panigation/button-pagination";

export function PaymentList() {
    const [payments, setPayments] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    useEffect(() => {
        fetchPayments();
    }, []);

    const fetchPayments = async () => {
        try {
            const data = await PaymentService.getPaymentList(localStorage.getItem("token"));
            setPayments(data);
        } catch (error) {
            console.error("Failed to fetch Payments:", error);
        }
    };

    const handleSearch = async (event) => {
        try {
            const searchTerm = event.target.value;
            if (searchTerm === "") {
                fetchPayments();
                setCurrentPage(1); // Reset về trang đầu tiên
                return;
            }
            const data = await PaymentService.searchPaymentList(localStorage.getItem("token"), searchTerm);
            setPayments(data);
            setCurrentPage(1); // Reset về trang đầu tiên
        } catch (error) {
            console.error("Failed to search Payments:", error);
        }
    };

    // Tính toán các sản phẩm hiển thị trên trang hiện tại
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = payments.slice(startIndex, startIndex + itemsPerPage);

    const handleNext = () => {
        if (currentPage < Math.ceil(payments.length / itemsPerPage)) {
            setCurrentPage((prev) => prev + 1);
        }
    };

    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage((prev) => prev - 1);
        }
    };

    return (
        <div>
            <div className="row justify-content-center" style={{ margin: "30px 0 30px 0" }}>
                <div className="col-xl-10 col-xxl-12">
                    <div className="card shadow">
                        <div className="card-header d-flex flex-wrap justify-content-center align-items-center justify-content-sm-between gap-3" style={{ background: "#171821" }}>
                            <h5 className="display-6 text-nowrap text-capitalize mb-0" style={{ color: "#c1931f" }}>All Payments&nbsp;</h5>
                            <div className="input-group input-group-sm w-auto flex gap-2">
                                <input
                                    className="form-control form-control-sm"
                                    type="text"
                                    style={{ background: "#fff" }}
                                    onChange={handleSearch}
                                />
                                <button className="btn btn-sm btn-outline-light" type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-search mb-1" style={{ color: "rgb(255,255,255)" }}>
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="card-body" style={{ background: "#171821" }}>
                            <div className="table-responsive flex flex-col items-center gap-2 pt-[30px] pb-[30px]">
                                {currentItems.length > 0 ? (
                                    currentItems.map((payment, index) => (
                                        <PaymentCard key={index} props={payment} />
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="8" className="text-center">Empty</td>
                                    </tr>
                                )}
                            </div>
                        </div>
                        <div className="card-footer" style={{ background: "#171821" }}>
                            <ButtonPagination
                                currentPage={currentPage}
                                totalPage={Math.ceil(payments.length / itemsPerPage)}
                                onNext={handleNext}
                                onPrev={handlePrev}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
