import { Zap, Flame, Trophy, LayoutDashboard, Brain, Award, Settings } from 'lucide-react';
import { UserProgress } from '../hooks/useProgress';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';

interface TopNavProps {
  progress: UserProgress;
}

export function TopNav({ progress }: TopNavProps) {
  return (
    <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 flex items-center justify-between px-6 py-4">
      <div className="flex items-center gap-2">
         <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg transform rotate-3">
            <Zap className="w-6 h-6 text-white fill-current" />
         </div>
         <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            DevOps Hero
         </h1>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 px-3 py-1 bg-orange-50 rounded-full border border-orange-100">
          <Flame className="w-5 h-5 text-orange-500 fill-current" />
          <span className="font-bold text-orange-600">{progress.streak}</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 bg-blue-50 rounded-full border border-blue-100">
          <Trophy className="w-5 h-5 text-blue-500 fill-current" />
          <span className="font-bold text-blue-600">{progress.points}</span>
        </div>
        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-gray-200 to-white border border-gray-100 flex items-center justify-center overflow-hidden shadow-inner">
           <img src="https://api.dicebear.com/7.x/bottts/svg?seed=devops" alt="Avatar" className="w-8 h-8" />
        </div>
      </div>
    </nav>
  );
}

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  const menuItems = [
    { id: 'learn', icon: LayoutDashboard, label: 'Learn' },
    { id: 'practice', icon: Brain, label: 'Practice' },
    { id: 'leaderboard', icon: Award, label: 'Leaderboard' },
    { id: 'profile', icon: Settings, label: 'Profile' },
  ];

  return (
    <aside className="w-64 border-r border-gray-100 h-[calc(100vh-73px)] sticky top-[73px] p-6 hidden lg:block">
      <div className="space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            className={cn(
              "w-full flex items-center gap-3 px-4 py-3 rounded-2xl font-bold transition-all",
              activeTab === item.id 
                ? "bg-blue-50 text-blue-600 border border-blue-100" 
                : "text-gray-500 hover:bg-gray-50 bg-transparent"
            )}
          >
            <item.icon className="w-5 h-5" />
            {item.label}
          </button>
        ))}
      </div>

      <div className="mt-12 p-6 bg-gradient-to-br from-indigo-600 to-blue-700 rounded-3xl text-white shadow-xl relative overflow-hidden group">
         <div className="relative z-10">
            <p className="text-xs font-bold opacity-80 uppercase tracking-widest mb-1">Weekly Goal</p>
            <h3 className="text-lg font-bold mb-3">80% Mastered</h3>
            <div className="h-2 bg-white/20 rounded-full overflow-hidden">
               <motion.div initial={{ width: 0 }} animate={{ width: '80%' }} className="h-full bg-white shadow-[0_0_10px_white]" />
            </div>
         </div>
         <Zap className="absolute -bottom-6 -right-6 w-24 h-24 text-white/10 rotate-12 group-hover:scale-110 transition-transform" />
      </div>
    </aside>
  );
}
