import { motion } from 'motion/react';
import { DEVOPS_BRANCHES, Lesson } from '../constants';
import { UserProgress } from '../hooks/useProgress';
import { Check } from 'lucide-react';
import { cn } from '../lib/utils';

interface PathwayProps {
  progress: UserProgress;
  onSelectLesson: (lesson: Lesson) => void;
}

export default function Pathway({ progress, onSelectLesson }: PathwayProps) {
  return (
    <div className="max-w-xl mx-auto py-12 px-4">
      {DEVOPS_BRANCHES.map((module, mIdx) => (
        <div key={module.id} className="mb-16">
          <div className="text-center mb-8">
            <span className="text-xs font-black text-blue-500 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
               Module {mIdx + 1}
            </span>
            <h2 className="text-2xl font-bold text-gray-900 mt-2">{module.title}</h2>
          </div>

          <div className="relative flex flex-col items-center">
            {module.lessons.map((lesson, lIdx) => {
              const isCompleted = progress.completedLessons.includes(lesson.id);
              const isAccessible = lIdx === 0 && mIdx === 0 || 
                                   progress.completedLessons.includes(module.lessons[lIdx - 1]?.id || '') ||
                                   (lIdx === 0 && progress.completedLessons.includes(DEVOPS_BRANCHES[mIdx - 1]?.lessons.at(-1)?.id || ''));
              
              // Duolingo wiggle pattern
              const xOffset = lIdx % 2 === 0 ? (lIdx % 4 === 0 ? '0px' : '40px') : '-40px';

              return (
                <div key={lesson.id} className="relative mb-12 flex flex-col items-center">
                  {/* Connector line */}
                  {lIdx < module.lessons.length - 1 && (
                    <div className="absolute top-16 left-1/2 -translate-x-1/2 w-1 h-12 bg-gray-100 -z-10" />
                  )}
                  {lIdx === module.lessons.length - 1 && mIdx < DEVOPS_BRANCHES.length - 1 && (
                    <div className="absolute top-16 left-1/2 -translate-x-1/2 w-1 h-16 bg-gray-100 border-dashed border-2 -z-10" />
                  )}

                  <motion.div
                    style={{ x: xOffset }}
                    whileHover={isAccessible ? { scale: 1.1 } : {}}
                    whileTap={isAccessible ? { scale: 0.95 } : {}}
                    className="relative group pt-10"
                  >
                    <button
                      onClick={() => isAccessible && onSelectLesson(lesson)}
                      disabled={!isAccessible}
                      className={cn(
                        "w-20 h-16 rounded-3xl flex items-center justify-center transition-all duration-300 relative",
                        "shadow-[0_8px_0_0_rgb(0,0,0,0.1)] active:shadow-none active:translate-y-2",
                        isCompleted ? "bg-green-500 shadow-green-700/40" : 
                        isAccessible ? "bg-blue-500 shadow-blue-700/40" : 
                        "bg-gray-200 shadow-gray-300 text-gray-400 cursor-not-allowed"
                      )}
                    >
                      <lesson.icon className={cn("w-8 h-8", isAccessible ? "text-white" : "text-gray-400")} />
                      
                      {isCompleted && (
                        <div className="absolute -top-2 -right-2 bg-green-100 text-green-600 rounded-full p-1 border-2 border-white shadow-sm">
                          <Check className="w-3 h-3" strokeWidth={4} />
                        </div>
                      )}
                    </button>
                    
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap bg-gray-800 text-white text-xs font-bold py-1 px-3 rounded-lg shadow-xl mb-2">
                       {lesson.title}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
