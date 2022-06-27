import "./CompaniesList.css";

import { SetStateAction, useEffect, useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { CompanyModel } from "../../../Models/CompanyModel";
import notify, { SccMsg } from "../../../Services/Notifications";
import { getCompanies } from "../../../WebApi/CompaniesApi";
import CustomLink from "../../SharedArea/CustomLink/CustomLink";
import FlipCard from "../../SharedArea/FlipCard/FlipCard";
import EmptyView from "../../SharedArea/EmptyView/EmptyView";
import CompanyItem from "../CompanyItem/CompanyItem";

function CompaniesList(): JSX.Element {

    const [companies, setCompanies] = useState<CompanyModel[]>([]);

    // Side effects goes here... // Hook
    useEffect(() => {
        if (companies?.length === 0) {
            getCompanies()
                .then((res) => {
                    // console.log(res.data);
                    setCompanies(res.data);
                    notify.success(SccMsg.GOT_TASKs);
                })
                .catch((err) => { notify.error(err); });
        }
    }, []);


    return (
        <div className="CompaniesList">

            <h1>Our Coupons</h1>

            <CustomLink to="/companies/add"> <FaPlusCircle size={42} /> </CustomLink>

            {(companies?.length > 0)
                ?

                <div className="container">
                    {/* {tasks.map(task => <TodoItem key={task.id} task={task} />)} */}
                    {companies.map(company => <CompanyItem key={company.id} company={company} />)}
                </div>

                :

                <EmptyView msg='No Companies for you!' />
            }
        </div>
    );


}

export default CompaniesList;
