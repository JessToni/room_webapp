import React, {useState} from 'react';
import { useParams } from 'react-router-dom';

const Room = () => {

    const { roomCode } = useParams();

    const [state, setState] = useState({
        votesToSkip: 2,
        guestCanPause: false,
        isHost: false,
    });

    return (
        <div>
            <h3>{roomCode}</h3>
            <p>Votes: {state.votesToSkip}</p>
            <p>Guest Can Pause: {String(state.guestCanPause)}</p>
            <p>Host: {String(state.isHost)}</p>
        </div>
    );
};

export default Room;