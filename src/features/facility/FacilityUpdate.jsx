import React, {useEffect, useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useNavigate, useParams} from "react-router-dom";
import {toast} from "react-toastify";
import * as Yup from "yup";
import FacilityService from "../../services/FacilityService";

const FacilitySchema = Yup.object().shape({
    name: Yup.string().required('Name is required').matches(/^[a-zA-Z0-9\s]+$/, "Only alphabets and numbers are allowed for this field "),
    standardRoom: Yup.string().required('Standard Room is required').matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
    area: Yup.number().required('Area is required').min(0, 'Must be a non-negative number'),
    poolArea: Yup.number().required('Pool Area is required').min(0, 'Must be a non-negative number'),
    floor: Yup.number().required('Floor is required').positive('Must be a positive number').integer('Must be an integer'),
    maxPeople: Yup.number().required('Max People is required').positive('Must be a positive number').integer('Must be an integer'),
    description: Yup.string().required('Description is required'),
    cost: Yup.number().required('Cost is required').positive('Must be a positive number'),
    facilityType: Yup.string().required('Facility Type is required'),
    rentType: Yup.string().required('Rent Type is required')
});

export function FacilityUpdate() {
    const [typeRent, setTypeRent] = useState([]);
    const [typeFacility, setTypeFacility] = useState([]);
    const [facility, setFacility] = useState([]);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const {id} = useParams();
    useEffect(() => {
        document.title = "Add for Facility";
        fetchTypeFacility();
        fetchTypeRent();
        fetchFacility();

    }, []);
    const fetchTypeFacility = async () => {
        try {
            const response = await FacilityService.getTypeFacilityList(localStorage.getItem('token'));
            setTypeFacility(response);
        } catch (error) {
            console.log(error);
        }
    }
    const fetchTypeRent = async () => {
        try {
            const response = await FacilityService.getTypeRentList(localStorage.getItem('token'));
            setTypeRent(response);
        } catch (error) {
            console.log(error);
        }
    }
    const fetchFacility = async () => {
        try {
            const response = await FacilityService.getFacility(localStorage.getItem('token'), id);
            setFacility(response);
        }catch (error) {
            console.error("Failed to fetch Facility:", error);
        }
    }

    const handleSubmitFacility = async (values) => {
        setLoading(true);
        try {
            await FacilityService.updateFacility(values, localStorage.getItem('token'),id);
                navigate('/user/facility');
                toast("Updated successfully", {
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
                                Facility&nbsp;</h5>
                        </div>
                        <div className="card-body" style={{background: "#171821"}}>
                            <Formik
                                initialValues={{
                                    name: facility.name || '',
                                    standardRoom: facility.standardRoom || '',
                                    poolArea: facility.poolArea || 0,
                                    area: facility.area || '',
                                    floor: facility.floor || '',
                                    maxPeople: facility.maxPeople || '',
                                    description: facility.description || '',
                                    cost: facility.cost || '',
                                    facilityType: facility.facilityType || '',
                                    rentType: facility.rentType || ''
                                }}
                                enableReinitialize
                                validationSchema={FacilitySchema}
                                onSubmit={handleSubmitFacility}
                            >
                                {({isValid, dirty}) => (<Form>

                                        <div className="mb-3">
                                            <Field type="text" name="name" className="form-control cp" placeholder="Name Facility"  />
                                            <ErrorMessage name="name" component="div" className="error-message" />
                                        </div>
                                        <div className="mb-3">
                                            <Field type="text" name="standardRoom" className="form-control cp" placeholder="Standard room..." />
                                            <ErrorMessage name="standardRoom" component="div" className="error-message" />
                                        </div>
                                        <div className="mb-3">
                                            <Field type="number" name="poolArea" className="form-control cp" placeholder="Pool area" />
                                            <ErrorMessage name="poolArea" component="div" className="error-message" />
                                        </div>
                                        <div className="mb-3">
                                            <Field type="number" name="area" className="form-control cp" placeholder="Area" />
                                            <ErrorMessage name="area" component="div" className="error-message" />
                                        </div>
                                        <div className="mb-3">
                                            <Field type="number" name="floor" className="form-control cp" placeholder="Floor" />
                                            <ErrorMessage name="floor" component="div" className="error-message" />
                                        </div>
                                        <div className="mb-3">
                                            <Field type="number" name="maxPeople" className="form-control cp" placeholder="Max people" />
                                            <ErrorMessage name="maxPeople" component="div" className="error-message" />
                                        </div>
                                        <div className="mb-3">
                                            <Field type="text" name="description" className="form-control cp" placeholder="Description Facility"/>
                                            <ErrorMessage name="description" component="div" className="error-message" />
                                        </div>
                                        <div className="mb-3">
                                            <Field type="number" name="cost" className="form-control cp" placeholder="Facility cost" />
                                            <ErrorMessage name="cost" component="div" className="error-message" />
                                        </div>
                                        <div className="mb-3">
                                            <Field as="select" name="facilityType" className="form-control cp">
                                                <option value="" label="Select facility type" />
                                                {typeFacility.map((tFacility) => (
                                                    <option key={tFacility.id} value={tFacility.name} label={tFacility.name} />
                                                ))}
                                            </Field>
                                            <ErrorMessage name="facilityType" component="div" className="error-message" />
                                        </div>
                                        <div className="mb-3">
                                            <Field as="select" name="rentType" className="form-control cp">
                                                <option value="" label="Select rent type" />
                                                {typeRent.map((tRent) => (
                                                    <option key={tRent.id} value={tRent.name} label={tRent.name} />
                                                ))}
                                            </Field>
                                            <ErrorMessage name="rentType" component="div" className="error-message" />
                                        </div>
                                        <button className="btn-profile" type="submit" disabled={!isValid || !dirty || loading}>
                                            {loading ? 'Loading...' : 'Save the changes'}
                                        </button>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}