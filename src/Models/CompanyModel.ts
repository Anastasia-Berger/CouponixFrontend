import { CouponModel } from "./CouponModel";

export class CompanyModel {
    public id?: number;
    public name?: string;
    public email?: string;
    public password?: string;
    public coupons?: Array<CouponModel>;

    public image?: string;

    public constructor(
        id?: number,
        name?: string,
        email?: string,
        title?: string,
        coupons?: Array<CouponModel>,

        image?: string
    ) {
        this.id = id;
        this.name = name;
        this.email = email; 
        this.password = title; 
        this.coupons = coupons;

        this.image = image;
    }

}