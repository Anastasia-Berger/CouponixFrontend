import { Outlet } from "react-router-dom";
import Total from "../../CouponArea/Total/Total";
import Routing from "../../SharedArea/Routing/Routing";
import "./Main.css";

function Main(): JSX.Element {
    return (
        <div className="Main">
			<Routing/>
			{/* <Outlet/> */}
            <Total />

        </div>
    );
}

export default Main;
