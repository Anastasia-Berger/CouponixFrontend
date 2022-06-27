import "./AddCompany.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controls, Player } from "@lottiefiles/react-lottie-player";
import notify from "../../../Services/Notifications";
import { CompanyModel } from "../../../Models/CompanyModel";
import { addCompany } from "../../../WebApi/CompaniesApi";


function AddCompany(): JSX.Element {


    const schema = yup.object().shape({

        name:
            yup.string()
                .required("Name is required"),
        email:
            yup.string()
                .required("Email is required"),
        // image:
        //     yup.mixed()
        //         .test('required', "You need to provide a file", (value) => {
        //             return value && value.length
        //         })
        //         .test("fileSize", "The file is too large", (value, context) => {
        //             return value && value[0] && value[0].size <= 200000;
        //         })
        //         .test("type", "We only support png", function (value) {
        //             return value && value[0] && value[0].type === "image/png";
        //         })
    });

    const { register, handleSubmit, formState: { errors, isDirty, isValid } } =
        useForm<CompanyModel>({ mode: "all", resolver: yupResolver(schema) });

    const sendToRemote = (company: CompanyModel) => {
        console.log(company);
        console.log(JSON.stringify(company));

        addCompany(company)
            .then(res => { console.log(res.data); })
            .catch(err => {
                notify.error(err);
                console.log(err)
            });
    }

    return (
        <div className="sendToRemote">
            <div className="interactive">
                <h1>Add Company</h1>
                <p>Please fill all fields of form on right for add a new company.</p>

                {/* <Player
                    autoplay
                    loop
                    src="https://assets3.lottiefiles.com/packages/lf20_58bmsu1o.json"
                    style={{ height: '50%', width: 'auto' }}>

                    <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />

                </Player> */}
            </div>

            <form onSubmit={handleSubmit(addCompany)} >

            <input
                    type="text"
                    {...register("name")}
                    name="description"
                    placeholder="Description" />
                <br />
                <span>
                    {
                        errors.name?.message ?
                            <><span>{errors?.name?.message} </span></> :
                            <><label htmlFor="name">Name</label></>
                    }
                </span>
                <br />

                
                <input
                    type="email"
                    {...register("email")}
                    name="email"
                    placeholder="Email" />
                <br />
                <span>
                    {
                        errors.email?.message ?
                            <><span>{errors?.email?.message} </span></> :
                            <><label htmlFor="email">Email</label></>
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


                <button type="submit">ADD MY COMPANY</button>
            </form>
        </div>
    );
}

export default AddCompany;
function company(company: any): any {
    throw new Error("Function not implemented.");
}

