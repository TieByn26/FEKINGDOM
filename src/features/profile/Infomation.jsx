import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {useEffect, useState} from "react";
import ProfileService from "../../services/ProfileService";
import Swal from "sweetalert2";

const validationSchema = Yup.object().shape({
    fullName: Yup.string().required('Full Name is required').matches(/^[a-zA-Z ]*$/, "Full Name must be alphabetic"),
    dob: Yup.date().required('Date of Birth is required'),
    phoneNumber: Yup.string().required('Phone Number is required').min(10, 'Phone Number must be at least 10 characters').max(11, 'Phone Number must be at most 11 characters').matches(/^\d+$/, "Phone Number must be a number"),
    email: Yup.string().required('Email is required').email('Email is invalid').matches(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/, "Email must be in the form of)"),
    idCard: Yup.string().required('ID Card is required').matches(/^\d+$/, "ID Card must be a number").min(9, 'ID Card must be at least 9 characters').max(12, 'ID Card must be at most 12 characters'),
    address: Yup.string().required('Address is required').matches(/^[a-zA-Z0-9 ]*$/, "Address must be alphanumeric").min(5, 'Address must be at least 5 characters').max(50, 'Address must be at most 50 characters'),
});

export function Infomation() {
    const [profileInfo, setProfileInfo] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchProfileInfo().then();
    }, []);

    const fetchProfileInfo = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await ProfileService.getYourProfile(token);
            setProfileInfo(response.userReq);
        } catch (error) {
            console.error('Error fetching profile information:', error);
        }
    };

    const handleSubmit = async (values, {setSubmitting}) => {
        setLoading(true);
        try {
            const token = localStorage.getItem('token');
            await ProfileService.updateProfile(values, token);

            Swal.fire({
                icon: 'success', title: 'Profile updated successfully', showConfirmButton: false, timer: 1500
            });
        } catch (error) {
            console.error('Error updating profile:', error);
            Swal.fire({
                icon: 'error', title: 'Error', text: error.message,
            });
        }
        setLoading(false);
        setSubmitting(false);
    };

    return (<div className="card shadow mb-3">
            <div className="card-header py-3" style={{background: "rgba(23,24,33,0.91)"}}>
                <p className="m-0 fw-bold" style={{color: "#c1931f"}}>Your information</p>
            </div>
            <div className="card-body" style={{background: "rgba(23,24,33,0.91)"}}>
                <Formik
                    initialValues={

                        {
                            fullName: profileInfo.fullName || '',
                            dob: profileInfo.dob || '',
                            phoneNumber: profileInfo.phoneNumber || '',
                            email: profileInfo.email || '',
                            address: profileInfo.address || '',
                            idCard: profileInfo.idCard || '',
                            typeCustomer: profileInfo.typeCustomer || '',
                            division: profileInfo.division || '',
                            position: profileInfo.position || '',
                            degree: profileInfo.education || '',
                            role: profileInfo.role || ''
                        }}
                    enableReinitialize
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({isValid, dirty}) => (<Form>
                            <div className="row">
                                <div className="col">
                                    <div className="mb-3">
                                        <label className="form-label" style={{color: "#c1931f"}}
                                               htmlFor="fullName"><strong>Full
                                            Name</strong></label>
                                        <Field className="form-control cp" type="text" id="fullName"
                                               placeholder="Nguyễn văn A"
                                               name="fullName"
                                               style={{color: "rgb(250,169,13)", background: "rgb(0,0,0)"}}/>
                                        <ErrorMessage name="fullName" component="div" className="error-message"/>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="mb-3">
                                        <label className="form-label" style={{color: "#c1931f"}} htmlFor="dob"><strong>Date
                                            of
                                            birth</strong></label>
                                        <Field className="form-control cp" id="dob" type="date" name="dob"
                                               style={{color: "rgb(250,169,13)", background: "rgb(0,0,0)"}}/>
                                        <ErrorMessage name="dob" component="div" className="error-message"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="mb-3">
                                        <label className="form-label" style={{color: "#c1931f"}}
                                               htmlFor="email"><strong>Email</strong></label>
                                        <Field className="form-control cp" type="email" id="email"
                                               placeholder="xxxx@gmail.com"
                                               name="email"
                                               style={{color: "rgb(250,169,13)", background: "rgb(0,0,0)"}}/>
                                        <ErrorMessage name="email" component="div" className="error-message"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="mb-3">
                                        <label className="form-label" style={{color: "#c1931f"}} htmlFor="phoneNumber"><strong>Phone
                                            number</strong></label>
                                        <Field className="form-control cp" type="text" id="phoneNumber"
                                               placeholder="09088xxxxx" name="phoneNumber"
                                               style={{color: "rgb(250,169,13)", background: "rgb(0,0,0)"}}/>
                                        <ErrorMessage name="phoneNumber" component="div" className="error-message"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="mb-3">
                                        <label className="form-label" style={{color: "#c1931f"}}
                                               htmlFor="idCard"><strong>ID
                                            CARD</strong></label>
                                        <Field className="form-control cp" type="text" id="idCard"
                                               placeholder="xxxx897x889"
                                               name="idCard"
                                               style={{color: "rgb(250,169,13)", background: "rgb(0,0,0)"}}/>
                                        <ErrorMessage name="idCard" component="div" className="error-message"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="mb-3">
                                        <label className="form-label" style={{color: "#c1931f"}}
                                               htmlFor="address"><strong>Address</strong></label>
                                        <Field className="form-control cp" type="text" id="address"
                                               placeholder="xxx Hoàng Diệu"
                                               name="address"
                                               style={{color: "rgb(250,169,13)", background: "rgb(0,0,0)"}}/>
                                        <ErrorMessage name="address" component="div" className="error-message"/>
                                    </div>
                                </div>
                            </div>
                            {profileInfo.role === "Customer" ? (<div className="row">
                                <div className="col">
                                    <div className="mb-3">
                                        <label className="form-label" style={{color: "#c1931f"}}
                                               htmlFor="typeCustomer"><strong>Type customer</strong></label>
                                        <Field className="form-control cp" disabled type="text" id="typeCustomer"
                                               placeholder="Bronze" name="typeCustomer"
                                               style={{color: "rgb(250,169,13)", background: "rgb(0,0,0)"}}/>
                                        <ErrorMessage name="typeCustomer" component="div" className="error-message"/>
                                    </div>
                                </div>
                            </div>) : (<div className="row">
                                    <div className="col">
                                        <div className="mb-3">
                                            <label className="form-label" style={{color: "#c1931f"}}
                                                   htmlFor="role"><strong>Role</strong></label>
                                            <Field className="form-control cp" disabled type="text" id="role"
                                                   placeholder="Nhân viên..." name="role"
                                                   style={{color: "rgb(250,169,13)", background: "rgb(0,0,0)"}}/>
                                            <ErrorMessage name="role" component="div" className="error-message"/>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label"  style={{color: "#c1931f"}}
                                                   htmlFor="division"><strong>Division</strong></label>
                                            <Field className="form-control cp" disabled type="text" id="division"
                                                   placeholder="Nhân viên..." name="division"
                                                   style={{color: "rgb(250,169,13)", background: "rgb(0,0,0)"}}/>
                                            <ErrorMessage name="division" component="div" className="error-message"/>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label" style={{color: "#c1931f"}}
                                                   htmlFor="position"><strong>Position</strong></label>
                                            <Field className="form-control cp" disabled type="text" id="position"
                                                   placeholder="Nhân viên..." name="position"
                                                   style={{color: "rgb(250,169,13)", background: "rgb(0,0,0)"}}/>
                                            <ErrorMessage name="position" component="div" className="error-message"/>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label" style={{color: "#c1931f"}}
                                                   htmlFor="degree"><strong>Degree</strong></label>
                                            <Field className="form-control cp" disabled type="text" id="degree"
                                                   placeholder="Nhân viên..." name="degree"
                                                   style={{color: "rgb(250,169,13)", background: "rgb(0,0,0)"}}/>
                                            <ErrorMessage name="degree" component="div" className="error-message"/>
                                        </div>
                                    </div>
                                </div>)}

                            <div className="mb-3">
                                <button className="btn-profile" type="submit" disabled={!isValid || !dirty || loading}>
                                    {loading ? 'Loading...' : 'Save the changes'}
                                </button>
                            </div>
                        </Form>)}
                </Formik>
            </div>
        </div>)

}