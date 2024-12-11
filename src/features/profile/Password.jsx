import {Form, Formik, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import AuthService from "../../services/AuthService";
import Swal from "sweetalert2";
import ProfileService from "../../services/ProfileService";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const validationSchema = Yup.object().shape({
    currentPassword: Yup.string().required('Old Password is required'),
    newPassword: Yup.string().required('New Password is required').min(6, 'Password must be at least 6 characters'),
    confirmationPassword: Yup.string()
        .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
        .required('Confirm Password is required')
});

const initialValues = {
    currentPassword: '',
    newPassword: '',
    confirmationPassword: ''
};


export function Password() {
    const navigator = useNavigate();
    const [profileInfo, setProfileInfo] = useState({});
    const [loading, setLoading] = useState(false);


    const handleSubmit = async (values) => {
        try {

        const token = localStorage.getItem('token');
        const response = await ProfileService.updateYourPassword(token, values);
        if (response.message === "Password updated successfully") {
            AuthService.logout();
            navigator("/login");
            Swal.fire({
                icon: 'success',
                title: 'Password updated successfully',
                showConfirmButton: false,
                timer: 1500
            });

        } else {
            Swal.fire({
                icon: 'error',
                title: 'Password updated failed',
                text: response.message,
            });
        }
    } catch (error) {
        console.error('Error updating profile:', error);
        Swal.fire({
            icon: 'error',
            title: 'Error updating profile',
            text: error.message,
        });
    }
    };
    return(
        <>
            <div className="card shadow">
                <div className="card-header py-3" style={{background: "rgba(23,24,33,0.91)"}}>
                    <p className="m-0 fw-bold" style={{color: "#c1931f"}}>Change Password</p>
                </div>
                <div className="card-body" style={{background: "rgba(23,24,33,0.91)"}}>
                    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
                        {({ values, isValid, dirty }) => (

                            <Form>
                            <div className="mb-3">
                                <Field className="form-control cp" type="password" id="currentPassword" placeholder="Current password" name="currentPassword" style={{color: "rgb(250,169,13)",background: "rgb(0,0,0)"}}/>
                                <ErrorMessage name="currentPassword" component="div" className="error-message" />
                            </div>
                            <div className="mb-3">
                                <Field className="form-control cp" type="password" id="newPassword" placeholder="New Password" name="newPassword" style={{color: "rgb(250,169,13)",background: "rgb(0,0,0)"}}/>
                                <ErrorMessage name="newPassword" component="div" className="error-message" />
                            </div>
                            <div className="mb-3">
                                <Field className="form-control cp" type="password" id="confirmationPassword" placeholder="Confirm Password" name="confirmationPassword" style={{color: "rgb(250,169,13)",background: "rgb(0,0,0)"}}/>
                                <ErrorMessage name="confirmationPassword" component="div" className="error-message" />
                            </div>
                            <div className="mb-3">
                                <button className="btn-profile" type="submit" disabled={!isValid || !dirty || loading}>
                                    {loading ? 'Loading...' : 'Save the changes'}
                                </button>
                            </div>
                        </Form>
                        )}

                    </Formik>
                </div>
            </div>
        </>
    );
}