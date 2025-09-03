import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowLeftIcon } from './icons/ArrowLeftIcon';
import { ProgressArrow } from './ProgressArrow';

const gold = '#D4B258';
const darkGold = '#C3A24B';
const AUTOPLAY_DURATION = 5000; // 5 seconds

const insightsData = [
  {
    imageSrc: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop',
    category: 'Facilities Management',
    title: 'Integrated Facility Management Services for Townships',
    author: 'Ixora Team',
    date: '07 Jul, 2025',
    authorImage: `https://ui-avatars.com/api/?name=I&background=D4B258&color=fff&size=40`,
  },
  {
    imageSrc: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop',
    category: 'Environmental | ESG',
    title: 'Ixora India Achieves ISO 50001...',
    author: 'Ixora Team',
    date: '01 Jun, 2025',
    authorImage: `https://ui-avatars.com/api/?name=I&background=D4B258&color=fff&size=40`,
  },
  {
    imageSrc: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=2070&auto=format&fit=crop',
    category: 'ESG | Sustainability',
    title: 'Carbon Emissions Dashboard for Retail...',
    author: 'Ixora Team',
    date: '15 May, 2025',
    authorImage: `https://ui-avatars.com/api/?name=I&background=D4B258&color=fff&size=40`,
  },
  {
    imageSrc: 'https://images.unsplash.com/photo-1522071820081-009f0129c7da?q=80&w=2070&auto=format&fit=crop',
    category: 'People & Culture',
    title: 'New Leadership Program to Foster Growth',
    author: 'Ixora Team',
    date: '28 Apr, 2025',
    authorImage: `https://ui-avatars.com/api/?name=I&background=D4B258&color=fff&size=40`,
  },
  {
    imageSrc: 'https://images.unsplash.com/photo-1549923746-c342d4a39818?q=80&w=2070&auto=format&fit=crop',
    category: 'Technology',
    title: 'Implementing Smart Building Technology',
    author: 'Ixora Team',
    date: '10 Apr, 2025',
    authorImage: `https://ui-avatars.com/api/?name=I&background=D4B258&color=fff&size=40`,
  },
];

const InsightCard: React.FC<typeof insightsData[0]> = ({ imageSrc, category, title, author, date, authorImage }) => (
  <div className="w-full h-full rounded-2xl overflow-hidden group shadow-lg flex-shrink-0">
    <div className="relative w-full h-full">
      <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
      <div className="absolute inset-0 p-4 sm:p-6 flex flex-col text-white">
        <p className="text-xs sm:text-sm font-semibold">{category}</p>
        <h3 className="text-lg sm:text-2xl font-bold mt-2 leading-tight">{title}</h3>
        <div className="mt-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src={authorImage} alt={author} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white/80" />
              <div className="ml-3">
                <p className="font-semibold text-xs sm:text-sm">{author}</p>
                <p className="text-xs text-white/80">{date}</p>
              </div>
            </div>
            <a href="#" className="font-semibold text-xs sm:text-sm underline hover:text-white/80">Read more</a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Insights: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const animationFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(performance.now());

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % insightsData.length);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + insightsData.length) % insightsData.length);
    startTimeRef.current = performance.now();
    setProgress(0);
  };
  
  const resetTimer = useCallback(() => {
    startTimeRef.current = performance.now();
    setProgress(0);
  }, []);

  useEffect(() => {
    const animate = (time: number) => {
      if (!isPaused) {
        const elapsedTime = time - startTimeRef.current;
        const currentProgress = Math.min((elapsedTime / AUTOPLAY_DURATION) * 100, 100);
        setProgress(currentProgress);

        if (currentProgress >= 100) {
          handleNext();
          startTimeRef.current = performance.now();
        } else {
          animationFrameRef.current = requestAnimationFrame(animate);
        }
      }
    };
    
    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isPaused, handleNext]);

  const getCardStyle = (index: number) => {
    const offset = index - activeIndex;
    const normalizedOffset = (offset + insightsData.length) % insightsData.length;
    
    // Default for large screens
    let transform = 'translateX(135%) scale(0.7)';
    let opacity = 0;
    let zIndex = 0;

    if (normalizedOffset === 0) { // Active
      transform = 'translateX(0%) scale(1)';
      opacity = 1;
      zIndex = 3;
    } else if (normalizedOffset === 1) { // Next
      transform = 'translateX(75%) scale(0.85)';
      opacity = 1;
      zIndex = 2;
    } else if (normalizedOffset === 2) { // Third
      transform = 'translateX(135%) scale(0.7)';
      opacity = 1;
      zIndex = 1;
    }
    
    // Overrides for smaller screens can be handled via CSS classes if needed,
    // but this JS approach provides dynamic styling based on index.
    return { transform, opacity, zIndex };
  };

  const linearProgress = (activeIndex / (insightsData.length - 1)) * 100;

  return (
    <section className="py-8 md:py-12" aria-labelledby="insights-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 id="insights-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 !leading-tight tracking-tight">
            IxoraGroup Insights and Updates
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Learn more about our people, innovation and ESG actions.
          </p>
          <div className="mt-6">
            <button style={{ backgroundColor: gold }} className="text-white font-semibold px-8 py-3 rounded-full hover:bg-[#C3A24B] transition-colors duration-200">
              View all News and Updates
            </button>
          </div>
        </div>
        
        <div 
          className="relative h-[400px] sm:h-[450px] w-full max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto mt-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            setIsPaused(false);
            startTimeRef.current = performance.now() - (progress / 100) * AUTOPLAY_DURATION;
          }}
        >
          <div className="relative w-full h-full">
            {insightsData.map((insight, index) => (
              <div
                key={index}
                className="absolute w-full sm:w-2/3 md:w-3/5 lg:w-3/5 h-full transition-all duration-500 ease-in-out"
                style={getCardStyle(index)}
              >
                <InsightCard {...insight} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center mt-8 max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto">
          <div className="flex-grow h-1 bg-amber-200 rounded-full overflow-hidden">
             <div className="h-full bg-amber-200 rounded-full relative">
                <div className="absolute top-0 left-0 h-full rounded-full" style={{ width: `${linearProgress}%`, backgroundColor: gold, transition: 'width 500ms ease-in-out' }}></div>
                <div className="absolute top-0 h-full rounded-full" style={{ left: `${linearProgress}%`, width: `${progress / (insightsData.length - 1)}%`, backgroundColor: 'rgba(212, 178, 88, 0.5)', transition: 'left 500ms ease-in-out' }}></div>
            </div>
          </div>
          <div className="flex items-center space-x-2 ml-4 flex-shrink-0">
            <button onClick={() => { handlePrev(); resetTimer(); }} className="w-10 h-10 flex items-center justify-center rounded-full border border-amber-200 text-[#D4B258] bg-white hover:bg-amber-100 transition-colors" aria-label="Previous">
              <ArrowLeftIcon className="w-5 h-5" />
            </button>
            <ProgressArrow onClick={() => { handleNext(); resetTimer(); }} progress={progress} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights;