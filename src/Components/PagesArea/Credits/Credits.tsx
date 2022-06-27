import "./Credits.css";

import credits from "../../../Assets/Img/super-sale.png";

function Credits(): JSX.Element {
    return (
        <div className="Credits">
			<img src={credits} alt="Credits" />
        </div>
    );
}

export default Credits;
