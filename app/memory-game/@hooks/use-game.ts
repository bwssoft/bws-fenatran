import { useEffect, useState } from "react";
import { useFlippedCards } from "./use-flipped-cards";
import useTimer from "./use-timer";

export const useGame = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const { cards, handleCardClick, resetGame, flipAllCards, handleDisableClick } = useFlippedCards();
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
    handleDisableClick(false)
    setIsGameStarted(true);
  };

  const handleReset = () => {
    resetGame();
    setIsGameStarted(false);
    handleDisableClick(true)
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