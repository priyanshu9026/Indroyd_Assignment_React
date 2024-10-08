import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setWinner, nextQuestion, resetGame } from '../redux/actions'; // Import resetGame action

const QuestionScreen = () => {
    const [answer, setAnswer] = useState('');
    const [playerName, setPlayerName] = useState('');
    const dispatch = useDispatch();
    const { winner, questions, currentQuestionIndex } = useSelector(state => state);

    // Check if playerName is not set, if not, prompt for name
    React.useEffect(() => {
        if (!playerName) {
            const name = prompt("Enter your name to start the game:");
            setPlayerName(name);
        }
    }, [playerName]);

    const handleAnswerSubmit = () => {
        if (answer === questions[currentQuestionIndex].correctAnswer) {
            dispatch(setWinner(playerName));
            setTimeout(() => {
                // Check if there are more questions left
                if (currentQuestionIndex < questions.length - 1) {
                    dispatch(nextQuestion());
                } else {
                    const restart = window.confirm(`Congratulations ${playerName}! You've completed the game! Do you want to play again?`);
                    if (restart) {
                        dispatch(resetGame()); // Reset game action to restart
                    }
                }
            }, 3000);
        } else {
            alert("Wrong answer! Try again.");
        }
    };

    // Get current question from the questions array
    const question = questions[currentQuestionIndex];

    return (
        <div className='card p-4'>
            <h2>{question.question}</h2>
            {question.options.map((option, index) => (
                <div key={index}>
                    <input 
                        type="radio" 
                        name="answer" 
                        value={option[0]} 
                        onChange={(e) => setAnswer(e.target.value)} 
                    /> {option}
                </div>
            ))}
            <div className='text-center pt-3'>
                {!winner && <button className='btn btn-info' onClick={handleAnswerSubmit}>Submit Answer</button>}
            </div>
        </div>
    );
};

export default QuestionScreen;
