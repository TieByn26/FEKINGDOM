import React, {useEffect, useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {Link, useNavigate} from "react-router-dom";
import AuthService from "../../services/AuthService";
import {toast} from "react-toastify";

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    date: Yup.date().required('Date is required'),
    time: Yup.string().required('Time is required')
});

export function Book() {
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        document.title = "Book";

    }, []);
    const handleSubmit = async (values) => {
        setLoading(true);
        try {
            const userData = await AuthService.login(values.username, values.password);
            if (userData.token) {
                localStorage.setItem('token', userData.token);
                localStorage.setItem('role', userData.roles.name);
                navigate('/user/profile');
                toast.success("Login successfully", {
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
            }
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
        <div className="bg-gradient-primary" style={{
            background: "url(https://firebasestorage.googleapis.com/v0/b/ryukingdom-48b31.appspot.com/o/HotelHeader.png?alt=media&token=96226faf-f43b-4302-9408-7b6ad8654963) center  / cover, var(--bs-border-color-translucent)",
            borderColor: "var(--bs-emphasis-color)"
        }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-9 col-lg-12 col-xl-10 align-items-center"
                         style={{transform: "scale(1.17)", margin: "160px"}}>
                        <div className="card shadow-lg o-hidden border-0 my-5" style={{borderRadius: "29.6px"}}>
                            <div className="card-body p-0">
                                <div className="row">
                                    <div className="col-lg-6 d-none d-lg-flex">
                                        <div className="flex-grow-1 bg-login-image" style={{
                                            background: "url(https://firebasestorage.googleapis.com/v0/b/ryukingdom-48b31.appspot.com/o/HotelLogo.png?alt=media&token=62a1a8f1-9149-47ce-a2ca-454b40d26c2e) center",
                                            opacity: "0.86"
                                        }}></div>
                                    </div>
                                    <div className="col-lg-6" style={{background: "var(--bs-body-bg)"}}>
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h4 className="text-dark mb-4">Welcome Back!</h4>
                                            </div>
                                            <Formik initialValues={{
                                                username: '',
                                                password: ''}}
                                                    onSubmit={handleSubmit}
                                                    validationSchema={validationSchema}>
                                                {({ values }) => (

                                                    <Form>
                                                        <div className="mb-3">
                                                            <Field
                                                                className="form-control form-control-user" type="text"
                                                                id="username" aria-describedby="username"
                                                                placeholder="Enter Username..." name="username"/></div>
                                                        <ErrorMessage name="username" component="div" className="error-message" />

                                                        <div className="mb-3"><Field
                                                            className="form-control form-control-user" type="password"
                                                            id="exampleInputPassword" placeholder="Password"
                                                            name="password"/></div>
                                                        <ErrorMessage name="password" component="div" className="error-message" />

                                                        <div className="mb-3">
                                                            <div className="custom-checkbox small">
                                                                <div className="form-check"><input
                                                                    className="form-check-input" type="checkbox"
                                                                    id="formCheck-1"
                                                                    style={{borderColor: "var(--bs-emphasis-color)"}}/><label
                                                                    className="form-check-label" htmlFor="formCheck-1">Remember
                                                                    Me</label></div>
                                                            </div>
                                                        </div>
                                                        <button className="btn d-block btn-user w-100 btn-info"
                                                                type="submit" style={{
                                                            color: "rgb(255,255,255)",
                                                            background: "var(--bs-emphasis-color)",
                                                            borderColor: "var(--bs-btn-hover-color)"
                                                        }} disabled={!values.username || !values.password || loading}
                                                        >
                                                            {loading ? 'Loading...' : 'Login'}
                                                        </button>
                                                    </Form>)}
                                            </Formik>
                                            {error && <p className="error-message">{error}</p>}
                                        </div>
                                        <Link className="btn d-block btn-user w-100 btn-info mb-3" to={"/register"}
                                              style={{
                                                  color: "rgb(255,255,255)",
                                                  background: "var(--bs-emphasis-color)",
                                                  borderColor: "var(--bs-btn-hover-color)"
                                              }}>Register</Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}