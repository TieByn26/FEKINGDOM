import React, {useEffect, useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import * as Yup from "yup";
import FeedbackService from "../../services/FeedbackService";

const FeedbackSchema = Yup.object().shape({
    customerName: Yup.string()
        .required('Customer Name is required'),
    rating: Yup.number()
        .required('Rating is required').min(1, 'Rating must be at least 1').max(5, 'Rating must be at most 5'),
    description: Yup.string()
        .required('Description is required')
});

export function FeedbackAdd() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        document.title = "Add Feedback";
    }, []);

    const handleSubmitFeedback = async (values, { resetForm }) => {
        setLoading(true);
        try {
            await FeedbackService.addFeedback(values, localStorage.getItem('token'));
            navigate('/user/feedback');
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

    return (
        <div>
            <div className="row justify-content-center" style={{margin: "30px 0 30px 0"}}>
                <div className="col-xl-10 col-xxl-12">
                    <div className="card shadow">
                        <div
                            className="card-header d-flex flex-wrap justify-content-center align-items-center justify-content-sm-between gap-3"
                            style={{background: "#171821"}}>
                            <h5 className="display-6 text-nowrap text-capitalize mb-0" style={{color: "#c1931f"}}>Has
                                anything problem ? Please give us your
                                Feedback&nbsp;</h5>
                        </div>
                        <div className="card-body" style={{background: "#171821"}}>
                            <Formik
                                initialValues={{
                                    customerName: localStorage.getItem('username'), rating: '', description: ''
                                }}
                                validationSchema={FeedbackSchema}
                                onSubmit={handleSubmitFeedback}
                            >
                                {({isSubmitting, setFieldValue}) => (
                                    <Form>
                                        <div className="mb-3">
                                            <Field type="text" name="customerName" className="form-control cp"
                                                   disabled
                                                   placeholder="customerName" style={{background: "black"}}/>
                                            <ErrorMessage name="customerName" component="div" className="error-message"/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="rating-group" className="form-label text-light">Rating</label>
                                            <div role="group" aria-labelledby="rating-group">
                                                {[1, 2, 3, 4, 5].map((value) => (
                                                    <label key={value} className="form-check-label text-light">
                                                        <Field type="radio" name="rating" value={value.toString()}
                                                               className="form-check-input"/>
                                                        {value}
                                                    </label>))}
                                            </div>
                                            <ErrorMessage name="rating" component="div" className="error-message"/>
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
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}