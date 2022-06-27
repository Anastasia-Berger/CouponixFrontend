import { FaEdit, FaTrash } from "react-icons/fa";
import { CompanyModel } from "../../../Models/CompanyModel";
import ILTime from "../../SharedArea/ILTime/ILTime";
import "./CompanyItem.css";

interface CompanyItemProps {
    company: CompanyModel;
}

function CompanyItem(props: CompanyItemProps): JSX.Element {
    return (
        <div className="CompanyItem">

            <div>
                <img src="https://picsum.photos/150" alt="" />
            </div>


            <div>
                <p>Id: {props.company.id}</p>
                <p>Name: {props.company.name}</p>
                <p>Group: {props.company.email} </p>
            </div>

            <div className="buttons">
                <FaTrash size={42} />
                <FaEdit size={42} />
            </div>


        </div>
    );
}

export default CompanyItem;
