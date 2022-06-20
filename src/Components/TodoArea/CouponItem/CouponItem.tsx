import { FaEdit, FaTrash } from "react-icons/fa";
import { CouponModel } from "../../../Models/CouponModel";
import ILTime from "../../SharedArea/ILTime/ILTime";
import "./CouponItem.css";

interface CouponItemProps {
    coupon: CouponModel;
}

function CouponItem(props: CouponItemProps): JSX.Element {
    return (
        <div className="CouponItem">

            <div>
                <img src="https://picsum.photos/150" alt="" />
            </div>


            <div>
                <p>Id: {props.coupon.id}</p>
                <p>Title: {props.coupon.title}</p>
                <p>Desc: {props.coupon.description?.substring(0, 15)} </p>
                <p>Group: {props.coupon.group} </p>
                < ILTime date={props.coupon.when || new Date()} />
            </div>

            <div className="buttons">
                <FaTrash size={42} />
                <FaEdit size={42} />
            </div>


        </div>
    );
}

export default CouponItem;
