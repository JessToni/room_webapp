import React, {useState, useEffect} from 'react';
import { data, useParams } from 'react-router-dom';

const Room = () => {

    const { roomCode } = useParams();

    const [state, setState] = useState({
        votesToSkip: 2,
        guestCanPause: false,
        isHost: false,
    });

    useEffect(() => {
        fetch('/api/get-room' + '?code=' + roomCode)
            .then((response) => response.json())
            .then((data) => {
                setState({
                    votesToSkip: data.votes_to_skip,
                    guestCanPause: data.guest_can_pause,
                    isHost: data.is_host,
                })
            });
    }, [roomCode]);

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