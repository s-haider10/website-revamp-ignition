
import { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';

const ReadingProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-sm">
      <Progress value={progress} className="h-1 rounded-none" />
    </div>
  );
};

export default ReadingProgress;
