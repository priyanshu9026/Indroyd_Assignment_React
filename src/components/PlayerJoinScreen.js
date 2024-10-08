import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPlayer } from '../redux/actions';

const PlayerJoinScreen = () => {
    const [name, setName] = useState('');
    const dispatch = useDispatch();

    const handleJoin = () => {
        dispatch(addPlayer(name));
    };

    return (
        <div>
            <h1>Join the Game</h1>
            <input 
                type="text" 
                placeholder="Enter your name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
            />
            <button onClick={handleJoin}>Join</button>
        </div>
    );
};

export default PlayerJoinScreen;