import "./Logo.css";
import logo from '../../../Assets/Img/couponix_logo_transparent.png';

function Logo(): JSX.Element {
    return (
        <div className="Logo">
			<img src={logo} alt="logo"/>
        </div>
    );
}

export default Logo;
