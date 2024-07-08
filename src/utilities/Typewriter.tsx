import { useEffect, useState } from "react";

export default function Typewriter({
  text,
  onFinished,
}: {
  text: string;
  onFinished: () => void;
}) {
  const [currentText, setCurrentText] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const delay = 20;
  const delayPeriod = 400;
  const delayComma = 200;

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(
        () => {
          setCurrentText((prev) => prev + text[currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        },
        text[currentIndex - 1] == "."
          ? delayPeriod
          : text[currentIndex - 1] == ","
          ? delayComma
          : delay
      );
      return () => clearTimeout(timeout);
    } else {
      onFinished();
    }
  }, [currentIndex, delay, text, onFinished]);

  return <>{currentText}</>;
}
