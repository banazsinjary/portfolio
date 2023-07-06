import { useEffect, useState } from "react";

const phrases = [
  "adventure seeker 🌱",
  "hiking enthusiast ⛰️ ",
  "cat lover 🐱",
  "yoga practitioner 🧘🏻‍♀️",
  "tea connoisseur 🍵",
];

function SwitchText() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (index == phrases.length - 1) return;
    setTimeout(() => {
      setIndex(index + 1);
    }, 2000);
  }, [index]);

  return <p>and {phrases[index]}</p>;
}

export default SwitchText;
