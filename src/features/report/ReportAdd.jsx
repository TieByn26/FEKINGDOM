import React, {useEffect, useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import * as Yup from "yup";
import ReportService from "../../services/ReportService";

const ReportSchema = Yup.object().shape({
    employeeName: Yup.string()
        .required('Employee Name is required'),
    title: Yup.string()
        .required("Title is required"),
    date: Yup.string()
        .required("Date is required"),
    status: Yup.string()
        .required("Status is required"),
});

export function ReportAdd() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        document.title = "Add Feedback";
    }, []);


    const handleSubmitFeedback = async (values, { resetForm }) => {
        setLoading(true);
        console.log(values);
        try {
            await ReportService.addReport(values, localStorage.getItem('token'));
            navigate('/user/report');
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
            resetForm(); // Reset the form fields
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
                            <h5 className="display-6 text-nowrap text-capitalize mb-0" style={{color: "#c1931f"}}>Daily report for employees&nbsp;</h5>
                        </div>
                        <div className="card-body" style={{background: "#171821"}}>
                            <Formik
                                initialValues={{
                                    employeeName: localStorage.getItem('username'),
                                    title: '',
                                    date: '',
                                    status: '',
                                    description: ''
                                }}
                                validationSchema={ReportSchema}
                                onSubmit={handleSubmitFeedback}
                            >
                                {({isSubmitting, setFieldValue}) => (<Form>
                                        <div className="mb-3">
                                            <Field type="text" name="employeeName" className="form-control cp"
                                                   disabled
                                                   placeholder="employeeName" style={{background:"black"}}/>
                                            <ErrorMessage name="employeeName" component="div" className="error-message"/>
                                        </div>
                                        <div className="mb-3">
                                            <Field type="text" name="title" className="form-control cp"
                                                   placeholder="Title"/>
                                            <ErrorMessage name="title" component="div"
                                                          className="error-message"/>
                                        </div>
                                       <div className="mb-3">
                                        <Field type="date" name="date" className="form-control cp" placeholder="Date" />
                                        <ErrorMessage name="date" component="div" className="error-message" />
                                    </div>
                                    <div className="mb-3">
                                        <Field as="select" name="status" className="form-control cp">
                                            <option value="" label="Select status" />
                                            <option value="Issues" label="Issues" />
                                            <option value="Check" label="Check" />
                                        </Field>
                                        <ErrorMessage name="status" component="div" className="error-message" />
                                    </div>
                                    <div className="mb-3">
                                        <Field as="textarea" name="description" className="form-control cp"
                                               placeholder="description"/>
                                        <ErrorMessage name="description" component="div" className="error-message"/>
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