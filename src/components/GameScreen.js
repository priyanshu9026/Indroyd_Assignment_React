import React from "react";
import { QRCodeCanvas } from "qrcode.react";
import { useSelector } from "react-redux";
import QuestionScreen from "./QuestionScreen";
import "./main.css";

const GameScreen = () => {
  const { players, winner, currentQuestionIndex, questions } = useSelector(
    (state) => state
  );

  return (
    <div className="containers bg-color p-3 pt-4">
      <div className="d-flex flex-row justify-content-center">
        <div className="text-center">
          <h1>KBC Game</h1>
          <h2>Scan QR Code to Join:</h2>
          <QRCodeCanvas value={window.location.href} />
        </div>
      </div>
      <div className="d-flex flex-row justify-content-center pt-4">
        <div>
          <h3>Players Joined:</h3>
          {players.length > 0 ? (
            players.map((player, index) => <p key={index}>{player}</p>)
          ) : (
            <p>No players yet</p>
          )}
        </div>
      </div>

      <div className="d-flex flex-row justify-content-center pt-4">
        <div>
          <QuestionScreen question={questions[currentQuestionIndex]} />

          {winner && <h2>Congratulations {winner}! Correct Answer!</h2>}
        </div>
      </div>
    </div>
  );
};

export default GameScreen;
