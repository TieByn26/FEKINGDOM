import {BrowserRouter, Route, Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'font-awesome/css/font-awesome.css';
import './assets/css/Availability---Manage-availability-bookings-appointments_v1.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'react-toastify/dist/ReactToastify.css';
import './assets/css/Black-Navbar.css';
import './assets/css/placeholder.css';
import {Home} from "./pages/Home";
import {Login} from "./features/auth/Login";
import {Register} from "./features/auth/Register";
import {PublicRoutes} from "./routes/PublicRoutes";
import {PrivateRoutes} from "./routes/PrivateRoutes";
import {ToastContainer} from "react-toastify";
import {Dashboard} from "./pages/Dashboard";
import"./assets/bootstrap/css/bootstrap1.min.css";
import {FacilityDashboard} from "./features/facility/FacilityDashboard";
import {FacilityAddDashboard} from "./features/facility/FacilityAddDashboard";
import {FacilityUpdateDashboard} from "./features/facility/FacilityUpdateDashboard";
import {EmployeeDashboard} from "./features/employee/EmployeeDashboard";
import {EmployeeAddDashboard} from "./features/employee/EmployeeAddDashboard";
import {EmployeeUpdateDashboard} from "./features/employee/EmployeeUpdateDashboard";
import {CustomerDashboard} from "./features/customer/CustomerDashboard";
import {FeedbackDashboard} from "./features/feedback/FeedbackDashboard";
import {ContractDashboard} from "./features/contract/ContractDashboard";
import {PaymentDashboard} from "./features/payment/PaymentDashboard";
import {PaymentAddDashboard} from "./features/payment/PaymentAddDashboard";
import {PaymentUpdateDashboard} from "./features/payment/PaymentUpdateDashboard";
import {PaymentBillDashboard} from "./features/payment/PaymentBillDashboard";
import {ContractAddDashboard} from "./features/contract/ContractAddDashboard";
import {ContractUpdateDashboard} from "./features/contract/ContractUpdateDashboard";
import AuthService from "./services/AuthService";
import {ReportDashboard} from "./features/report/ReportDashboard";
import {ErrorPage} from "./components/layout/ErrorPage";


function App() {
    return (<>
            <BrowserRouter>
                <Routes>
{/*Public routes*/}
                <Route element={<PublicRoutes/>}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>

                </Route>
        {/*For admin and staff*/}
                    <Route element={<PrivateRoutes/>}>
                        {!AuthService.isCustomer() ? (
                            <>
                                {/*facility*/}
                                <Route path="/user/facility" element={<FacilityDashboard/>}/>
                                <Route path="/user/facility/create" element={<FacilityAddDashboard/>}/>
                                <Route path="/user/facility/update/:id" element={<FacilityUpdateDashboard/>}/>
                                {/*employee*/}
                                <Route path="/user/employee" element={<EmployeeDashboard/>}/>
                                <Route path="/user/employee/create" element={<EmployeeAddDashboard/>}/>
                                <Route path="/user/employee/update/:id" element={<EmployeeUpdateDashboard/>}/>
                                {/*{customer}*/}
                                <Route path="/user/customer" element={<CustomerDashboard/>}/>

                                {/*Report*/}
                                <Route path="/user/report" element={<ReportDashboard/>}/>
                            </>
                        ) : null}
                        {/*Payment*/}
                        <Route path="/user/payment" element={<PaymentDashboard/>}/>
                        <Route path="/user/payment/create" element={<PaymentAddDashboard/>}/>
                        <Route path="/user/payment/update/:id" element={<PaymentUpdateDashboard/>}/>
                        <Route path="/user/payment/bill/:id" element={<PaymentBillDashboard/>}/>
                        {/*Feedback*/}
                        <Route path="/user/feedback" element={<FeedbackDashboard/>}/>
                        {/*Contract*/}
                        <Route path="/user/contract" element={<ContractDashboard/>}/>
                        <Route path="/user/contract/create" element={<ContractAddDashboard/>}/>
                        <Route path="/user/contract/update/:id" element={<ContractUpdateDashboard/>}/>
                        {/* Profile*/}
                         <Route path="/user/profile" element={<Dashboard/>}/>

                    </Route>
                <Route path="*" element={<ErrorPage/>}/>

                </Routes>
                <ToastContainer />
            </BrowserRouter>

        </>);
}

export default App;
