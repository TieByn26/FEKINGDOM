import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import * as Yup from 'yup';
import { toast } from "react-toastify";
import { ErrorMessage, Field, Form, Formik } from "formik";
import AuthService from "../../services/AuthService";

const validationSchema = Yup.object().shape({
    username: Yup.string()
        .required('Username is required'),
    password: Yup.string().required('Password is required')
});

let count = 3;

export function Login() {
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [sessionTimeout, setSessionTimeout] = useState(60000);

    useEffect(() => {
        document.title = "Login";
        const maxAttemptsExceeded = sessionStorage.getItem('maxAttemptsExceeded');
        if (maxAttemptsExceeded) {
            setError('You have exceeded the maximum number of attempts, please wait for 1 minute.');
            setTimeout(() => {
                sessionStorage.removeItem('maxAttemptsExceeded');
                count = 3; // Reset the counter
                setError(''); // Clear the error message
            }, sessionTimeout);
        } else {
            setError('');
        }
    }, [sessionTimeout]);

    const handleSubmit = async (values) => {
        setLoading(true);
        if (sessionStorage.getItem('maxAttemptsExceeded')) {
            setError('You have exceeded the maximum number of attempts, please wait for 1 minute ');
            setLoading(false);
            return;
        }
        if (count === 0) {
            setError('You have exceeded the maximum number of attempts, please wait for 1 minute ');
            setLoading(false);
            sessionStorage.setItem('maxAttemptsExceeded', 'true');
            // Set a timer to clear the session after 1 hour (3600000 milliseconds)

            setTimeout(() => {
                sessionStorage.removeItem('maxAttemptsExceeded');
                count = 3;
                setError(''); // Clear the error message
            }, sessionTimeout);

            return;
        }
        try {
            const userData = await AuthService.login(values.username, values.password);
            if (userData.token) {
                localStorage.setItem('token', userData.token);
                localStorage.setItem('role', userData.roles.name);
                localStorage.setItem('username', values.username);
                navigate('/user/profile');
                toast("Login successfully", {
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
            } else {
                count--;
                setError('Invalid username or password , ' + count + ' attempts left');
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
        <>
            <div className="bg-full" style={{
                background: "url(https://firebasestorage.googleapis.com/v0/b/ryukingdom-48b31.appspot.com/o/HotelHeader.png?alt=media&token=96226faf-f43b-4302-9408-7b6ad8654963) center  / cover, var(--bs-border-color-translucent)",
                borderColor: "var(--bs-emphasis-color)"
            }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-9 col-lg-12 col-xl-10 align-items-center"
                             style={{ transform: "scale(1.17)", margin: "160px" }}>
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
                                            <div className="text-dark mt-3">
                                                <Link to={"/"} className="text-dark mb-4">Go back</Link>
                                            </div>
                                            <div className="p-5 mb-2">
                                                <Formik initialValues={{ username: '', password: '' }} onSubmit={handleSubmit} validationSchema={validationSchema}>
                                                    {({ values }) => (
                                                        <Form>
                                                            <div className="mb-3">
                                                                <Field
                                                                    className="form-control form-control-user" type="text"
                                                                    id="username" aria-describedby="username"
                                                                    placeholder="Enter Username..." name="username" />
                                                            </div>
                                                            <ErrorMessage name="username" component="div" className="error-message" />

                                                            <div className="mb-3">
                                                                <Field
                                                                    className="form-control form-control-user" type="password"
                                                                    id="exampleInputPassword" placeholder="Password"
                                                                    name="password" />
                                                            </div>
                                                            <ErrorMessage name="password" component="div" className="error-message" />

                                                            <div className="mb-3">
                                                                <div className="custom-checkbox small">
                                                                    <div className="form-check">
                                                                        <input className="form-check-input" type="checkbox" id="formCheck-1" style={{ borderColor: "var(--bs-emphasis-color)" }} />
                                                                        <label className="form-check-label" htmlFor="formCheck-1">Remember Me</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <button className="btn d-block btn-user w-100 btn-info"
                                                                type="submit" style={{
                                                                    color: "rgb(255,255,255)",
                                                                    background: "var(--bs-emphasis-color)",
                                                                    borderColor: "var(--bs-btn-hover-color)"
                                                                }} disabled={!values.username || !values.password || loading}>
                                                                {loading ? 'Loading...' : 'Login'}
                                                            </button>
                                                        </Form>
                                                    )}
                                                </Formik>
                                                {error && <p className="error-message">{error}</p>}
                                            </div>
                                            <p className="d-block w-100 mb-3">
                                                Don't have account? <Link to={"/register"} style={{ color: "rgb(0,0,0)", borderColor: "var(--bs-btn-hover-color)" }}>Register</Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
