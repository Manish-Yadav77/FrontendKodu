import React, { useEffect, useState } from "react";

const SeatsLeft = ({ bookedCount, resetTrigger }) => {
  const [seats, setSeats] = useState(16);
  const resetThreshold = 3;

  useEffect(() => {
    if (bookedCount > 0) {
      setSeats((prev) => {
        const updated = prev - 1;
        if (updated <= resetThreshold) {
          return 16;
        }
        return updated;
      });
    }
  }, [bookedCount]);

  useEffect(() => {
    if (resetTrigger) {
      setSeats(16);
    }
  }, [resetTrigger]);

  return (
    <span className="text-xl font-semibold text-red-600">{seats}</span>
  );
};

export default SeatsLeft;
