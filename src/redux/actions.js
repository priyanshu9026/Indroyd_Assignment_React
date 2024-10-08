export const addPlayer = (name) => ({
    type: 'ADD_PLAYER',
    payload: name
});

export const setWinner = (name) => ({
    type: 'SET_WINNER',
    payload: name
});

export const nextQuestion = () => ({
    type: 'NEXT_QUESTION'
});

export const resetGame = () => ({
    type: 'RESET_GAME',
});
