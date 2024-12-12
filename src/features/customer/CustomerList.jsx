import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import customerService from "../../services/CustomerService";
import { CustomerCard } from "@/components/card";
import { ButtonPagination } from "@/components/panigation/button-pagination";
import { Formik, Form, Field } from "formik";

export function CustomerList() {
    const [customers, setCustomers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const navigate = useNavigate();

    useEffect(() => {
        fetchCustomers();
    }, []);

    const fetchCustomers = async () => {
        try {
            const data = await customerService.getCustomerList(localStorage.getItem("token"));
            setCustomers(data);
        } catch (error) {
            console.error("Failed to fetch customers:", error);
        }
    };

    const handleSearch = async (values) => {
        try {
            if (values.search === "") {
                fetchCustomers();
                setCurrentPage(1); // Reset về trang đầu
                return;
            }
            const data = await customerService.searchCustomerList(localStorage.getItem("token"), values.search);
            setCustomers(data);
            setCurrentPage(1); // Reset về trang đầu
        } catch (error) {
            console.error("Failed to search customers:", error);
        }
    };

    // Tính toán các mục hiển thị trên trang hiện tại
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = customers.slice(startIndex, startIndex + itemsPerPage);

    const handleNext = () => {
        if (currentPage < Math.ceil(customers.length / itemsPerPage)) {
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
                        <div
                            className="card-header d-flex flex-wrap justify-content-center align-items-center justify-content-sm-between gap-3"
                            style={{ background: "#171821" }}
                        >
                            <h5 className="display-6 text-nowrap text-capitalize mb-0" style={{ color: "#c1931f" }}>
                                All Customers&nbsp;
                            </h5>
                            <div className="input-group input-group-sm w-auto">
                                <Formik
                                    initialValues={{ search: "" }}
                                    onSubmit={handleSearch}
                                >
                                    {() => (
                                        <Form className="d-flex gap-2">
                                            <Field
                                                className="form-control form-control-sm"
                                                type="text"
                                                name="search"
                                                style={{ background: "#fff", color: "rgb(0,0,0)" }}
                                            />
                                            <button className="btn btn-sm btn-outline-light" type="submit">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="1em"
                                                    height="1em"
                                                    fill="currentColor"
                                                    viewBox="0 0 16 16"
                                                    className="bi bi-search mb-1"
                                                    style={{ color: "rgb(255,255,255)" }}
                                                >
                                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"></path>
                                                </svg>
                                            </button>
                                        </Form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                        <div className="card-body" style={{ background: "#171821" }}>
                            <div className="table-responsive flex flex-col items-center gap-2 pb-3 pt-3">
                                {currentItems.length > 0 ? (
                                    currentItems.map((customer, index) => (
                                        <CustomerCard key={index} props={customer} />
                                    ))
                                ) : (
                                    <p className="text-center text-white">No customers found.</p>
                                )}
                            </div>
                        </div>
                        <div className="card-footer" style={{ background: "#171821" }}>
                            <ButtonPagination
                                currentPage={currentPage}
                                totalPage={Math.ceil(customers.length / itemsPerPage)}
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
