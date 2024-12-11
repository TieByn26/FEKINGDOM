import { Link, useNavigate } from "react-router-dom";
import { Form, Formik, Field, ErrorMessage } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import AuthService from "../../services/AuthService";
import { toast } from "react-toastify";

const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required').min(6, 'Username must be at least 6 characters').matches(/^[a-zA-Z0-9]*$/, 'Username must be characters'),
    password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
    fullName: Yup.string().required('Full name is required').matches(/^[a-zA-Z\s]*$/, 'Full name must be characters'),
    dob: Yup.date().required('Date of Birth is required').max(new Date(new Date().setFullYear(new Date().getFullYear() - 16)), 'You must be at least 16 years old'),
    idCard: Yup.string().required('ID Card is required').min(9, 'ID Card must be at least 9 characters'),
    gender: Yup.string().required('Gender is required'),
    phoneNumber: Yup.string().required('Phone Number is required').min(10, 'Phone Number must be at least 10 characters'),
    email: Yup.string().email('Invalid email format').required('Email is required').matches(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/, 'Invalid email format'),
    address: Yup.string().required('Address is required').matches(/^[a-zA-Z0-9\s]*$/, 'Address must be characters'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required')
});

export function Register() {
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Register for Customer";
    }, []);

    const handleSubmit = async (values) => {
        setLoading(true);
        try {
            const userData = await AuthService.register(values.username, values.password, values.email, values.fullName, values.dob, values.idCard, values.address, values.phoneNumber, values.gender);
            if (userData) {
                const userDataLogin = await AuthService.login(values.username, values.password);
                localStorage.setItem('token', userDataLogin.token);
                localStorage.setItem('role', userDataLogin.roles.name);
                localStorage.setItem('username', values.username);

                navigate('/user/profile');
                toast("Register successfully", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'dark',
                    style: {
                        backgroundColor: '#000000',
                        color: 'rgba(237,167,0,0.98)',
                        fontWeight: 'bold',
                        fontSize: '16px'
                    }
                });
            }
        } catch (error) {
            console.error(error);
            setError(error.message);
        } finally {
            setTimeout(() => {
                setLoading(false);
            }, 3000);
        }
    };

    return (
        <div className="bg-gradient-primary" style={{
            background: "url(https://firebasestorage.googleapis.com/v0/b/ryukingdom-48b31.appspot.com/o/HotelHeader.png?alt=media&token=96226faf-f43b-4302-9408-7b6ad8654963) center / cover no-repeat, var(--bs-border-color-translucent)",
            borderColor: "var(--bs-emphasis-color)"
        }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-9 col-lg-12 col-xl-10 align-items-center" style={{ transform: "scale(1.17)", margin: "160px" }}>
                        <div className="card shadow-lg o-hidden border-0 my-5" style={{ borderRadius: "29.6px" }}>
                            <div className="card-body p-0">
                                <div className="row">
                                    <div className="col-lg-6 d-none d-lg-flex">
                                        <div className="flex-grow-1 bg-login-image" style={{
                                            background: "url(https://firebasestorage.googleapis.com/v0/b/ryukingdom-48b31.appspot.com/o/HotelLogo.png?alt=media&token=62a1a8f1-9149-47ce-a2ca-454b40d26c2e) center",
                                            opacity: "0.86"
                                        }}></div>
                                    </div>
                                    <div className="col-lg-6" style={{ background: "var(--bs-body-bg)" }}>
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h4 className="text-dark mb-4">Welcome To Ryu!</h4>
                                            </div>
                                            <Formik
                                                initialValues={{
                                                    username: '',
                                                    password: '',
                                                    fullName: '',
                                                    dob: '',
                                                    idCard: '',
                                                    gender: '',
                                                    phoneNumber: '',
                                                    email: '',
                                                    address: '',
                                                    confirmPassword: ''
                                                }}
                                                validationSchema={validationSchema}
                                                onSubmit={handleSubmit}
                                            >
                                                {({ values }) => (
                                                    <Form className="user">
                                                        <div className="mb-3">
                                                            <div className="row">
                                                                <div className="col">
                                                                    <div className="mb-3">
                                                                        <Field
                                                                            className="form-control form-control-user"
                                                                            type="text"
                                                                            id="exampleInputUsername"
                                                                            placeholder="Username"
                                                                            name="username"
                                                                        />
                                                                        <ErrorMessage name="username" component="div" className="error-message" />
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="mb-3">
                                                                        <Field
                                                                            className="form-control form-control-user"
                                                                            type="date"
                                                                            id="exampleInputDob"
                                                                            placeholder="Dob"
                                                                            name="dob"
                                                                        />
                                                                        <ErrorMessage name="dob" component="div" className="error-message" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="mb-3">
                                                            <div className="btn-group" role="group" aria-label="Basic radio toggle button group" style={{
                                                                width: "200px",
                                                                height: "45.6px",
                                                                margin: "0 0 0 px"
                                                            }}>
                                                                <Field type="radio" id="btnradio1" className="btn-check" name="gender" value="1" />
                                                                <label className="form-label btn btn-outline-dark" htmlFor="btnradio1" style={{ width: "102px" }}>Male</label>
                                                                <Field type="radio" id="btnradio2" className="btn-check" name="gender" value="2" />
                                                                <label className="form-label btn btn-outline-dark" htmlFor="btnradio2" style={{ width: "102px" }}>Female</label>
                                                                <ErrorMessage name="gender" component="div" className="error-message" />
                                                            </div>
                                                        </div>
                                                        <div className="mb-3">
                                                            <Field
                                                                className="form-control form-control-user"
                                                                type="text"
                                                                id="exampleInputFullName-1"
                                                                placeholder="Full name"
                                                                name="fullName"
                                                            />
                                                            <ErrorMessage name="fullName" component="div" className="error-message" />
                                                        </div>
                                                        <div className="mb-3">
                                                            <Field
                                                                className="form-control form-control-user"
                                                                type="text"
                                                                id="exampleInputPhoneNumber-1"
                                                                placeholder="Phone number"
                                                                name="phoneNumber"
                                                            />
                                                            <ErrorMessage name="phoneNumber" component="div" className="error-message" />
                                                        </div>
                                                        <div className="mb-3">
                                                            <Field
                                                                className="form-control form-control-user"
                                                                type="text"
                                                                id="exampleInputIdCard"
                                                                placeholder="ID card"
                                                                name="idCard"
                                                            />
                                                            <ErrorMessage name="idCard" component="div" className="error-message" />
                                                        </div>
                                                        <div className="mb-3">
                                                            <Field
                                                                className="form-control form-control-user"
                                                                type="text"
                                                                id="exampleInputAddress"
                                                                placeholder="Address"
                                                                name="address"
                                                            />
                                                            <ErrorMessage name="address" component="div" className="error-message" />
                                                        </div>
                                                        <div className="mb-3">
                                                            <Field
                                                                className="form-control form-control-user"
                                                                type="email"
                                                                id="exampleInputEmail"
                                                                placeholder="***@gmail.com"
                                                                name="email"
                                                            />
                                                            <ErrorMessage name="email" component="div" className="error-message" />
                                                        </div>
                                                        <div className="mb-3">
                                                            <Field
                                                                className="form-control form-control-user"
                                                                type="password"
                                                                id="exampleInputPassword-1"
                                                                placeholder="Password"
                                                                name="password"
                                                            />
                                                            <ErrorMessage name="password" component="div" className="error-message" />
                                                        </div>
                                                        <div className="mb-3">
                                                            <Field
                                                                className="form-control form-control-user"
                                                                type="password"
                                                                id="exampleInputConfirm"
                                                                placeholder="Confirm password"
                                                                name="confirmPassword"
                                                            />
                                                            <ErrorMessage name="confirmPassword" component="div" className="error-message" />
                                                        </div>
                                                        <button className="btn d-block btn-user w-100 btn-info"
                                                                type="submit" style={{
                                                            color: "rgb(255,255,255)",
                                                            background: "var(--bs-emphasis-color)",
                                                            borderColor: "var(--bs-btn-hover-color)"
                                                        }} disabled={!values.username || !values.password || loading}>
                                                            {loading ? 'Loading...' : 'Register'}
                                                        </button>
                                                    </Form>
                                                )}
                                            </Formik>
                                        </div>
                                        <p className="d-block w-100 mb-3">You have an account? -> <Link to={"/login"} style={{
                                            color: "rgb(0,0,0)",
                                            borderColor: "var(--bs-btn-hover-color)"
                                        }}>Login</Link></p>
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
