import React, { useState } from 'react';

const gold = '#D4B258';

const esgData = [
  {
    id: 'net-zero',
    title: 'Net zero targets and customers’ goals',
    description: 'Working towards our 2040 Net Zero target, we help our customers achieve their ESG goals, helping positively impact their initiatives, especially those concerning the environment.',
    imageSrc: 'https://res.cloudinary.com/ddtw77k8l/image/upload/v1755601574/Company%20assests/download_11_wmh5ta.avif',
    alt: 'Aerial view of a lush green forest, symbolizing environmental commitment.',
  },
  {
    id: 'communities',
    title: 'Supporting best communities',
    description: 'With 130,000 colleagues, we have a responsibility to the communities in which we operate and society as a whole. Learn more about our community outreach, DE&I and People Into Work scheme.',
    imageSrc: 'https://res.cloudinary.com/ddtw77k8l/image/upload/v1755601574/Company%20assests/download_12_ezmq0a.avif',
    alt: 'A child and an adult planting a small seedling, symbolizing community and future growth.',
  },
  {
    id: 'governance',
    title: 'Built on good governance',
    description: 'Responsible and sustainable management practices to protect our people, our communities, our customers and our stakeholders – safeguarding our long-term success.',
    imageSrc: 'https://res.cloudinary.com/ddtw77k8l/image/upload/v1755601582/Company%20assests/download_13_geuazr.avif',
    alt: 'Diverse business professionals collaborating in a modern office, symbolizing good governance.',
  },
];

const ESG: React.FC = () => {
  const [activeId, setActiveId] = useState(esgData[0].id);

  return (
    <section className="bg-white rounded-3xl p-6 sm:p-8 md:p-12 shadow-sm" aria-labelledby="esg-heading">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 id="esg-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 !leading-tight tracking-tight">
            IxoraGroup ESG commitment
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-600">
            Doing the right things in the right way – the IxoraGroup way.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="relative w-full h-80 sm:h-96 lg:h-full rounded-2xl overflow-hidden shadow-md">
            {esgData.map((item, index) => (
              <img
                key={item.id}
                src={item.imageSrc}
                alt={item.alt}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                  activeId === item.id ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
          </div>

          {/* Text Column */}
          <div className="relative">
             {/* Background Decorative Line */}
            <div className="absolute left-0 top-2 bottom-2 w-0.5 bg-amber-200 hidden sm:block" aria-hidden="true"></div>
            
            <div className="space-y-10">
              {esgData.map((item) => {
                const isActive = activeId === item.id;
                return (
                  <div 
                    key={item.id} 
                    className="pl-8 relative cursor-pointer"
                    onMouseEnter={() => setActiveId(item.id)}
                  >
                    {/* Active line segment */}
                    <div 
                      className="absolute left-0 top-0 bottom-0 w-0.5 transition-all duration-300 ease-in-out" 
                      style={{ backgroundColor: isActive ? gold : 'transparent' }}
                      aria-hidden="true"
                    ></div>

                    <h3 className={`text-xl sm:text-2xl font-semibold transition-colors duration-300 ${isActive ? 'text-gray-800' : 'text-gray-400'}`}>
                      {item.title}
                    </h3>
                    <p className={`mt-2 transition-colors duration-300 text-sm sm:text-base ${isActive ? 'text-gray-600' : 'text-gray-400'}`}>
                      {item.description}
                    </p>
                    <a href="#" className={`mt-4 inline-block font-semibold border-b-2 text-sm sm:text-base transition-all duration-300 ${isActive ? 'text-[#D4B258] border-[#D4B258]' : 'text-gray-400 border-gray-300'}`}>
                      Find out more
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ESG;