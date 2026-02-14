'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import confetti from 'canvas-confetti';
import VideoPlayer from '@/components/custom/VideoPlayer';

const quizQuestions = [
  {
    question: "Are you my valentine?",
    options: ["Yes", "No"],
    correctAnswer: "Yes",
  },
  {
    question: "When did we start talking?",
    options: ["March 2023", "April 2024", "Feb 2025"],
    correctAnswer: "Feb 2025",
  },
  {
    question: "When did we start dating?",
    options: ["3 Aug 2025", "6 May 2025", "26 Jan 2026"],
    correctAnswer: "3 Aug 2025",
  },
  {
    question: "Where was our first date?",
    options: ["McDonalds", "Botanical Gardens", "Steers"],
    correctAnswer: "Botanical Gardens",
  },
  {
    question: "Whats our favourite thing to do together?",
    options: ["Coffee", "Hiking", "Talking", "Outdoors", "Everything"],
    correctAnswer: "Everything",
  },
  {
    question: "How long is our longest call?",
    options: ["3 hours", "5 hours", "7 hours"],
    correctAnswer: "7 hours",
  },
];

export default function Home() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isFinished, setIsFinished] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  const triggerConfetti = () => {
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      zIndex: 1000,
    };

    function fire(particleRatio: number, opts: any) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });
  };

  const handleNextQuestion = () => {
    setShowFeedback(false);
    if (selectedAnswer === quizQuestions[currentQuestionIndex].correctAnswer) {
      setSelectedAnswer(null);
      if (currentQuestionIndex < quizQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setIsFinished(true);
        triggerConfetti();
      }
    } else {
      setShowFeedback(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-red-100 p-4 flex items-center justify-center">
      <div className="max-w-md w-full space-y-8">
        {isFinished ? (
          <VideoPlayer />
        ) : (
          <Card className="p-8 animate-fade-in space-y-6">
            <h2 className="text-2xl font-semibold text-center text-pink-600">
              {quizQuestions[currentQuestionIndex].question}
            </h2>
            <RadioGroup
              value={selectedAnswer || ''}
              onValueChange={setSelectedAnswer}
              className="space-y-4"
            >
              {quizQuestions[currentQuestionIndex].options.map((option) => (
                <div key={option}>
                  <RadioGroupItem
                    value={option}
                    id={option}
                    className="peer hidden"
                  />
                  <Label
                    htmlFor={option}
                    className={`flex items-center justify-center p-4 border rounded-lg cursor-pointer transition-all duration-200 hover:border-pink-300 hover:bg-pink-50/50 ${
                      selectedAnswer === option
                        ? 'border-pink-500 bg-pink-50 shadow-lg'
                        : ''
                    }`}
                  >
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
            {showFeedback && (
              <p className="text-red-500 text-center animate-bounce-once">
                Incorrect answer. Please try again.
              </p>
            )}
            <Button
              className="w-full mt-4 bg-pink-500 hover:bg-pink-600 disabled:opacity-50"
              onClick={handleNextQuestion}
              disabled={!selectedAnswer}
            >
              Next
            </Button>
          </Card>
        )}
      </div>
    </div>
  );
}