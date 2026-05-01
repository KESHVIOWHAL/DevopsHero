import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Brain, Zap, RefreshCw, ChevronRight, CheckCircle, AlertCircle, Trophy } from 'lucide-react';
import { DEVOPS_BRANCHES, QuizQuestion } from '../constants';
import { cn } from '../lib/utils';
import confetti from 'canvas-confetti';

interface PracticeProps {
  onEarnPoints: (points: number) => void;
}

export default function Practice({ onEarnPoints }: PracticeProps) {
  const [gameState, setGameState] = useState<'intro' | 'playing' | 'summary'>('intro');
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);

  // Generate a random set of 5 questions from all lessons
  const questions = useMemo(() => {
    const allQuestions = DEVOPS_BRANCHES.flatMap(m => m.lessons.flatMap(l => l.quiz));
    return [...allQuestions].sort(() => Math.random() - 0.5).slice(0, 5);
  }, [gameState === 'playing']);

  const currentQuestion = questions[currentQuestionIdx];

  const handleStart = () => {
    setGameState('playing');
    setCurrentQuestionIdx(0);
    setScore(0);
    setSelectedOption(null);
    setIsAnswered(false);
  };

  const handleAnswer = () => {
    if (selectedOption === null) return;
    setIsAnswered(true);
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIdx < questions.length - 1) {
      setCurrentQuestionIdx(i => i + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setGameState('summary');
      if (score >= questions.length * 0.8) {
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
      }
      onEarnPoints(score * 5); // Practice gives half points compared to lessons
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <AnimatePresence mode="wait">
        {gameState === 'intro' && (
          <motion.div
            key="intro"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center py-12"
          >
            <div className="w-20 h-20 bg-blue-100 rounded-3xl flex items-center justify-center mx-auto mb-6 transform rotate-3">
              <Brain className="w-10 h-10 text-blue-600" />
            </div>
            <h1 className="text-3xl font-black text-gray-900 mb-4">Daily Brain Flex</h1>
            <p className="text-gray-500 max-w-md mx-auto mb-8">
              A randomized blast from all your DevOps modules. Perfect for keeping your skills sharp!
            </p>
            <button
              onClick={handleStart}
              className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-xl hover:shadow-blue-200"
            >
              Start Practice Session
            </button>
          </motion.div>
        )}

        {gameState === 'playing' && (
          <motion.div
            key="playing"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white border border-gray-100 p-8 rounded-3xl shadow-xl"
          >
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-blue-600 uppercase">Step {currentQuestionIdx + 1}/{questions.length}</span>
              </div>
              <div className="h-2 w-32 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-blue-500"
                  animate={{ width: `${((currentQuestionIdx + 1) / questions.length) * 100}%` }}
                />
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-8">{currentQuestion.question}</h2>

            <div className="space-y-3 mb-8">
              {currentQuestion.options.map((opt, idx) => (
                <button
                  key={idx}
                  disabled={isAnswered}
                  onClick={() => setSelectedOption(idx)}
                  className={cn(
                    "w-full p-5 text-left border-2 rounded-2xl transition-all font-medium",
                    selectedOption === idx ? "border-blue-500 bg-blue-50 text-blue-700" : "border-gray-100 hover:border-gray-200",
                    isAnswered && idx === currentQuestion.correctAnswer && "border-green-500 bg-green-50 text-green-700",
                    isAnswered && selectedOption === idx && idx !== currentQuestion.correctAnswer && "border-red-500 bg-red-50 text-red-700"
                  )}
                >
                  <div className="flex items-center justify-between">
                    <span>{opt}</span>
                    {isAnswered && idx === currentQuestion.correctAnswer && <CheckCircle className="w-5 h-5" />}
                    {isAnswered && selectedOption === idx && idx !== currentQuestion.correctAnswer && <AlertCircle className="w-5 h-5" />}
                  </div>
                </button>
              ))}
            </div>

            <div className="flex justify-end">
              <button
                onClick={isAnswered ? handleNext : handleAnswer}
                disabled={selectedOption === null}
                className={cn(
                  "px-8 py-3 rounded-xl font-bold transition-all flex items-center gap-2",
                  selectedOption === null ? "bg-gray-100 text-gray-400" : "bg-blue-600 text-white hover:bg-blue-700 shadow-lg"
                )}
              >
                {isAnswered ? (currentQuestionIdx === questions.length - 1 ? "Finish" : "Next Question") : "Check"}
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}

        {gameState === 'summary' && (
          <motion.div
            key="summary"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <div className="w-32 h-32 bg-yellow-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="relative">
                <Trophy className="w-16 h-16 text-yellow-500 fill-current" />
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="absolute -top-2 -right-2"
                >
                  <Zap className="w-8 h-8 text-blue-500 fill-current" />
                </motion.div>
              </div>
            </div>
            <h2 className="text-3xl font-black text-gray-900 mb-2">Session Complete!</h2>
            <p className="text-gray-500 mb-8">You got {score} out of {questions.length} correct.</p>
            
            <div className="flex gap-4 justify-center">
              <div className="p-6 bg-white border border-gray-100 rounded-3xl shadow-sm min-w-[140px]">
                <span className="block text-4xl font-black text-blue-600">+{score * 5}</span>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">XP Gained</span>
              </div>
            </div>

            <button
              onClick={() => setGameState('intro')}
              className="mt-12 flex items-center gap-2 px-8 py-3 bg-gray-900 text-white rounded-2xl font-bold hover:bg-black transition-all mx-auto"
            >
              <RefreshCw className="w-5 h-5" />
              Try Again
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
