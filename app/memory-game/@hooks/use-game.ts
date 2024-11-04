import { useEffect, useState } from "react";
import { useFlippedCards } from "./use-flipped-cards";
import useTimer from "./use-timer";
import { useRouter } from "next/navigation";

interface IConclusion {
  is_finished: boolean
  winner: boolean
}

export const useGame = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [conclusion, setConclusion] = useState<IConclusion>({ is_finished: false, winner: true })
  const { cards, handleCardClick, resetGame, handleDisableClick, flipAllCards } = useFlippedCards();
  const { timeLeft, progress } = useTimer(40, isGameStarted);
  const router = useRouter()

  useEffect(() => {
    const allCardsIsMatched = cards.every(card => card.isMatched)

    if (timeLeft === 0 && isGameStarted) {
      handleReset();
      setConclusion({ is_finished: true, winner: false })
    } else if (isGameStarted && allCardsIsMatched) {
      handleReset();
      setConclusion({ is_finished: true, winner: true })
    }
  }, [timeLeft, isGameStarted, cards]);

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

  const handleExitGame = () => {
    router.push("/")
  }

  return {
    cards,
    handleCardClick,
    progress,
    handleStartGame,
    handleReset,
    isGameStarted,
    conclusion,
    handleExitGame
  }

}