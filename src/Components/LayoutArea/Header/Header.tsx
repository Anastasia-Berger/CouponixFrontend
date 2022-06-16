import moment from "moment";
import ILTime from "../../SharedArea/ILTime/ILTime";
import Logo from "../../SharedArea/Logo/Logo";
import Menu from "../Menu/Menu";
import "./Header.css";


function Header(): JSX.Element {
    return (
        <div className="Header">
			<Logo/>
            <Menu/>
            
        </div>
    );
}

export default Header;
