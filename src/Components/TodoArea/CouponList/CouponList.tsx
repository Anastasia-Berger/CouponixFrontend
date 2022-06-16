import { useEffect, useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { Coupon } from "../../../Models/Coupon";

import notify, { SccMsg } from "../../../Services/Notifications";
import { getCoupons } from "../../../Services/CouponsApi";
import CouponItem from "../CouponItem/CouponItem";
import "./CouponList.css";
import CustomLink from "../../SharedArea/CustomLink/CustomLink";

function CouponList(): JSX.Element {

    const [coupons, setCoupons] = useState<Coupon[]>([]);

    // Side effects goes here... // Hook
    useEffect(() => {
        if (coupons?.length === 0) {
            getCoupons()
                .then((res) => {
                    console.log(res.data);
                    setCoupons(res.data);
                    notify.success(SccMsg.GOT_TASKs);
                })
                .catch((err) => { notify.error(err); });
        }
    }, []);

    return (
        <div className="CouponList">
            <h1>Our Coupons</h1>
            <CustomLink to="/coupons/add">
                <FaPlusCircle size={42} />
            </CustomLink>
            
            <div className="CouponListArea">
                {coupons?.map((coupon) => <CouponItem key={coupon.id} coupon={coupon} />)}

            </div>

        </div>
    );

}

export default CouponList;
