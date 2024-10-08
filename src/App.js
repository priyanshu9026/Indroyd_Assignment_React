import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GameScreen from './components/GameScreen';
import PlayerJoinScreen from './components/PlayerJoinScreen';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<GameScreen />} />
                <Route path="/join" element={<PlayerJoinScreen />} />
            </Routes>
        </Router>
    );
}

export default App;
