import CustomLink from "../../SharedArea/CustomLink/CustomLink";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">

            <CustomLink to="/home"> Home </CustomLink>
            <CustomLink to="/about"> About </CustomLink>
            <CustomLink to="/coupons"> Coupons </CustomLink>
            <CustomLink to="/credits"> Credits </CustomLink>
            <CustomLink to="/contact"> Contact </CustomLink>

        </div>
    );
}

export default Menu;
