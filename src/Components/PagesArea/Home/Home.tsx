import "./Home.css";
import welcome from "../../../Assets/Img/welcome-sign.png"

function Home(): JSX.Element {
    return (
        <div className="Home">
            <h1 className="page-title">Coupon, Promo Codes & Daily Deals</h1>
            <p>Welcome to the hottest coupon codes of the day!
            <br />
            Get the best savings at some of the most popular online stores.</p>
            <img src={welcome} alt="welcome" />
        </div>
    );
}

export default Home;
