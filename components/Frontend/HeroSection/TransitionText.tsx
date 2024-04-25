"use client";

import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = [
  "Acupuncture",
  "Massage",
  "Chiropractor",
  "Dental",
  "Cosmetic",
  "Dietitian",
  "Optometry",
  "Podiatry",
  "Psychiatry",
  "Cardiology",
  "Orthopedics",
  "Neurology",
  "Dermatology",
  "Ophthalmology",
  "Urology",
  "Gastroenterology",
  "Oncology",
  "Endocrinology",
];

const TransitionText = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <span className="-z-20">
      <TextTransition springConfig={presets.wobbly}>
        {TEXTS[index % TEXTS.length]}
      </TextTransition>
    </span>
  );
};
export default TransitionText;
