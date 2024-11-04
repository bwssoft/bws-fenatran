"use client";

import { useEffect, useState } from "react";
import { useFlippedCards } from "../@hooks/use-flipped-cards";
import "@/app/lib/styles/space.css";
import useTimer from "../@hooks/use-timer";
import Image from "next/image";

export const MemoryGame: React.FC = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const { cards, handleCardClick, resetGame } = useFlippedCards();
  const { timeLeft, progress } = useTimer(30, isGameStarted);

  useEffect(() => {
    if (timeLeft === 0 && isGameStarted) {
      alert("Tempo esgotado! Tente novamente.");
      handleReset();
    }
  }, [timeLeft, isGameStarted]);

  const handleStartGame = () => {
    setIsGameStarted(true);
  };

  const handleReset = () => {
    resetGame();
    setIsGameStarted(false);
  };

  return (
    <div className="memory-game-container flex flex-col items-center justify-center min-h-screen p-4 sm:p-6 text-white relative">
      {isGameStarted && (
        <div className="absolute left-0 top-0 right-0 w-full h-2 bg-gray-300 rounded-full overflow-hidden mb-6">
          <div
            style={{ width: `${progress}%` }}
            className="h-full bg-blue-500 transition-all duration-1000"
          ></div>
        </div>
      )}

      <h1 className="text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-400 to-blue-600 mb-4 sm:mb-8 drop-shadow-xl text-center">
        Jogo da memória
      </h1>
      <p className="text-base sm:text-lg font-medium text-gray-400 mb-6 sm:mb-10 tracking-wide text-center">
        Complete o desafio e ganhe um brinde!
      </p>

      {isGameStarted ? (
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 sm:gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              onClick={() => handleCardClick(card)}
              className={`w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center cursor-pointer rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 ${
                card.isFlipped || card.isMatched
                  ? "bg-gradient-to-br from-blue-800 via-blue-900 to-gray-900 bg-opacity-80 backdrop-blur-lg border border-blue-700 shadow-[0_0_15px_rgba(30,58,138,0.6)]"
                  : "bg-gradient-to-br from-blue-700 via-blue-800 to-gray-900 text-white"
              }`}
            >
              {(card.isFlipped || card.isMatched) && (
                <Image
                  src={card.value}
                  fill={true}
                  alt="Memory card"
                  className="w-full h-full object-cover rounded-lg"
                />
              )}
            </div>
          ))}
        </div>
      ) : (
        <></>
      )}

      {!isGameStarted ? (
        <button
          onClick={handleStartGame}
          className="mt-8 sm:mt-12 px-6 py-2 sm:px-8 sm:py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-2xl transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500"
        >
          Iniciar Jogo
        </button>
      ) : (
        <button
          onClick={handleReset}
          className="mt-8 sm:mt-12 px-6 py-2 sm:px-8 sm:py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-2xl transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500"
        >
          Resetar o jogo
        </button>
      )}
    </div>
  );
};