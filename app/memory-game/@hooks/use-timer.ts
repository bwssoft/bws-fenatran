import { useEffect, useState } from 'react';

function useTimer(durationInSeconds: number, isActive: boolean) {
  const [timeLeft, setTimeLeft] = useState(durationInSeconds);
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    if (!isActive || timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
      setProgress((prevProgress) => prevProgress - 100 / durationInSeconds);
    }, 1000);

    return () => clearInterval(interval);
  }, [isActive, timeLeft, durationInSeconds]);

  // Reinicia o tempo quando `durationInSeconds` muda
  useEffect(() => {
    setTimeLeft(durationInSeconds);
    setProgress(100);
  }, [durationInSeconds, isActive]);

  return { timeLeft, progress };
}

export default useTimer;
