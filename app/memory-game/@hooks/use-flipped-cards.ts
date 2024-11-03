import { useEffect, useState } from "react";
interface Card {
  id: number;
  value: string;
  isFlipped: boolean;
  isMatched: boolean;
}
export const useFlippedCards = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<Card[]>([]);
  const [disableClick, setDisableClick] = useState(false);

  const cardValues = [
    "/game/ASTRONAUTA.png",
    "/game/E3+4G.png",
    "/game/ESTANDE.png",
    "/game/PLANETA.png",
    "/game/SIMCARD.png",
    "/game/VAN.png",
  ];

  useEffect(() => {
    const shuffledCards = shuffleCards();
    setCards(shuffledCards);
  }, []);

  const shuffleCards = (): Card[] => {
    const doubledValues = [...cardValues, ...cardValues];
    return doubledValues
      .sort(() => Math.random() - 0.5)
      .map((value, index) => ({
        id: index,
        value,
        isFlipped: false,
        isMatched: false,
      }));
  };

  const handleCardClick = (card: Card) => {
    if (disableClick || card.isFlipped || card.isMatched) return;

    const updatedCards = cards.map((c) =>
      c.id === card.id ? { ...c, isFlipped: true } : c
    );
    setCards(updatedCards);
    setFlippedCards((prev) => [...prev, card]);

    if (flippedCards.length === 1) {
      setDisableClick(true);
      setTimeout(() => checkForMatch(card), 800);
    }
  };

  const checkForMatch = (newCard: Card) => {
    const [firstCard] = flippedCards;

    if (firstCard.value === newCard.value) {
      setCards((prevCards) =>
        prevCards.map((card) =>
          card.value === firstCard.value
            ? { ...card, isMatched: true, isFlipped: true }
            : card
        )
      );
    } else {
      setCards((prevCards) =>
        prevCards.map((card) =>
          card.id === firstCard.id || card.id === newCard.id
            ? { ...card, isFlipped: false }
            : card
        )
      );
    }

    setFlippedCards([]);
    setDisableClick(false);
  };

  const resetGame = () => {
    setCards(shuffleCards());
    setFlippedCards([]);
  };

  return {
    handleCardClick,
    resetGame,
    cards
  }
}