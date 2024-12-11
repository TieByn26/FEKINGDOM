import React, {useEffect, useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useNavigate, useParams} from "react-router-dom";
import {toast} from "react-toastify";
import * as Yup from "yup";
import customerService from "../../services/CustomerService";
import facilityService from "../../services/FacilityService";
import paymentService from "../../services/PaymentService";
import contractService from "../../services/ContractService";


const ContractSchema = Yup.object().shape({
    customerName: Yup.string().required('Customer Name is required'),
    dateStart: Yup.date().required('Date start is required'),
    dateEnd: Yup.date().required('Date end is required').min(
        Yup.ref('dateStart'), 'Date end must be later than Date start'
    ),
    deposit: Yup.number().required('Deposit is required').min(0, 'Must be a non-negative number'),
    payment: Yup.string().required('Payment is required'),
    employeeName: Yup.string().required('Checked by is required'),
    facilityName: Yup.string().required('Facility is required'),
    status: Yup.string().required('Status is required')
});
export function ContractUpdate() {
    const [customers, setCustomers] = useState([]);
    const [facilities, setFacilities] = useState([]);
    const [payments, setPayments] = useState([]);
    const [contract, setContract] = useState([]);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const {id} = useParams();

    useEffect(() => {
        fetchCustomer();
        fetchPayment();
        fetchFacility()
        fetchContract();
    }, []);

    const fetchContract = async () => {
        try {
            const response = await contractService.fetchContractById(localStorage.getItem('token'),id);
            setContract(response);
        } catch (error) {
            console.log(error);
        }
    }
    const fetchFacility = async () => {
        try {
            const response = await facilityService.getFacilityList(localStorage.getItem('token'));
            setFacilities(response);
        } catch (error) {
            console.log(error);
        }
    }
    const fetchCustomer = async () => {
        try {
            const response = await customerService.getCustomerList(localStorage.getItem('token'));
            setCustomers(response);
        } catch (error) {
            console.log(error);
        }
    }

    const fetchPayment = async () => {
        try {
            const response = await paymentService.getPaymentList(localStorage.getItem('token'));
            setPayments(response);
        } catch (error) {
            console.log(error);
        }
    }


    const handleSubmitContract = async (values) => {
        setLoading(true);
        console.log(values);
        try {
            await contractService.updateContract(values, localStorage.getItem('token'),id);
            navigate('/user/contract');
            toast.success("Update successfully", {
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
                        <h5 className="display-6 text-nowrap text-capitalize mb-0" style={{color: "#c1931f"}}>Update
                            Contract&nbsp;</h5>
                    </div>
                    <div className="card-body" style={{background: "#171821"}}>
                        <Formik
                            initialValues={{
                                customerName: contract.customerName||'',
                                dateStart: contract.dateStart||'',
                                dateEnd: contract.dateEnd ||'',
                                deposit: contract.deposit ||'',
                                payment: contract.payment ||'',
                                employeeName: localStorage.getItem("username")||'',
                                facilityName: contract.facilityName ||'',
                                historyCheck: new Date().toISOString().split('T')[0], // Set current date
                                status: contract.status ||''
                            }}
                            enableReinitialize
                            validationSchema={ContractSchema}
                            onSubmit={handleSubmitContract}
                        >
                            {({isSubmitting}) => (<Form>
                                <div className="mb-3">
                                    <Field as="select" name="customerName" className="form-control cp">
                                        <option value="" label="Select Customer"/>
                                        {customers.map((customer) => (
                                            <option key={customer.id} value={customer.name}
                                                    label={customer.name}/>))}
                                    </Field>
                                    <ErrorMessage name="customerName" component="div" className="error-message"/>
                                </div>
                                <div className="mb-3">
                                    <Field type="date" name="dateStart" className="form-control cp"
                                           placeholder="Date start"/>
                                    <ErrorMessage name="dateStart" component="div" className="error-message"/>
                                </div>
                                <div className="mb-3">
                                    <Field type="date" name="dateEnd" className="form-control cp"
                                           placeholder="Date end"/>
                                    <ErrorMessage name="dateEnd" component="div" className="error-message"/>
                                </div>
                                <div className="mb-3">
                                    <Field type="number" name="deposit"  className="form-control cp"
                                           placeholder="Deposit"/>
                                    <ErrorMessage name="deposit" component="div" className="error-message"/>
                                </div>
                                <div className="mb-3">
                                    <Field as="select" name="payment" className="form-control cp">
                                        <option value="" label="Select payment"/>
                                        {payments.map((p) => (
                                            <option key={p.id} value={p.title}
                                                    label={p.title}/>))}
                                    </Field>
                                    <ErrorMessage name="payment" component="div" className="error-message"/>
                                </div>
                                <div className="mb-3">
                                    <Field type="text" name="employeeName" disabled className="form-control cp"
                                           placeholder="Checked by"/>
                                    <ErrorMessage name="employeeName" component="div" className="error-message"/>
                                </div>
                                <div className="mb-3">
                                    <Field as="select" name="facilityName" className="form-control cp">
                                        <option value="" label="Select Facility"/>
                                        {facilities.map((f) => (
                                            <option key={f.id} value={f.name}
                                                    label={f.name}/>))}
                                    </Field>
                                    <ErrorMessage name="facilityName" component="div" className="error-message"/>
                                </div>
                                <div className="mb-3">
                                    <Field as="select" name="status" className="form-control cp">
                                        <option value="" label="Select status"/>
                                        <option value="pending" label="Pending"/>
                                        <option value="done" label="Done"/>
                                    </Field>
                                    <ErrorMessage name="status" component="div" className="error-message"/>
                                </div>
                                <div className="mb-3">
                                    <Field type="date" name="historyCheck" disabled className="form-control cp" placeholder="History Check">
                                    </Field>
                                    <ErrorMessage name="historyCheck" component="div" className="error-message"/>
                                </div>
                                <button type="submit" className="btn btn-primary text-dark" disabled={isSubmitting}>
                                    Submit
                                </button>
                            </Form>)}
                        </Formik>

                    </div>
                </div>
            </div>
        </div>
    </div>)

}