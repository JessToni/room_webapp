import React, {useState, useEffect} from 'react';
import { data, useParams } from 'react-router-dom';
import { Grid, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

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
        <Grid container spacing={1} direction='column'>
            <Grid item xs={12} align='center'>
                <Typography variant='h4' component='h4'>
                    Code: {roomCode}
                </Typography>
            </Grid>
            <Grid item xs={12} align='center'>
                <Typography variant='h6' component='h6'>
                    Votes: {state.votesToSkip}
                </Typography>
            </Grid>
            <Grid item xs={12} align='center'>
                <Typography variant='h6' component='h6'>
                    Guest Can Pause: {String(state.guestCanPause)}
                </Typography>
            </Grid>
            <Grid item xs={12} align='center'>
                <Typography variant='h6' component='h6'>
                    Host: {String(state.isHost)}
                </Typography>
            </Grid>
            <Grid item xs={12} align='center'>
                <Button variant='contained' color='secondary' to='/' component={ Link }>
                    Leave Room
                </Button>
            </Grid>
        </Grid>
    );
};

export default Room;