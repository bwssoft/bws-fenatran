import { useEffect, useState } from "react";
import { useFlippedCards } from "./use-flipped-cards";
import useTimer from "./use-timer";

export const useGame = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const { cards, handleCardClick, resetGame, flipAllCards } = useFlippedCards();
  const { timeLeft, progress } = useTimer(30, isGameStarted);

  useEffect(() => {
    if (timeLeft === 0 && isGameStarted) {
      alert("Tempo esgotado! Tente novamente.");
      handleReset();
    }
  }, [timeLeft, isGameStarted]);

  const handleStartGame = async () => {
    await flipAllCards(true)
    await flipAllCards(false)
    setIsGameStarted(true);
  };

  const handleReset = () => {
    resetGame();
    setIsGameStarted(false);
  };

  return {
    cards,
    handleCardClick,
    progress,
    handleStartGame,
    handleReset,
    isGameStarted
  }

}