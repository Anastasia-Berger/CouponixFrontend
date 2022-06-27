import "./Total.css";

import backBasket from "../../../Assets/Img/wooden-box-back.png";
import frontBasket from "../../../Assets/Img/wooden-box-front.png";
import CouponItem from "../CouponItem/CouponItem";

function Total(): JSX.Element {
    return (
        <div className="Total">
            <div className="receipt">
                <p className="receiptTitle">RECEIPT</p>
                <p>------------------------------------</p>
                <p>Coupon1  x  10</p>
                <p>Coupon2  x  10</p>
                <p>------------------------------------</p>
                <p>TOTAL           :           20 items</p>

                <p>  </p>
            </div>


            <img src={backBasket} className="backBasket" alt="" />
            <img src={frontBasket} className="frontBasket" alt="" />
        </div>
    );
}

export default Total;
