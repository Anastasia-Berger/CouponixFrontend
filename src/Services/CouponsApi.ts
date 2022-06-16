import axios from "axios";
import { Coupon } from "../Models/Coupon";
import globals from "./Globals";

export async function getCoupons (){
    return await axios.get<Coupon[]>(globals.urls.coupons);
}

export async function addCoupon (coupon: Coupon) {
    return await axios.post<Coupon[]>(globals.urls.coupons, coupon);
}

export async function deleteCoupon (id: number) {
    return await axios.delete<any>(globals.urls.coupons+id);
}

export async function updateCoupons (id: number, coupon: Coupon) {
    return await axios.put<any>(globals.urls.coupons+id, coupon);
}