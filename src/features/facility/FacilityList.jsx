import { useState, useEffect } from "react";
import { Field, Form, Formik } from "formik";
import FacilityService from "../../services/FacilityService";
import { FacilityCard } from "@/components/card";
import { ButtonPagination } from "@/components/panigation/button-pagination";

export function FacilityList() {
    const [facilities, setFacilities] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    useEffect(() => {
        fetchFacilities();
    }, []);

    const fetchFacilities = async () => {
        try {
            const data = await FacilityService.getFacilityList(localStorage.getItem("token"));
            setFacilities(data);
        } catch (error) {
            console.error("Failed to fetch Facilities:", error);
        }
    };

    const handleSearch = async (values) => {
        try {
            if (values.search === "") {
                fetchFacilities();
                setCurrentPage(1); // Reset về trang đầu tiên
                return;
            }
            const data = await FacilityService.searchFacilityList(localStorage.getItem("token"), values.search);
            setFacilities(data);
            setCurrentPage(1); // Reset về trang đầu tiên
        } catch (error) {
            console.error("Failed to search Facilities:", error);
        }
    };

    // Tính toán các sản phẩm hiển thị trên trang hiện tại
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = facilities.slice(startIndex, startIndex + itemsPerPage);

    const handleNext = () => {
        if (currentPage < Math.ceil(facilities.length / itemsPerPage)) {
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
                                All Facilities&nbsp;
                            </h5>
                            <div className="input-group input-group-sm w-auto">
                                <Formik
                                    initialValues={{ search: "" }}
                                    onSubmit={handleSearch}
                                >
                                    {() => (
                                        <Form className="d-flex gap-2">
                                            <Field
                                                className="form-control form-control-sm d-flex"
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
                            <div className="flex flex-col gap-2 items-center">
                                {currentItems.length > 0 ? (
                                    currentItems.map((facility, index) => (
                                        <FacilityCard key={index} props={facility} />
                                    ))
                                ) : (
                                    <p className="text-center text-white">No facilities found.</p>
                                )}
                            </div>
                        </div>
                        <div className="card-footer" style={{ background: "#171821" }}>
                            <ButtonPagination
                                currentPage={currentPage}
                                totalPage={Math.ceil(facilities.length / itemsPerPage)}
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
