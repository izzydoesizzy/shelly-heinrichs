import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

const quotes = [
  "The only bad workout is the one that didn't happen.",
  "Your body can stand almost anything. It's your mind you have to convince.",
  "Small progress is still progress.",
  "You don't have to be extreme, just consistent.",
  "The hard days are the best because that's when champions are made.",
];

export const MotivationalQuote = () => {
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setCurrentQuote(quotes[randomIndex]);
    }, 10000); // Change quote every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Card>
      <CardContent className="py-6">
        <p className="text-lg text-center italic text-muted-foreground">"{currentQuote}"</p>
      </CardContent>
    </Card>
  );
};