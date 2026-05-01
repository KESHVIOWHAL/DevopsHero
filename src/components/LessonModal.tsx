import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import confetti from 'canvas-confetti';
import { X, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';
import { Lesson, QuizQuestion } from '../constants';
import { cn } from '../lib/utils';

interface LessonModalProps {
  lesson: Lesson;
  onClose: () => void;
  onComplete: (points: number) => void;
}

export default function LessonModal({ lesson, onClose, onComplete }: LessonModalProps) {
  const [step, setStep] = useState<'content' | 'quiz' | 'result'>('content');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);

  const currentQuestion = lesson.quiz[currentQuestionIndex];

  const handleAnswer = () => {
    if (selectedOption === null) return;
    setIsAnswered(true);
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    setSelectedOption(null);
    setIsAnswered(false);
    if (currentQuestionIndex < lesson.quiz.length - 1) {
      setCurrentQuestionIndex(i => i + 1);
    } else {
      const finalScore = score + (selectedOption === currentQuestion.correctAnswer ? 1 : 0);
      setStep('result');
      if (finalScore === lesson.quiz.length) {
        confetti({
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    }
  };

  const handleFinish = () => {
    onComplete(score * 10);
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        className="bg-white w-full max-w-2xl h-[80vh] rounded-3xl shadow-2xl flex flex-col overflow-hidden"
      >
        {/* Header */}
        <div className="p-6 border-bottom flex justify-between items-center bg-gray-50">
          <h2 className="text-xl font-bold text-gray-800">{lesson.title}</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-200 rounded-full transition-colors">
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8">
          <AnimatePresence mode="wait">
            {step === 'content' && (
              <motion.div
                key="content"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -20, opacity: 0 }}
                className="prose prose-blue max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-code:bg-blue-50 prose-code:text-blue-600 prose-code:px-1 prose-code:rounded"
              >
                <div className="markdown-body">
                  <ReactMarkdown>{lesson.content}</ReactMarkdown>
                </div>
              </motion.div>
            )}

            {step === 'quiz' && (
              <motion.div
                key="quiz"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="space-y-6"
              >
                <div className="flex justify-between items-center mb-4">
                   <p className="text-sm font-semibold text-blue-500 uppercase tracking-wider">Question {currentQuestionIndex + 1} of {lesson.quiz.length}</p>
                   <div className="h-2 flex-1 mx-4 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-blue-500" 
                        initial={{ width: 0 }} 
                        animate={{ width: `${((currentQuestionIndex + 1) / lesson.quiz.length) * 100}%` }}
                      />
                   </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 leading-tight">{currentQuestion.question}</h3>
                
                <div className="space-y-3">
                  {currentQuestion.options.map((option, idx) => (
                    <button
                      key={idx}
                      disabled={isAnswered}
                      onClick={() => setSelectedOption(idx)}
                      className={cn(
                        "w-full p-5 text-left border-2 rounded-2xl transition-all duration-200 font-medium",
                        selectedOption === idx ? "border-blue-500 bg-blue-50 text-blue-700" : "border-gray-200 hover:border-gray-300 bg-white text-gray-700",
                        isAnswered && idx === currentQuestion.correctAnswer && "border-green-500 bg-green-50 text-green-700",
                        isAnswered && selectedOption === idx && idx !== currentQuestion.correctAnswer && "border-red-500 bg-red-50 text-red-700"
                      )}
                    >
                      <div className="flex items-center justify-between">
                        <span>{option}</span>
                        {isAnswered && idx === currentQuestion.correctAnswer && <CheckCircle className="w-5 h-5" />}
                        {isAnswered && selectedOption === idx && idx !== currentQuestion.correctAnswer && <AlertCircle className="w-5 h-5" />}
                      </div>
                    </button>
                  ))}
                </div>

                {isAnswered && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={cn(
                      "p-4 rounded-xl flex gap-3",
                      selectedOption === currentQuestion.correctAnswer ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                    )}
                  >
                    <div className="flex-1">
                      <p className="font-bold mb-1">
                        {selectedOption === currentQuestion.correctAnswer ? "Excellent!" : "Not quite right"}
                      </p>
                      <p className="text-sm opacity-90">{currentQuestion.explanation}</p>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )}

            {step === 'result' && (
              <motion.div
                key="result"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center space-y-6 pt-12"
              >
                <div className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-16 h-16 text-blue-500" />
                </div>
                <h3 className="text-3xl font-black text-gray-900 italic">Lesson Complete!</h3>
                <p className="text-gray-500 text-lg">You've mastered this topic and earned {score * 10} points.</p>
                
                <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto">
                   <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                      <span className="block text-xs font-bold text-gray-400 uppercase">Correct</span>
                      <span className="text-2xl font-bold text-gray-800">{score}/{lesson.quiz.length}</span>
                   </div>
                   <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                      <span className="block text-xs font-bold text-gray-400 uppercase">XP Earned</span>
                      <span className="text-2xl font-bold text-blue-500">+{score * 10}</span>
                   </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="p-6 bg-white border-t flex justify-end gap-3">
          {step === 'content' && (
            <button
              onClick={() => setStep('quiz')}
              className="px-8 py-3 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200 active:scale-95 flex items-center gap-2"
            >
              Start Quiz <ArrowRight className="w-5 h-5" />
            </button>
          )}
          {step === 'quiz' && (
            <button
              onClick={isAnswered ? handleNext : handleAnswer}
              disabled={selectedOption === null}
              className={cn(
                "px-8 py-3 rounded-full font-bold transition-all shadow-lg active:scale-95",
                selectedOption === null ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700"
              )}
            >
              {isAnswered ? "Continue" : "Check Answer"}
            </button>
          )}
          {step === 'result' && (
            <button
              onClick={handleFinish}
              className="px-8 py-3 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg"
            >
              Finish
            </button>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
