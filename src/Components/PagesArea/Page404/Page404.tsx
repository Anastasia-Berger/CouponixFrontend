import { Player, Controls } from '@lottiefiles/react-lottie-player';
import "./Page404.css";

function Page404(): JSX.Element {
    return (
        <div className="Page404">
            <p>It seems like this page is not available right now.</p>
            <p>Please contact the administrator <a href="#">here</a>, or try again later.</p>

            <Player
                autoplay
                loop
                src="https://assets3.lottiefiles.com/packages/lf20_58bmsu1o.json"
                style={{ height: '80%', width: '100%' }}
            >
                <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
            </Player>

        </div>
    );
}

export default Page404;