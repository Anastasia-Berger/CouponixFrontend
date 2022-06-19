import SocialMedia from "../../SharedArea/SocialMedia/SocialMedia";
import Total from "../../TodoArea/Total/Total";
import "./Footer.css";

function Footer(): JSX.Element {
    return (
        <div className="Footer">
            <SocialMedia/>
            
			<p>All rights reserved to Anastasia Berger.</p>
            
        </div>
    );
}

export default Footer;
