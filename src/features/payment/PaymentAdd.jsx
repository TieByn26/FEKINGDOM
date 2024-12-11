import React, {useEffect, useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import * as Yup from "yup";
import CustomerService from "../../services/CustomerService";
import PaymentService from "../../services/PaymentService";

const PaymentSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    employeeName: Yup.string().required('Employee Name is required'),
    customerName: Yup.string().required('Customer Name is required'),
    deposit: Yup.number().required('Deposit is required').min(0, 'Deposit must be a non-negative number'),
    historyDate: Yup.date().required('History Date is required'),
    status: Yup.string().required('Status is required')
});

export function PaymentAdd() {
    const [customers, setCustomers] = useState([]);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        document.title = "Add payment";
        fetchCustomer();
    }, []);

    const fetchCustomer = async () => {
        try {
            const response = await CustomerService.getCustomerList(localStorage.getItem('token'));
            setCustomers(response);
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmitPayment = async (values) => {
        setLoading(true);
        console.log(values);
        try {
            await PaymentService.createPayment(values, localStorage.getItem('token'));
            navigate('/user/payment');
            toast.success("Added successfully", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark',
                style: {
                    backgroundColor: '#000000', color: 'rgba(237,167,0,0.98)', fontWeight: 'bold', fontSize: '16px'
                }
            });
        } catch (error) {
            console.log(error);
            setError(error.message);
        } finally {
            setTimeout(() => {
                setLoading(false);
            }, 3000);
        }
    };

    return (<div>
            <div className="row justify-content-center" style={{margin: "30px 0 30px 0"}}>
                <div className="col-xl-10 col-xxl-12">
                    <div className="card shadow">
                        <div
                            className="card-header d-flex flex-wrap justify-content-center align-items-center justify-content-sm-between gap-3"
                            style={{background: "#171821"}}>
                            <h5 className="display-6 text-nowrap text-capitalize mb-0" style={{color: "#c1931f"}}>Add
                                Payment&nbsp;</h5>
                        </div>
                        <div className="card-body" style={{background: "#171821"}}>
                            <Formik
                                initialValues={{
                                    title: '',
                                    employeeName: localStorage.getItem("username")||'',
                                    customerName: '',
                                    deposit: '',
                                    historyDate: '',
                                    status: ''
                                }}
                                validationSchema={PaymentSchema}
                                onSubmit={handleSubmitPayment}
                            >
                                {({isSubmitting, setFieldValue}) => (<Form>
                                        <div className="mb-3">
                                            <Field type="text" name="title" className="form-control cp"
                                                   placeholder="Title"/>
                                            <ErrorMessage name="title" component="div" className="error-message"/>
                                        </div>
                                        <div className="mb-3">
                                            <Field type="text" name="employeeName" className="form-control cp"
                                                   disabled={true}
                                                   placeholder="Employee Name"/>
                                            <ErrorMessage name="employeeName" component="div"
                                                          className="error-message"/>
                                        </div>
                                        <div className="mb-3">
                                            <Field as="select" name="customerName" className="form-control cp">
                                                <option value="" label="Select Customer"/>
                                                {customers.map((customer) => (
                                                    <option key={customer.id} value={customer.name}
                                                            label={customer.name}/>))}
                                            </Field>
                                            <ErrorMessage name="customerName" component="div"
                                                          className="error-message"/>
                                        </div>
                                        <div className="mb-3">
                                            <Field type="number" name="deposit" className="form-control cp"
                                                   placeholder="deposit"/>
                                            <ErrorMessage name="deposit" component="div" className="error-message"/>
                                        </div>
                                        <div className="mb-3">
                                            <Field
                                                type="date"
                                                name="historyDate"
                                                className="form-control cp"
                                                placeholder="History Date"
                                            />
                                            <ErrorMessage name="historyDate" component="div" className="error-message"/>
                                        </div>
                                        <div className="mb-3">
                                            <Field as="select" name="status" className="form-control cp">
                                                <option value="" label="Select status"/>
                                                <option value="pending" label="Pending"/>
                                                <option value="done" label="Done"/>
                                            </Field>
                                            <ErrorMessage name="status" component="div" className="error-message"/>
                                        </div>
                                        <button type="submit" className="btn btn-primary text-dark"
                                                disabled={isSubmitting}>
                                            Submit
                                        </button>
                                    </Form>)}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}