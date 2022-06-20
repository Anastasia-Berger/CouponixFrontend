import { SyntheticEvent, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CouponModel } from "../../../Models/CouponModel";
import ILDate from "../ILDate/ILDate";
import ILTime from "../ILTime/ILTime";
import ShoppingBag from "../../../Assets/Img/shopping_bag.png";

import "./FlipCard.css";

interface FlipCardProps {
    coupon: CouponModel;
}
function FlipCard(props: FlipCardProps): JSX.Element {

    const [id,setId] = useState<number>(props.coupon.id || 0)


    const updateCoupon = (id:number)=>{
        window.alert('going to update '+id);
    }

    const deleteCoupon = (id:number)=>{
        window.alert('going to delete '+id);
    }

    return (
        <div className="flip-card">
            <div className="flip-card-inner">

                
                <div className="flip-card-front">
                    <img src={ShoppingBag} alt="Shopping bag"/>
                </div>


                <div className="flip-card-back">
                    <h1>{props.coupon.title}</h1>
                    <p>{props.coupon.description}</p>
                    <p>{props.coupon.group}</p>
                    <p><ILDate date={props.coupon.when || new Date()} /> <ILTime date={props.coupon.when || new Date()} /></p>
                    <div className="buttons">
                        {/* <button onClick={()=>deleteTask(props.task.id || 0)}><FaTrash size={42} /> </button> */}
                        {/* <button onClick={()=>updateTask(props.task.id || 0)}><FaEdit size={42} /></button> */}
                        <Link to={`/coupons/edit/${props.coupon.id}`}><FaEdit size={42} /></Link>
                        <Link to={`/coupons/delete/${props.coupon.id}`}><FaTrash size={42} /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FlipCard;
