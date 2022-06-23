import moment from "moment";
import ILTime from "../../SharedArea/ILTime/ILTime";
import Logo from "../../SharedArea/Logo/Logo";
import roof from '../../../Assets/Img/roof.png';

import Menu from "../Menu/Menu";
import "./Header.css";
import Total from "../../TodoArea/Total/Total";
import Clock from "../../SharedArea/Clock/Clock";


function Header(): JSX.Element {
    return (
        <div className="Header">
            <Logo />
            <Menu />
            <Total />
        </div>
    );
}

export default Header;
