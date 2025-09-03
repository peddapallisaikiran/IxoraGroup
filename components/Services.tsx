import React from 'react';
import { ArrowUpRightIcon } from './icons/ArrowUpRightIcon';
import { ArrowRightIcon } from './icons/ArrowRightIcon';

const gold = '#D4B258';

interface ServiceCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ imageSrc, title, description }) => (
  <div className="bg-white rounded-2xl overflow-hidden group shadow-sm hover:shadow-lg transition-shadow duration-300">
    <div className="overflow-hidden">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
      />
    </div>
    <div className="p-6">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <a 
          href="#" 
          className="relative w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full text-white transition-colors duration-300" 
          style={{ backgroundColor: gold }} 
          aria-label={`Learn more about ${title}`}
        >
          <ArrowUpRightIcon className="w-5 h-5 transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0" />
          <ArrowRightIcon className="w-5 h-5 absolute transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100" />
        </a>
      </div>
      <p className="text-gray-600 text-sm pr-12">{description}</p>
    </div>
  </div>
);

const servicesData = [
  {
    imageSrc: 'https://res.cloudinary.com/ddtw77k8l/image/upload/v1755598832/Company%20assests/download_7_yuv8kp.avif',
    title: 'Data Centres',
    description: 'Maintaining business continuity and the avoidance of interruption.',
  },
  {
    imageSrc: 'https://res.cloudinary.com/ddtw77k8l/image/upload/v1755598832/Company%20assests/download_8_uysjdv.avif',
    title: 'Aviation',
    description: 'Aviation sector-specialist services including Passengers with Reduced Mobility (PRM).',
  },
  {
    imageSrc: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop',
    title: 'Education',
    description: 'Inspiring the environments where learning and development thrive.',
  },
  {
    imageSrc: 'https://res.cloudinary.com/ddtw77k8l/image/upload/v1755598832/Company%20assests/download_9_mk9t7j.avif',
    title: 'Manufacturing',
    description: 'Maintaining efficient plants and product lines for the manufacturing industry.',
  },
  {
    imageSrc: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop',
    title: 'Commercial',
    description: 'Enhanced workplace experiences for increased productivity and retention.',
  },
  {
    imageSrc: 'https://res.cloudinary.com/ddtw77k8l/image/upload/v1755598833/Company%20assests/download_10_bxrch1.avif',
    title: 'Retail',
    description: 'Presenting your retail environment as your customers and consumers expect to find it.',
  },
  {
    imageSrc: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080&auto=format&fit=crop',
    title: 'Hospitality',
    description: 'Creating the right first impression for positive and memorable experiences.',
  },
  {
    imageSrc: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=2128&auto=format&fit=crop',
    title: 'Healthcare',
    description: 'Supporting those teams responsible for mental and physical wellness.',
  },
];

const Services: React.FC = () => {
  return (
    <section className="bg-white rounded-3xl p-6 sm:p-8 md:p-12 shadow-sm" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-center md:text-left">
          <h2 id="services-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 !leading-tight tracking-tight">
            Sector specific services – where your mission becomes our mission
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-600 max-w-3xl mx-auto md:mx-0">
            Find out more about our people, technology and ESG initiatives for your sector.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;