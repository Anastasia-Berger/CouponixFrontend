import { CouponModel } from "../Models/CouponModel";
import globals from "../Services/Globals";
import tokenAxios from "../Services/InterceptorAxios";

export async function getCoupons() {
    return await tokenAxios.get<CouponModel[]>(globals.urls.coupons);
};

export async function getCoupon(id: number) {
    return await tokenAxios.get<CouponModel>(globals.urls.coupons + id);
};

export async function countCoupons() {
    return await tokenAxios.get<number>(globals.urls.coupons + 'count');
};

export async function addCoupon(coupon: CouponModel) {
    return await tokenAxios.post<CouponModel>(globals.urls.coupons, coupon);
};

export async function deleteCoupon(id: number) {
    return await tokenAxios.delete<any>(globals.urls.coupons + id);
};

export async function updateCoupon(id: number, coupon: CouponModel) {
    return await tokenAxios.put<CouponModel>(globals.urls.coupons + id, coupon);
};