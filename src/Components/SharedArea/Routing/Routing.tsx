import "./Routing.css";

import { Route, Routes } from "react-router-dom";
import App from "../../../App";
import About from "../../PagesArea/About/About";
import Credits from "../../PagesArea/Credits/Credits";
import Home from "../../PagesArea/Home/Home";
import Page404 from "../../PagesArea/Page404/Page404";
import AddCoupon from "../../Forms/AddCoupon/AddCoupon";
import CouponList from "../../CouponArea/CouponList/CouponList";
import Register from "../../Register/Register";
import EditCoupon from "../../CompanyArea/EditCompany/EditCompany";
import CompanyList from "../../CompanyArea/CompaniesList/CompaniesList";
import EditCompany from "../../CompanyArea/EditCompany/EditCompany";
import DeleteCompany from "../../CompanyArea/DeleteCompany/DeleteCompany";
import AddCompany from "../../Forms/AddCompany/AddCompany";
import DeleteCoupon from "../../CouponArea/DeleteCoupon/DeleteCoupon";
import CompaniesList from "../../CompanyArea/CompaniesList/CompaniesList";
import Login from "../../AuthArea/Login/Login";
import Logout from "../../AuthArea/Logout/Logout";
import Contact from "../../PagesArea/Contact/Contact";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/home' element={<Home />} />
                <Route index element={<Home />} />

                <Route path="coupons" element={<CouponList />} />
                <Route path="coupons/add" element={<AddCoupon />} />
                <Route path='coupons/edit/:id' element={<EditCoupon />} />
                <Route path='coupons/delete/:id' element={<DeleteCoupon />} />

                <Route path="companies" element={<CompaniesList />} />
                <Route path="companies/add" element={<AddCompany />} />
                <Route path='companies/edit/:id' element={<EditCompany />} />
                <Route path='companies/delete/:id' element={<DeleteCompany />} />

                <Route path='/about' element={<About />} />
                <Route path='/credits' element={<Credits />} />

                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='/logout' element={<Logout />} />

                <Route path='contact' element={<Contact />} />
                <Route path='*' element={<Page404 />} />
            </Routes>
        </div>
    );
}

export default Routing;
