import React, { useState } from 'react';
import { ArrowRightIcon } from './icons/ArrowRightIcon';
import { CheckCircleIcon } from './icons/CheckCircleIcon';
import { PlusIcon } from './icons/PlusIcon';
import { MinusIcon } from './icons/MinusIcon';
import { ArrowUpRightIcon } from './icons/ArrowUpRightIcon';

const AviationPage: React.FC = () => {
  const backgroundImageUrl = "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=2070&auto=format&fit=crop";

  const [openAccordion, setOpenAccordion] = useState<number | null>(0);
  const [openServiceAccordion, setOpenServiceAccordion] = useState<number | null>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const accordionData = [
    {
      question: 'Best Experiences for Aviation',
      answer: 'We deliver integrated FM services to the aviation sector to ensure that travellers and colleagues feel secure and sheltered in the airports, lounges, and terminals we serve. We assist in creating spaces that attract and retain the right personnel, enhancing the overall travel experience for your customers.'
    },
    {
      question: 'Best Productivity for Aviation',
      answer: 'Our productivity solutions for aviation include streamlined check-in processes, efficient baggage handling systems, and optimized passenger flow management. This ensures timely departures and a smooth journey for passengers.'
    },
    {
      question: 'Best Practices for Aviation',
      answer: 'We adhere to the highest international standards for aviation facility management. Our best practices include rigorous safety protocols, regular maintenance schedules, and continuous training for our staff to ensure operational excellence.'
    },
    {
      question: 'Best Resilience for Aviation',
      answer: 'We build resilience into our services by implementing robust contingency plans, utilizing predictive maintenance for critical systems, and ensuring rapid response teams are available 24/7 to handle any operational disruptions.'
    },
    {
      question: 'Best Outcome for Aviation',
      answer: 'Our goal is to deliver the best outcomes for our aviation partners, including enhanced passenger satisfaction, improved operational efficiency, reduced costs, and a reputation for safety and reliability.'
    }
  ];
  
  const serviceAccordionData = [
      {
          question: 'Facilities Management (FM) for Aviation',
          answer: 'FM services streamline operations, can reduce costs, and improve efficiency. Managing various operational aspects, we help airports and airlines focus on their core activities, enhancing overall performance and passenger satisfaction.'
      },
      {
          question: 'Hard Services for Aviation',
          answer: 'Our hard services cover all mechanical, electrical, and plumbing (MEP) systems, ensuring that the airport infrastructure is reliable and efficient. This includes HVAC, power systems, and runway lighting maintenance.'
      },
      {
          question: 'Cleaning for Aviation',
          answer: 'We provide specialized cleaning services for high-traffic areas like terminals, lounges, and restrooms, using eco-friendly products and smart technologies to maintain the highest standards of hygiene.'
      },
      {
          question: 'Pest Control for Aviation',
          answer: 'Our integrated pest management solutions are crucial for maintaining a safe and healthy environment in airports, preventing disruptions to operations and ensuring compliance with international health regulations.'
      }
  ];

  const faqData = [
    {
      question: 'Can you customise facilities management plans to meet the complexities of transport facilities?',
      answer: 'We recognise the distinctive demands of aviation and gateways facilities and collaborate closely with each entity to craft customised facilities management plans that address specific aviation regulations, safety protocols, and operational needs.'
    },
    {
      question: 'Can you handle response protocols and manage critical systems at transport facilities efficiently?',
      answer: 'Absolutely. Our teams are trained in emergency response protocols and are proficient in managing critical systems like baggage handling, HVAC, and fire safety to ensure minimal disruption and maximum safety.'
    },
    {
      question: 'Can you provide case studies showcasing successful projects undertaken for transport facilities?',
      answer: 'Yes, we have a portfolio of successful projects with major airports and transport hubs. We can provide detailed case studies upon request that demonstrate our expertise and the positive outcomes we\'ve delivered for our clients.'
    },
    {
      question: 'How do you ensure compliance for transport facilities?',
      answer: 'Compliance is at the core of our operations. We stay updated with all local and international aviation regulations, conduct regular audits, and ensure our staff is fully trained to meet all compliance requirements.'
    },
    {
      question: 'How do you ensure environmental sustainability and safety compliance for transport settings?',
      answer: 'We implement green cleaning practices, waste management programs to increase recycling, and energy-efficient solutions. Safety is paramount, with strict adherence to all safety regulations and continuous training for our teams.'
    },
    {
      question: 'What specific facilities management services do you offer for transport facilities?',
      answer: 'We offer a comprehensive suite of services including hard services (MEP), soft services (cleaning, pest control), passenger assistance (Digi Buddy), airfield marking, and project management, all tailored to the unique needs of the aviation sector.'
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };
  
  const toggleServiceAccordion = (index: number) => {
    setOpenServiceAccordion(openServiceAccordion === index ? null : index);
  };
  
  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const customerStories = [
    {
      imageSrc: "https://images.unsplash.com/photo-1506521781263-d3f3cde3b2b6?q=80&w=2070&auto=format&fit=crop",
      category: "Corporate • Technology",
      title: "Safeguarding our customers site and technology with guarding and cyber security.",
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop",
      category: "Catering",
      title: "NHS food transformation that's having a positive environmental impact in the community.",
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1444492417206-81825a6e4e52?q=80&w=2070&auto=format&fit=crop",
      category: "Sustainability",
      title: "Improving sustainability at Greenham Business Park by focusing on CO2 reduction.",
    }
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-8 md:space-y-12">
      {/* Hero Section */}
      <div
        className="relative rounded-3xl overflow-hidden shadow-2xl flex items-center bg-cover bg-center min-h-[500px] md:min-h-[600px]"
        role="banner"
        aria-labelledby="aviation-hero-heading"
        style={{ 
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2), transparent), url('${backgroundImageUrl}')`
        }}
      >
        <div className="relative z-10 p-8 sm:p-12 lg:p-16">
            <div className="bg-[#FEFBF9]/95 backdrop-blur-sm p-8 sm:p-10 md:p-12 rounded-2xl max-w-2xl shadow-xl bg-[radial-gradient(circle,rgba(212,178,88,0.05)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-6">
                <a href="#" className="bg-[#D4B258] text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-[#C3A24B] transition-colors">
                    We're hiring
                </a>
                <a href="#" className="text-gray-800 font-medium text-sm flex items-center group">
                    IxoraGroup Careers
                    <ArrowRightIcon className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </a>
            </div>

            <h1 id="aviation-hero-heading" className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 !leading-tight tracking-tight">
                Aviation
            </h1>

            <p className="mt-6 text-base md:text-lg text-gray-600 max-w-xl">
                Trusted by over sixty airlines and airports, we're delivering aviation facilities services throughout the globe. Our responsibility is to prioritise passengers and ensure best resilience and experiences.
            </p>
            </div>
        </div>
      </div>

      {/* Aviation Sector Services Section */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 !leading-tight tracking-tight">
              Aviation sector services
            </h2>
            <p className="mt-6 text-gray-600">
              IxoraGroup provides facilities services for airlines and airports, including engineering services, cleaning, project management, energy management, airfield marking solutions, operations and maintenance of baggage belt systems and scanning systems and concierge support. Our services ensure a seamless, secure, and comfortable experience for passengers and colleagues, from check-in to boarding, across global aviation hubs.
            </p>
            <ul className="mt-8 space-y-4">
              <li className="flex items-center">
                <CheckCircleIcon className="w-6 h-6 text-[#D4B258] mr-3 flex-shrink-0" />
                <span className="text-gray-700">Integrated Facility Management</span>
              </li>
              <li className="flex items-center">
                <CheckCircleIcon className="w-6 h-6 text-[#D4B258] mr-3 flex-shrink-0" />
                <span className="text-gray-700">Digi Buddy, Passenger Services and Information Desks</span>
              </li>
              <li className="flex items-center">
                <CheckCircleIcon className="w-6 h-6 text-[#D4B258] mr-3 flex-shrink-0" />
                <span className="text-gray-700">Project Management</span>
              </li>
              <li className="flex items-center">
                <CheckCircleIcon className="w-6 h-6 text-[#D4B258] mr-3 flex-shrink-0" />
                <span className="text-gray-700">Energy Management</span>
              </li>
              <li className="flex items-center">
                <CheckCircleIcon className="w-6 h-6 text-[#D4B258] mr-3 flex-shrink-0" />
                <span className="text-gray-700">Airfield Marking Solutions</span>
              </li>
            </ul>
            <div className="mt-10">
              <a href="#" className="bg-[#D4B258] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#C3A24B] transition-colors inline-block">
                Contact our Aviation Team
              </a>
            </div>
          </div>
          {/* Image content */}
          <div className="rounded-2xl overflow-hidden">
            <img 
              src="https://res.cloudinary.com/ddtw77k8l/image/upload/v1756202534/Company%20assests/download_22_iaub6t.avif"
              alt="Sunset view from an airport terminal with a plane taking off."
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Aviation Facilities Management Section */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Text content */}
          <div className="bg-[#FEFBF9] p-8 rounded-2xl border border-gray-100 h-full">
            <h2 className="text-4xl font-bold text-gray-800 !leading-tight tracking-tight">
              Aviation Facilities Management
            </h2>
            <p className="mt-6 text-gray-600">
              Our mission’s BEST strategy and ethos addresses five areas of concern highlighted by industry leaders in reference to facilities management: Experiences, Productivity, Practices, Resilience and Outcomes.
            </p>
            <div className="mt-10">
              <a href="#" className="bg-[#D4B258] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#C3A24B] transition-colors inline-block">
                Our Mission & Best Strategy
              </a>
            </div>
          </div>
          {/* Right Accordion content */}
          <div>
            {accordionData.map((item, index) => (
              <div key={index} className="border-b border-gray-200">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center py-5 text-left gap-4"
                  aria-expanded={openAccordion === index}
                >
                  <span className="font-medium text-gray-800">{item.question}</span>
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border border-amber-200 text-[#D4B258]">
                    {openAccordion === index ? <MinusIcon className="w-5 h-5" /> : <PlusIcon className="w-5 h-5" />}
                  </div>
                </button>
                <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${openAccordion === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden">
                    <div className="text-gray-600 pr-12 pt-2 pb-6">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Service Details Section */}
       <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Accordion content */}
          <div className="lg:col-span-1">
             {serviceAccordionData.map((item, index) => (
              <div key={index} className="border-b border-gray-200">
                <button
                  onClick={() => toggleServiceAccordion(index)}
                  className="w-full flex justify-between items-center py-5 text-left gap-4"
                  aria-expanded={openServiceAccordion === index}
                >
                  <span className="font-medium text-gray-800">{item.question}</span>
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border border-amber-200 text-[#D4B258]">
                    {openServiceAccordion === index ? <MinusIcon className="w-5 h-5" /> : <PlusIcon className="w-5 h-5" />}
                  </div>
                </button>
                <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${openServiceAccordion === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden">
                    <div className="text-gray-600 pr-12 pt-2 pb-6">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Right CTA content */}
          <div className="bg-[#FEFBF9] p-8 rounded-2xl border border-gray-100 h-full flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-gray-800 !leading-tight tracking-tight">
              Overcome challenges in Aviation through service
            </h2>
            <p className="mt-6 text-gray-600">
              Our job is to help make people and places the best they can be through facilities services that deliver the best experience and outcomes.
            </p>
            <div className="mt-10">
              <a href="#" className="bg-[#D4B258] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#C3A24B] transition-colors inline-block">
                Contact Our Aviation Team
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Infrastructure Resilience Section */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image content */}
          <div className="rounded-2xl overflow-hidden">
            <img 
              src="https://res.cloudinary.com/ddtw77k8l/image/upload/v1756367883/Company%20assests/download33_tmpusw.avif"
              alt="Airplane on the tarmac at sunset, representing infrastructure resilience."
              className="w-full h-full object-cover"
            />
          </div>
          {/* Text content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 !leading-tight tracking-tight">
              Infrastructure resilience
            </h2>
            <div className="mt-6 space-y-4 text-gray-600">
                <p>
                    Our hard services encompass operations, maintenance, repairs and project management. This guarantees that all utilities and engineering assets from power supply systems to cooling systems are in top condition.
                </p>
                <p>
                    In addition, we also manage other critical infrastructure such as fire safety systems, pumps, boilers, STP, ETP, WTP and water features.
                </p>
                <p>
                    Our planned, preventive and predictive maintenance plan ensures that these engineering assets function optimally, providing a safe and continuous operation.
                </p>
                <p>
                    This attention to infrastructure detail is crucial for maintaining the seamless flow and safety at airports, from the smallest fittings to the most complex systems. With IxoraGroup, aviation hubs can rely on robust support for their infrastructure, underpinning the smooth running of their daily operations.
                </p>
            </div>
          </div>
        </div>
      </div>

      {/* Integrated Facilities Solutions Section */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 !leading-tight tracking-tight">
              Integrated facilities solutions for seamless operations
            </h2>
            <div className="mt-6 space-y-4 text-gray-600">
                <p>
                    Our teams maintain cleanliness and assist in passenger care in airports alongside operations and maintenance of scanning systems and baggage handling systems. They ensure that airports, lounges and facilities are well-maintained.
                </p>
                <p>
                    With extensive experience in the aviation sector, we offer integrated facilities management, Digi Buddy services, concierge and information desk operations, horticulture management, IoT solutions, airfield marking and project management solutions.
                </p>
            </div>
          </div>
          {/* Image content */}
          <div className="rounded-2xl overflow-hidden">
            <img 
              src="https://res.cloudinary.com/ddtw77k8l/image/upload/v1756533707/download_4_kcwpmu.avif"
              alt="Workers with tablet inspecting baggage handling system."
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Using technology for Aviation Section */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image content */}
          <div className="rounded-2xl overflow-hidden">
            <img 
              src="https://res.cloudinary.com/ddtw77k8l/image/upload/v1756533685/OCS-frontline-colleague_brpnbh.jpg"
              alt="IxoraGroup frontline colleague using technology"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Text content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 !leading-tight tracking-tight">
              Using technology for Aviation
            </h2>
            <div className="mt-6 space-y-4 text-gray-600">
                <p>
                    We complement our expert service with innovation and technology to create the very best outcomes for both you and your passengers. Everyday OCS Digi Buddys under Digi Yatra services facilitate thousands of airport passengers to switch from physical documentation to a digital facial recognition process. Our trained and vetted staff and technology stack ensures that passengers enjoy the very best experience possible.
                </p>
                <p>
                    From beacon technology that ensures equipment and assets are in the right place to robotic cleaning technology such as autonomous floor scrubbers and vacuuming robots, we use technology to deliver meaningful efficiencies and outcomes.
                </p>
            </div>
          </div>
        </div>
      </div>

      {/* IxoraGroup Customer Stories Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 !leading-tight tracking-tight">
              IxoraGroup customer stories
            </h2>
            <p className="mt-4 text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Discover how we're helping transport facilities be the best they can be.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {customerStories.map((story, index) => (
              <div key={index} className="rounded-2xl overflow-hidden group shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col bg-[#FEFBF9]">
                <div className="overflow-hidden">
                  <img
                    src={story.imageSrc}
                    alt={story.category}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-sm font-semibold text-gray-600">{story.category}</p>
                  <h3 className="mt-2 text-lg font-semibold text-gray-800 flex-grow">
                    {story.title}
                  </h3>
                  <a href="#" className="mt-4 font-semibold text-[#D4B258] self-start border-b-2 border-[#D4B258] hover:opacity-80 transition">
                    Read their story
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Airline Industries + ESG Section */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-sm">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 !leading-tight tracking-tight">
            Airline Industries + ESG
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            We're supporting our aviation customers with their ESG goals, initiatives and commitments.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Environmental Card */}
          <div className="bg-[#FEFBF9] border border-gray-100 rounded-2xl overflow-hidden group shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col">
            <div className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071&auto=format&fit=crop"
                alt="Lush green forest from above"
                className="w-full h-56 object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-bold text-gray-800">
                      Environmental
                  </h3>
                  <a href="#" className="relative w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full text-white bg-[#D4B258] hover:bg-[#C3A24B] transition-colors">
                      <ArrowUpRightIcon className="w-5 h-5 transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0" />
                      <ArrowRightIcon className="w-5 h-5 absolute transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100" />
                  </a>
              </div>
              <p className="mt-2 text-gray-600 flex-grow pr-12">
                We are committed to environmental stewardship, focusing on sustainable practices and reducing our ecological footprint globally.
              </p>
            </div>
          </div>
          {/* Governance Card */}
          <div className="bg-[#FEFBF9] border border-gray-100 rounded-2xl overflow-hidden group shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col">
            <div className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1542372882-68393f6c3216?q=80&w=1974&auto=format&fit=crop"
                alt="Modern skyscrapers reflecting the sun"
                className="w-full h-56 object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-bold text-gray-800">
                      Governance
                  </h3>
                  <a href="#" className="relative w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full text-white bg-[#D4B258] hover:bg-[#C3A24B] transition-colors">
                      <ArrowUpRightIcon className="w-5 h-5 transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0" />
                      <ArrowRightIcon className="w-5 h-5 absolute transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100" />
                  </a>
              </div>
              <p className="mt-2 text-gray-600 flex-grow pr-12">
                Upholds robust governance, ensuring transparency, accountability, and ethical integrity across all global business operations.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Connect with your IxoraGroup Team Section */}
      <div className="py-8">
        <div 
          className="relative rounded-3xl p-8 md:p-12 lg:p-16 text-white text-center overflow-hidden" 
          style={{ backgroundColor: '#192A51' }}
        >
          <div 
              className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-50"
              aria-hidden="true"
          ></div>
          <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold !leading-tight tracking-tight">
                  Connect with your IxoraGroup team
              </h2>
              <p className="mt-4 text-base md:text-lg text-white/80 max-w-3xl mx-auto">
                  We're ready to deliver the best experiences, productivity, practices, resilience and outcomes and we look forward to connecting with you and your team.
              </p>
              <div className="mt-8">
                  <a href="#" className="bg-[#D4B258] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#C3A24B] transition-colors duration-200">
                      Contact Our Aviation Team
                  </a>
              </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-sm">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 !leading-tight tracking-tight mb-10">
            Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8">
            {faqData.map((faq, index) => (
                <div key={index} className="border-b border-gray-200">
                    <button
                        onClick={() => toggleFaq(index)}
                        className="w-full flex justify-between items-start py-6 text-left gap-4"
                        aria-expanded={openFaq === index}
                    >
                        <span className="font-medium text-gray-800 pr-4">{faq.question}</span>
                        <div className="flex-shrink-0 mt-1 w-8 h-8 flex items-center justify-center rounded-full border border-amber-300 bg-amber-50 text-[#D4B258]">
                             {openFaq === index ? <MinusIcon className="w-5 h-5" /> : <PlusIcon className="w-5 h-5" />}
                        </div>
                    </button>
                    <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${openFaq === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                        <div className="overflow-hidden">
                            <div className="text-gray-600 pr-12 pt-2 pb-6">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>

    </div>
  );
};

export default AviationPage;