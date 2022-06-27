import Clock from "../../SharedArea/Clock/Clock";
import SocialMedia from "../../SharedArea/SocialMedia/SocialMedia";
import Total from "../../CouponArea/Total/Total";
import "./Footer.css";

function Footer(): JSX.Element {
    return (
        <div className="Footer">
            <SocialMedia/>
            
			<p>All rights reserved to Anastasia Berger.</p>
            
            <Clock />

        </div>
    );
}

export default Footer;
