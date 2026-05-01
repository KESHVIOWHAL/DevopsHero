import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useProgress } from './hooks/useProgress';
import { TopNav, Sidebar } from './components/Navigation';
import Pathway from './components/Pathway';
import LessonModal from './components/LessonModal';
import Profile from './components/Profile';
import { Lesson } from './constants';
import { cn } from './lib/utils';

export default function App() {
  const { progress, completeLesson } = useProgress();
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [activeTab, setActiveTab] = useState('learn');

  const handleComplete = (earnedPoints: number) => {
    if (selectedLesson) {
      completeLesson(selectedLesson.id, earnedPoints);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <TopNav progress={progress} />
      
      <div className="flex">
        <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
        
        <main className="flex-1 min-h-[calc(100vh-73px)]">
           <AnimatePresence mode="wait">
             {activeTab === 'learn' ? (
               <motion.div 
                 key="learn"
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 exit={{ opacity: 0, x: -20 }}
                 className="max-w-4xl mx-auto px-6 py-12"
               >
                  <header className="mb-12 text-center">
                     <h1 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4 tracking-tight">
                        Master the <span className="text-blue-600">DevOps</span> Life.
                     </h1>
                     <p className="text-gray-500 text-lg max-w-xl mx-auto">
                        Level up your career with bite-sized lessons and interactive challenges. 
                        From Docker to Kubernetes, become a DevOps Hero.
                     </p>
                  </header>

                  <Pathway 
                    progress={progress} 
                    onSelectLesson={(lesson) => setSelectedLesson(lesson)} 
                  />
               </motion.div>
             ) : activeTab === 'profile' ? (
               <motion.div
                 key="profile"
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 exit={{ opacity: 0, x: -20 }}
               >
                 <Profile progress={progress} />
               </motion.div>
             ) : (
               <div className="flex flex-col items-center justify-center min-h-[60vh] text-gray-400">
                  <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                     <span className="text-2xl">⏳</span>
                  </div>
                  <p className="font-bold">Feature coming soon...</p>
                  <button 
                    onClick={() => setActiveTab('learn')}
                    className="mt-4 text-blue-600 font-bold hover:underline"
                  >
                    Go back to Learn
                  </button>
               </div>
             )}
           </AnimatePresence>
        </main>

        {/* Right Sidebar - Stats (Optional/Floating) */}
        <div className="w-80 p-8 hidden xl:block sticky top-[73px] h-[calc(100vh-73px)]">
           <div className="bg-gray-50 border border-gray-100 rounded-3xl p-6 mb-6">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                 🏆 Leaderboard
              </h3>
              <div className="space-y-4">
                 {[
                   { name: 'Keshav O.', points: 1240, current: true },
                   { name: 'DevOps_Dan', points: 1120 },
                   { name: 'Sarah_Cloud', points: 980 },
                   { name: 'Bash_Wizard', points: 850 },
                 ].map((u, i) => (
                   <div key={i} className={cn("flex items-center justify-between p-2 rounded-xl", u.current ? "bg-white shadow-sm ring-1 ring-gray-200" : "")}>
                      <div className="flex items-center gap-3">
                         <span className={cn("w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold", i === 0 ? "bg-yellow-100 text-yellow-700" : "bg-gray-100 text-gray-500")}>
                            {i + 1}
                         </span>
                         <span className={cn("font-medium", u.current ? "text-blue-600" : "text-gray-700")}>{u.name}</span>
                      </div>
                      <span className="font-bold text-gray-400 text-sm">{u.points}</span>
                   </div>
                 ))}
              </div>
           </div>

           <div className="bg-blue-50 border border-blue-100 rounded-3xl p-6">
              <h3 className="font-bold text-blue-900 mb-2">Daily Quests</h3>
              <p className="text-blue-700 text-sm mb-4">Complete 3 lessons to earn a bonus box!</p>
              <div className="flex gap-2">
                 <div className="w-full h-2 bg-blue-100 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 w-2/3" />
                 </div>
                 <span className="text-xs font-bold text-blue-600 shrink-0">2/3</span>
              </div>
           </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedLesson && (
          <LessonModal
            lesson={selectedLesson}
            onClose={() => setSelectedLesson(null)}
            onComplete={handleComplete}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

