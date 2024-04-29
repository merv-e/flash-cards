import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function Card({ id }) {
  const cards = useSelector((state) => state.cards.cards);
  const [flipped, setFlipped] = useState(false);

  return (
    <li>
      <button className="card" onClick={(e) => setFlipped(!flipped)}>
        {Object.values(cards).map((card) => (flipped ? card.back : card.front))}
      </button>
    </li>
  );
}
