import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logoutAction } from "../../Redux/AuthAppState";
import store from "../../Redux/store";
import notify, { SccMsg } from "../../Services/Notifications";

import "./Logout.css";

function Logout(): JSX.Element {

    const navigate = useNavigate();

    useEffect(() => {
        notify.success(SccMsg.LOGOUT_SUCCESS);
        store.dispatch(logoutAction());
        store.dispatch(tasksClearAction());
        navigate("/home");
    });

    return (
        <></>
    );
}

export default Logout;
function tasksClearAction(): any {
    throw new Error("Function not implemented.");
}

