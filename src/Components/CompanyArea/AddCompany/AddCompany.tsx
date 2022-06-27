import "./AddCompany.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { CouponModel } from "../../../Models/CouponModel";
import { Controls, Player } from "@lottiefiles/react-lottie-player";
import { addCoupon } from "../../../WebApi/CouponsApi";
import notify from "../../../Services/Notifications";
import { CompanyModel } from "../../../Models/CompanyModel";
import { addCompany } from "../../../WebApi/CompaniesApi";

function AddCompany(): JSX.Element {

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

    });

    const { register, handleSubmit, formState: { errors, isDirty, isValid } } =
        useForm<CompanyModel>({ mode: "all", resolver: yupResolver(schema) });

    const sendToRemote = (company: CompanyModel) => {
        console.log(company);
        console.log(JSON.stringify(company));

        addCompany(company){
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

export default AddCompany;
function company(company: any): any {
    throw new Error("Function not implemented.");
}

function then(arg0: (res: any) => void) {
    throw new Error("Function not implemented.");
}

