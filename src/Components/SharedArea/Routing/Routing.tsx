import { Route, Routes } from "react-router-dom";
import App from "../../../App";
import About from "../../PagesArea/About/About";
import Credits from "../../PagesArea/Credits/Credits";
import Home from "../../PagesArea/Home/Home";
import Page404 from "../../PagesArea/Page404/Page404";
import AddCoupon from "../../TodoArea/AddCoupon/AddCoupon";
import CouponList from "../../TodoArea/CouponList/CouponList";


import "./Routing.css";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="home" element={<Home />} />
                <Route index element={<Home />} />  {/* Default route for upload*/}
                <Route path="coupons" element={<CouponList />} />
                <Route path="coupons/add" element={<AddCoupon />} />
                <Route path="about" element={<About />} />
                <Route path="credits" element={<Credits />} />

                <Route path="*" element={<Page404 />} />
            </Routes>
        </div>
    );
}

export default Routing;
