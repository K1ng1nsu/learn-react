import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
    return (
        <>
            <Player />
            <div id="challenges">
                <TimerChallenge targetTime={1} title="Easy" />
                <TimerChallenge targetTime={5} title="Not easy" />
                <TimerChallenge targetTime={10} title="Getting tough" />
                <TimerChallenge targetTime={15} title="Pros only" />
            </div>
        </>
    );
}

export default App;
