import "./CouponList.css";

import { useEffect, useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { CouponModel } from "../../../Models/CouponModel";
import notify, { SccMsg } from "../../../Services/Notifications";
import { getCoupons } from "../../../WebApi/CouponsApi";
import "./CouponList.css";
import CustomLink from "../../SharedArea/CustomLink/CustomLink";
import FlipCard from "../../SharedArea/FlipCard/FlipCard";
import EmptyView from "../../SharedArea/EmptyView/EmptyView";

function CouponList(): JSX.Element {

    const [coupons, setCoupons] = useState<CouponModel[]>([]);

    // Side effects goes here... // Hook
    useEffect(() => {
        if (coupons?.length === 0) {
            getCoupons()
                .then((res) => {
                    // console.log(res.data);
                    setCoupons(res.data);
                    notify.success(SccMsg.GOT_TASKs);
                })
                .catch((err) => { notify.error(err); });
        }
    }, []);

    return (
        <div className="CouponList">

            <h1>Our Coupons</h1>
            
            <CustomLink to="/coupons/add"> <FaPlusCircle size={42} /> </CustomLink>

            {(coupons?.length > 0)
                ?

                <div className="container">
                    {/* {tasks.map(task => <TodoItem key={task.id} task={task} />)} */}
                    {coupons.map(coupon => <FlipCard key={coupon.id} coupon={coupon} />)}
                </div>

                :

                <EmptyView msg='No Coupons for you!' />
            }
        </div>
    );

}

export default CouponList;
