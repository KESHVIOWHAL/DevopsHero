import { motion } from 'motion/react';
import { UserProgress } from '../hooks/useProgress';
import { DEVOPS_BRANCHES } from '../constants';
import { CertificateCard } from './Certificate';
import { Award, Zap, Trophy, Medal } from 'lucide-react';
import { cn } from '../lib/utils';
import { User } from 'firebase/auth';

interface ProfileProps {
  progress: UserProgress;
  user: User | null;
}

export default function Profile({ progress, user }: ProfileProps) {
  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-6">
        <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-6">
          <Award className="w-10 h-10 text-blue-500" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Sign in to view your profile</h2>
        <p className="text-gray-500 mb-6">Track your progress and earn verified certificates.</p>
      </div>
    );
  }

  const completedModules = DEVOPS_BRANCHES.filter(module => 
    module.lessons.every(lesson => progress.completedLessons.includes(lesson.id))
  );

  const stats = [
    { label: 'Lessons Done', value: progress.completedLessons.length, icon: Zap, color: 'text-blue-500', bg: 'bg-blue-50' },
    { label: 'Total XP', value: progress.points, icon: Trophy, color: 'text-yellow-600', bg: 'bg-yellow-50' },
    { label: 'Certificates', value: completedModules.length, icon: Medal, color: 'text-purple-600', bg: 'bg-purple-50' },
  ];

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <div className="flex items-center gap-6 mb-12">
         <div className="w-24 h-24 rounded-full bg-blue-100 p-1 border-4 border-white shadow-xl relative overflow-hidden">
            <img 
              src={user.photoURL || `https://api.dicebear.com/7.x/bottts/svg?seed=${user.uid}`} 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
            <div className="absolute -bottom-1 -right-1 bg-green-500 w-6 h-6 rounded-full border-4 border-white" />
         </div>
         <div>
            <h1 className="text-3xl font-black text-gray-900">{user.displayName}</h1>
            <p className="text-gray-500">{user.email} • DevOps Learner</p>
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            whileHover={{ y: -5 }}
            className="p-6 bg-white border border-gray-100 rounded-3xl shadow-sm flex flex-col items-center text-center"
          >
            <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center mb-4", stat.bg)}>
               <stat.icon className={cn("w-6 h-6", stat.color)} />
            </div>
            <span className="text-2xl font-black text-gray-900">{stat.value}</span>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{stat.label}</span>
          </motion.div>
        ))}
      </div>

      <div>
        <div className="flex items-center justify-between mb-8">
           <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <Award className="text-blue-600" />
              Verified Certificates
           </h2>
           <span className="px-3 py-1 bg-gray-100 text-gray-500 rounded-full text-xs font-bold font-mono">
              {completedModules.length} AWARDED
           </span>
        </div>

        {completedModules.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {completedModules.map(module => (
              <CertificateCard 
                key={module.id}
                module={module}
                userName="Keshav Owhal"
                date={new Date().toLocaleDateString()}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
             <Award className="w-16 h-16 text-gray-200 mx-auto mb-4" />
             <p className="text-gray-400 font-medium">Complete all lessons in a module to earn your certificate!</p>
             <button className="mt-4 text-blue-600 font-bold text-sm hover:underline">
                View Roadmap
             </button>
          </div>
        )}
      </div>
    </div>
  );
}
