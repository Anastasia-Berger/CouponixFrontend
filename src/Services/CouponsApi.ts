import axios from "axios";
import { CouponModel } from "../Models/CouponModel";
import globals from "./Globals";

export async function getCoupons (){
    return await axios.get<CouponModel[]>(globals.urls.coupons);
}

export async function addCoupon (coupon: CouponModel) {
    return await axios.post<CouponModel[]>(globals.urls.coupons, coupon);
}

export async function deleteCoupon (id: number) {
    return await axios.delete<any>(globals.urls.coupons+id);
}

export async function updateCoupons (id: number, coupon: CouponModel) {
    return await axios.put<any>(globals.urls.coupons+id, coupon);
}