import { motion } from 'motion/react';
import { Award, ShieldCheck, Download, Share2 } from 'lucide-react';
import { Module } from '../constants';

interface CertificateProps {
  module: Module;
  userName: string;
  date: string;
}

export default function Certificate({ module, userName, date }: CertificateProps) {
  return (
    <motion.div 
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="w-full max-w-2xl bg-white aspect-[1.414/1] border-[16px] border-blue-600 p-8 shadow-2xl relative overflow-hidden flex flex-col items-center text-center font-serif"
    >
      {/* Decorative corners */}
      <div className="absolute top-0 left-0 w-24 h-24 border-t-8 border-l-8 border-blue-400 -translate-x-4 -translate-y-4" />
      <div className="absolute top-0 right-0 w-24 h-24 border-t-8 border-r-8 border-blue-400 translate-x-4 -translate-y-4" />
      <div className="absolute bottom-0 left-0 w-24 h-24 border-b-8 border-l-8 border-blue-400 -translate-x-4 translate-y-4" />
      <div className="absolute bottom-0 right-0 w-24 h-24 border-b-8 border-r-8 border-blue-400 translate-x-4 translate-y-4" />

      {/* Watermark */}
      <Award className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 text-blue-50 opacity-[0.03] pointer-events-none" />

      <div className="mt-8">
        <ShieldCheck className="w-16 h-16 text-blue-600 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 tracking-tighter uppercase mb-2">Certificate of Mastery</h1>
        <p className="text-gray-500 italic text-xl">This is to certify that</p>
      </div>

      <div className="my-8">
        <h2 className="text-5xl font-black text-blue-700 underline decoration-blue-200 underline-offset-8 decoration-4">{userName}</h2>
      </div>

      <div className="flex-1 space-y-4">
        <p className="text-gray-600 text-lg max-w-md mx-auto leading-relaxed">
          Has successfully completed the advanced module on:
          <br />
          <span className="font-bold text-gray-900 text-2xl not-italic">{module.title}</span>
        </p>
        <p className="text-gray-400 text-sm">
          Issued on {date} • DevOps Hero Certification ID: DH-{module.id.toUpperCase()}
        </p>
      </div>

      <div className="mt-8 flex justify-between w-full px-12 items-end">
        <div className="text-left">
           <div className="w-32 h-px bg-gray-300 mb-2" />
           <p className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Program Director</p>
        </div>
        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center opacity-10">
           <Award className="w-8 h-8 text-white" />
        </div>
        <div className="text-right">
           <div className="w-32 h-px bg-gray-300 mb-2" />
           <p className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Head of Operations</p>
        </div>
      </div>
    </motion.div>
  );
}

export function CertificateCard({ module, date, userName }: CertificateProps) {
  return (
    <div className="group relative bg-white border border-gray-100 p-6 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300">
       <div className="aspect-video bg-gray-50 rounded-2xl mb-4 overflow-hidden border border-gray-100 flex items-center justify-center group-hover:scale-[1.02] transition-transform">
          <Certificate module={module} userName={userName} date={date} />
       </div>
       <div className="flex justify-between items-center">
          <div>
             <h4 className="font-bold text-gray-900">{module.title}</h4>
             <p className="text-xs text-gray-400 uppercase tracking-widest font-black">Issued {date}</p>
          </div>
          <div className="flex gap-2">
             <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors">
                <Download className="w-5 h-5" />
             </button>
             <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors">
                <Share2 className="w-5 h-5" />
             </button>
          </div>
       </div>
    </div>
  );
}
