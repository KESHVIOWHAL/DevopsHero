import { motion } from 'motion/react';
import { Award, Download, Share2, Calendar } from 'lucide-react';
import { UserProgress } from '../hooks/useProgress';
import { cn } from '../lib/utils';

interface CourseCompletionProps {
  progress: UserProgress;
  userName?: string;
}

export default function CourseCompletion({ progress, userName }: CourseCompletionProps) {
  const completionDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  const handleDownloadCertificate = () => {
    // Create certificate content
    const certificateContent = `
      <div style="
        font-family: 'Georgia', serif; 
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        padding: 60px 40px; 
        border: 8px solid #1e293b; 
        border-radius: 20px;
        max-width: 900px; 
        margin: 0 auto;
        position: relative;
        box-shadow: 0 20px 40px rgba(0,0,0,0.3);
      ">
        <div style="
          background: #ffffff;
          padding: 50px;
          border-radius: 15px;
          position: relative;
        ">
          <!-- Decorative corners -->
          <div style="
            position: absolute;
            top: 20px;
            left: 20px;
            width: 60px;
            height: 60px;
            border: 3px solid #f59e0b;
            border-radius: 50%;
          "></div>
          <div style="
            position: absolute;
            top: 20px;
            right: 20px;
            width: 60px;
            height: 60px;
            border: 3px solid #f59e0b;
            border-radius: 50%;
          "></div>
          <div style="
            position: absolute;
            bottom: 20px;
            left: 20px;
            width: 60px;
            height: 60px;
            border: 3px solid #f59e0b;
            border-radius: 50%;
          "></div>
          <div style="
            position: absolute;
            bottom: 20px;
            right: 20px;
            width: 60px;
            height: 60px;
            border: 3px solid #f59e0b;
            border-radius: 50%;
          "></div>
          
          <!-- Star decoration -->
          <div style="
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 200px;
            opacity: 0.05;
            color: #f59e0b;
          ">⭐</div>
          
          <h1 style="
            color: #1e293b; 
            font-size: 52px; 
            margin-bottom: 10px;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 3px;
          ">Certificate of Achievement</h1>
          
          <div style="
            width: 200px;
            height: 3px;
            background: linear-gradient(90deg, #f59e0b, #eab308);
            margin: 0 auto 40px;
          "></div>
          
          <p style="
            font-size: 20px; 
            margin-bottom: 30px;
            color: #475569;
            font-style: italic;
          ">This is to proudly certify that</p>
          
          <h2 style="
            font-size: 42px; 
            color: #1e293b; 
            margin-bottom: 20px;
            font-weight: bold;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
          ">${userName || 'DevOps Hero'}</h2>
          
          <div style="
            width: 150px;
            height: 2px;
            background: #f59e0b;
            margin: 0 auto 30px;
          "></div>
          
          <p style="
            font-size: 20px; 
            margin-bottom: 30px;
            color: #475569;
          ">has successfully completed and demonstrated mastery in</p>
          
          <h3 style="
            font-size: 32px; 
            color: #1e293b; 
            margin-bottom: 25px;
            font-weight: bold;
            background: linear-gradient(135deg, #667eea, #764ba2);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          ">DevOps Hero Mastery Course</h3>
          
          <div style="
            background: linear-gradient(135deg, #fef3c7, #fde68a);
            padding: 20px;
            border-radius: 10px;
            margin: 30px 0;
            border-left: 5px solid #f59e0b;
          ">
            <p style="
              font-size: 18px; 
              margin-bottom: 15px;
              color: #1e293b;
              font-weight: 600;
            ">🏆 Course Achievements</p>
            <p style="
              font-size: 16px; 
              margin-bottom: 10px;
              color: #475569;
            ">✅ Completed all 10 comprehensive lessons</p>
            <p style="
              font-size: 16px; 
              margin-bottom: 10px;
              color: #475569;
            ">🎯 Total XP Earned: <strong>${progress.points}</strong> points</p>
            <p style="
              font-size: 16px; 
              margin-bottom: 10px;
              color: #475569;
            ">📅 Completion Date: <strong>${completionDate}</strong></p>
          </div>
          
          <div style="
            display: flex; 
            justify-content: space-around; 
            align-items: flex-end; 
            margin-top: 50px;
          ">
            <div style="text-align: center;">
              <div style="
                border-bottom: 2px solid #1e293b; 
                width: 200px; 
                padding-bottom: 5px; 
                margin-bottom: 5px;
              ">
                <span style="font-style: italic; color: #475569;">Course Director</span>
              </div>
            </div>
            <div style="text-align: center;">
              <div style="
                border-bottom: 2px solid #1e293b; 
                width: 200px; 
                padding-bottom: 5px; 
                margin-bottom: 5px;
              ">
                <span style="font-style: italic; color: #475569;">${userName || 'DevOps Hero'}</span>
              </div>
            </div>
          </div>
          
          <!-- Certificate ID -->
          <div style="
            position: absolute;
            bottom: 10px;
            right: 10px;
            font-size: 10px;
            color: #94a3b8;
          ">Certificate ID: DEV-${Date.now()}</div>
        </div>
      </div>
    `;

    // Create and download certificate
    const blob = new Blob([certificateContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `devops-hero-certificate-${Date.now()}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleShareCertificate = () => {
    const shareText = `🎉 I just completed the DevOps Hero course! Earned ${progress.points} XP and mastered all 10 lessons. #DevOps #ContinuousLearning`;
    
    if (navigator.share) {
      navigator.share({
        title: 'DevOps Hero Course Completion',
        text: shareText,
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(shareText);
      alert('Certificate details copied to clipboard!');
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mb-6 shadow-lg">
          <Award className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-4xl font-black text-gray-900 mb-4">
          🎉 Congratulations! 🎉
        </h1>
        <p className="text-xl text-gray-600 mb-2">
          You've successfully completed the DevOps Hero course!
        </p>
        <p className="text-lg text-gray-500">
          You are now a certified DevOps Hero
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-white border border-gray-100 rounded-3xl shadow-lg p-6 text-center"
        >
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Award className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="font-bold text-gray-900 mb-2">Course Completed</h3>
          <p className="text-2xl font-black text-blue-600">100%</p>
          <p className="text-sm text-gray-500">All 10 lessons mastered</p>
        </motion.div>

        <motion.div
          whileHover={{ y: -5 }}
          className="bg-white border border-gray-100 rounded-3xl shadow-lg p-6 text-center"
        >
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Calendar className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="font-bold text-gray-900 mb-2">Completion Date</h3>
          <p className="text-lg font-bold text-green-600">{completionDate}</p>
          <p className="text-sm text-gray-500">Certificate earned</p>
        </motion.div>

        <motion.div
          whileHover={{ y: -5 }}
          className="bg-white border border-gray-100 rounded-3xl shadow-lg p-6 text-center"
        >
          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Award className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="font-bold text-gray-900 mb-2">Total XP Earned</h3>
          <p className="text-2xl font-black text-purple-600">{progress.points}</p>
          <p className="text-sm text-gray-500">Experience points</p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 text-white shadow-xl mb-8"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Your Certificate of Achievement</h2>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-white/20">
          <div className="text-center mb-6">
            <h3 className="text-3xl font-bold mb-2">Certificate of Completion</h3>
            <p className="text-lg opacity-90">This certifies that</p>
            <p className="text-2xl font-bold mt-2 mb-2">{userName || 'DevOps Hero'}</p>
            <p className="text-lg opacity-90">has successfully completed the</p>
            <p className="text-xl font-bold mt-2">DevOps Hero Course</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <p className="text-sm opacity-80">Lessons Completed</p>
              <p className="text-xl font-bold">10/10</p>
            </div>
            <div>
              <p className="text-sm opacity-80">XP Earned</p>
              <p className="text-xl font-bold">{progress.points}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleDownloadCertificate}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-full font-bold hover:bg-gray-100 transition-all shadow-lg"
          >
            <Download className="w-5 h-5" />
            Download Certificate
          </button>
          
          <button
            onClick={handleShareCertificate}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-full font-bold hover:bg-blue-400 transition-all shadow-lg"
          >
            <Share2 className="w-5 h-5" />
            Share Achievement
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4">What's Next?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-50 rounded-2xl">
            <h4 className="font-bold text-gray-900 mb-2">🚀 Advanced DevOps</h4>
            <p className="text-sm text-gray-600">Explore advanced topics like microservices, serverless, and cloud-native architectures</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-2xl">
            <h4 className="font-bold text-gray-900 mb-2">🏆 Industry Certification</h4>
            <p className="text-sm text-gray-600">Prepare for industry certifications like AWS DevOps Engineer, Kubernetes Administrator</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-2xl">
            <h4 className="font-bold text-gray-900 mb-2">💼 Real Projects</h4>
            <p className="text-sm text-gray-600">Apply your skills to real-world projects and build your DevOps portfolio</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
