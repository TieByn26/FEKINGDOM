import React, {useEffect, useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import * as Yup from "yup";
import employeeService from "../../services/EmployeeService";


export function EmployeeAdd() {
    const [division, setDivision] = useState([]);
    const [position, setPosition] = useState([]);
    const [degree, setDegree] = useState([]);
    const [roles, setRoles] = useState([]);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    useEffect(() => {
        document.title = "Add for Facility";
        fetchDivision();
        fetchPosition();
        fetchDegree();
        fetchRole();
    }, []);
    const fetchDivision = async () => {
        try {
            const response = await employeeService.getDivisions(localStorage.getItem('token'));
            setDivision(response);
        } catch (error) {
            console.log(error);
        }
    }
    const fetchPosition = async () => {
        try {
            const response = await employeeService.getPositions(localStorage.getItem('token'));
            setPosition(response);
        } catch (error) {
            console.log(error);
        }
    }
    const fetchRole = async () => {
        try {
            const response = await employeeService.getRoles(localStorage.getItem('token'));
            setRoles(response);
        } catch (error) {
            console.log(error);
        }
    }
    const fetchDegree = async () => {
        try {
            const response = await employeeService.getDegrees(localStorage.getItem('token'));
            setDegree(response);
        } catch (error) {
            console.log(error);
        }
    }


    const handleSubmitFacility = async (values) => {
        setLoading(true);
        console.log(values);
        try {
            await employeeService.createEmployee(values, localStorage.getItem('token'));
            navigate('/user/employee');
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
                            Employee&nbsp;</h5>
                    </div>
                    <div className="card-body" style={{background: "#171821"}}>
                        <Formik
                            initialValues={{
                                username: '',
                                password: '',
                                role: '',
                                name: '',
                                dob: '',
                                salary: '',
                                gender: '',
                                phoneNumber: '',
                                idCard: '',
                                email: '',
                                address: '',
                                position: '',
                                division: '',
                                degree: ''
                            }}
                            validationSchema={Yup.object({
                                name: Yup.string().required('Name is required'),
                                dob: Yup.date()
                                    .required('Date of birth is required')
                                    .max(new Date(new Date().setFullYear(new Date().getFullYear() - 18)), 'You must be at least 18 years old'),                                salary: Yup.number().required('Salary is required').min(0, 'Must be a non-negative number'),
                                gender: Yup.string().required('Gender is required'),
                                phoneNumber: Yup.string().required('Phone Number is required').min(10, 'Phone Number must be at least 10 characters'),
                                email: Yup.string().email('Invalid email address').required('Email is required'),
                                address: Yup.string().required('Address is required').matches(/^[a-zA-Z0-9\s,'-]*$/, 'Invalid address'),
                                position: Yup.string().required('Position is required'),
                                division: Yup.string().required('Division is required'),
                                degree: Yup.string().required('Degree is required'),
                                idCard: Yup.string().required('ID Card is required').min(9, 'ID Card must be at least 9 characters'),
                                username: Yup.string().required('Username is required').min(6, 'Username must be at least 6 characters'),
                                password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
                                role: Yup.string().required('Role is required')
                            })}
                            onSubmit={handleSubmitFacility}
                        >
                            {({isSubmitting}) => (<Form>
                                <div className="mb-3">
                                    <Field type="text" name="username" className="form-control cp" placeholder="username"/>
                                    <ErrorMessage name="username" component="div" className="error-message"/>
                                </div>
                                <div className="mb-3">
                                    <Field type="text" name="password" className="form-control cp" placeholder="password"/>
                                    <ErrorMessage name="password" component="div" className="error-message"/>
                                </div>
                                <div className="mb-3">
                                    <Field as="select" name="role" className="form-control cp">
                                        <option value="" label="Select role" />
                                        {roles.map((r) => (
                                            <option key={r.id} value={r.name} label={r.name} />
                                        ))}
                                    </Field>
                                    <ErrorMessage name="role" component="div" className="error-message"/>
                                </div>
                                    <div className="mb-3">
                                        <Field type="text" name="name" className="form-control cp" placeholder="Name"/>
                                        <ErrorMessage name="name" component="div" className="error-message"/>
                                    </div>
                                    <div className="mb-3">
                                        <Field type="date" name="dob" className="form-control cp"
                                               placeholder="Date of birth"/>
                                        <ErrorMessage name="dob" component="div" className="error-message"/>
                                    </div>
                                    <div className="mb-3">
                                        <Field type="number" name="salary" className="form-control cp"
                                               placeholder="Salary"/>
                                        <ErrorMessage name="salary" component="div" className="error-message"/>
                                    </div>
                                    <div className="mb-3">
                                        <Field as="select" name="gender" className="form-control cp">
                                            <option value="" label="Select gender"/>
                                            <option value="Male" label="Male"/>
                                            <option value="Female" label="Female"/>
                                        </Field>
                                        <ErrorMessage name="gender" component="div" className="error-message"/>
                                    </div>
                                    <div className="mb-3">
                                        <Field type="text" name="phoneNumber" className="form-control cp"
                                               placeholder="Phone Number"/>
                                        <ErrorMessage name="phoneNumber" component="div" className="error-message"/>
                                    </div>
                                    <div className="mb-3">
                                        <Field type="email" name="email" className="form-control cp"
                                               placeholder="Email"/>
                                        <ErrorMessage name="email" component="div" className="error-message"/>
                                    </div>
                                <div className="mb-3">
                                    <Field type="text" name="idCard" className="form-control cp"
                                           placeholder="ID card"/>
                                    <ErrorMessage name="idCard" component="div" className="error-message"/>
                                </div>
                                    <div className="mb-3">
                                        <Field type="text" name="address" className="form-control cp"
                                               placeholder="Address"/>
                                        <ErrorMessage name="address" component="div" className="error-message"/>
                                    </div>
                                    <div className="mb-3">
                                        <Field as="select" name="position" className="form-control cp">
                                            <option value="" label="Select position" />
                                            {position.map((p) => (
                                                <option key={p.id} value={p.name} label={p.name} />
                                            ))}
                                        </Field>
                                        <ErrorMessage name="position" component="div" className="error-message"/>
                                    </div>
                                    <div className="mb-3">
                                        <Field as="select" name="division" className="form-control cp">
                                            <option value="" label="Select division" />
                                            {division.map((d) => (
                                                <option key={d.id} value={d.name} label={d.name} />
                                            ))}
                                        </Field>
                                        <ErrorMessage name="division" component="div" className="error-message"/>
                                    </div>
                                    <div className="mb-3">
                                        <Field as="select" name="degree" className="form-control cp">
                                            <option value="" label="Select degree" />
                                            {degree.map((d) => (
                                                <option key={d.id} value={d.name} label={d.name} />
                                            ))}
                                        </Field>
                                        <ErrorMessage name="degree" component="div" className="error-message"/>
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