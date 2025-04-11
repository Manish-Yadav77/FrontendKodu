import React, { useEffect, useState } from "react";

const SeatsLeft = () => {
  const [seats, setSeats] = useState(16);
  const [delay, setDelay] = useState(getRandomDelay());

  function getRandomDelay() {
    const delays = [15000, 4 * 60 * 60 * 1000, 24 * 60 * 60 * 1000];
    return delays[Math.floor(Math.random() * delays.length)];
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setSeats((prev) => {
        if (prev <= 5) {
          setDelay(getRandomDelay());
          return 16;
        }
        return prev - 1;
      });
    }, delay);

    return () => clearInterval(interval);
  }, [delay]);

  return (
    <span className="text-xl font-semibold text-red-600">
    {seats}
    </span>
  );
};

export default SeatsLeft;
