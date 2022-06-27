import "./AddCoupon.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { CouponModel } from "../../../Models/CouponModel";
import { Controls, Player } from "@lottiefiles/react-lottie-player";
import { addCoupon } from "../../../WebApi/CouponsApi";
import notify from "../../../Services/Notifications";

function AddCoupon(): JSX.Element {


    const schema = yup.object().shape({
        category:
            yup.string()
                .required("Category Name is required"),
        title:
            yup.string()
                .required("Title Name is required"),
        description:
            yup.string()
                .required("Description Name is required"),
        startDate:
            yup.date()
                .max(new Date(), 'Umm... future dob? come on!')
                .default(new Date())
                .typeError("You must specify a start date")
                .required("Birthday is required")
                .nullable().default(() => new Date()),
        endDate:
            yup.date()
                .max(new Date(), 'Umm... future dob? come on!')
                .default(new Date())
                .typeError("You must specify a end date")
                .required("Birthday is required")
                .nullable().default(() => new Date()),
        amount:
            yup.number()
                .moreThan(-1)
                .typeError("You must specify an amount")
                .required("Amount is required"),
        price:
            yup.number()
                .moreThan(-1)
                .typeError("You must specify a price")
                .required("Price is required"),
        image:
            yup.mixed()
                .test('required', "You need to provide a file", (value) => {
                    return value && value.length
                })
                .test("fileSize", "The file is too large", (value, context) => {
                    return value && value[0] && value[0].size <= 200000;
                })
                .test("type", "We only support png", function (value) {
                    return value && value[0] && value[0].type === "image/png";
                })
    });

    const { register, handleSubmit, formState: { errors, isDirty, isValid } } =
        useForm<CouponModel>({ mode: "all", resolver: yupResolver(schema) });

    const sendToRemote = (coupon: CouponModel) => {
        console.log(coupon);
        console.log(JSON.stringify(coupon));

        addCoupon(coupon)
            .then(  res => {console.log(res.data);} )
            .catch( err => { notify.error(err); 
                             console.log(err)});
    }

    return (
        <div className="sendToRemote">
            {/* <div className="interactive">
                <h1>Add Coupon</h1>
                <p>Please fill all fields of form on right for add a new coupon.</p>

                <Player
                    autoplay
                    loop
                    src="https://assets3.lottiefiles.com/packages/lf20_58bmsu1o.json"
                    style={{ height: '50%', width: 'auto' }}>

                    <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />

                </Player>
            </div> */}

            {/* const addCoupon = async (coupon:CouponModel) => {
                console.log(JSON.stringify(coupon));
            } */}

            <form onSubmit={handleSubmit(addCoupon)} >

                <input
                    type="text"
                    {...register("category")}
                    name="category"
                    placeholder="Category" />
                <br />
                <span>
                    {
                        errors.category?.message ?
                            <><span>{errors?.category?.message} </span></> :
                            <><label htmlFor="category">Category</label></>
                    }
                </span>
                <br />


                <input
                    id="title"
                    type="text"
                    {...register("title")}
                    name="title"
                    placeholder="Title" />
                <br />
                <span>
                    {
                        errors.title?.message ?
                            <><span>{errors?.title?.message} </span></> :
                            <><label htmlFor="title">Title</label></>
                    }
                </span>
                <br />


                <input
                    type="text"
                    {...register("description")}
                    name="description"
                    placeholder="Description" />
                <br />
                <span>
                    {
                        errors.description?.message ?
                            <><span>{errors?.description?.message} </span></> :
                            <><label htmlFor="description">Description</label></>
                    }
                </span>
                <br />


                <input
                    type="date"
                    {...register("startDate")}
                    name="startDate"
                    placeholder="Start Date"
                />
                <span>
                    {
                        errors.startDate?.message ?
                            <><span>{errors?.startDate?.message} </span></> :
                            <><label htmlFor="startDate">Start Date</label></>
                    }
                </span>


                <input
                    type="date"
                    {...register("endDate")}
                    name="endDate"
                    placeholder="End Date"
                />
                <span>
                    {
                        errors.endDate?.message ?
                            <><span>{errors?.endDate?.message} </span></> :
                            <><label htmlFor="endDate">End Date</label></>
                    }
                </span>
                <br />


                <input
                    type="number"
                    {...register("amount")}
                    name="amount"
                    placeholder="Amount"
                />
                <span>
                    {
                        errors.amount?.message ?
                            <><span>{errors?.amount?.message} </span></> :
                            <><label htmlFor="amount">Amount</label></>
                    }
                </span>


                <input
                    type="number"
                    {...register("price")}
                    name="price"
                    placeholder="Price"
                />
                <span>
                    {
                        errors.price?.message ?
                            <><span>{errors?.price?.message} </span></> :
                            <><label htmlFor="price">Price</label></>
                    }
                </span>
                <br />


{/* 
                <input
                    type="file"
                    {...register("image")}
                    name="image"
                    placeholder="image" />
                <br />
                <span>
                    {
                        errors.image?.message ?
                            <><span>{errors?.image?.message} </span></> :
                            <><label htmlFor="image">Image</label></>
                    }
                </span> */}
                <br />


                <button type="submit">ADD MY COUPONIX</button>
            </form>
        </div>
    );
}

export default AddCoupon;
function coupon(coupon: any): any {
    throw new Error("Function not implemented.");
}

