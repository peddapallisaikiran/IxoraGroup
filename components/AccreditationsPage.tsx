import React from 'react';

const DotPattern: React.FC<{ className?: string }> = ({ className }) => (
  <div
    className={`absolute w-48 h-48 opacity-40 ${className}`}
    style={{
      backgroundImage: 'radial-gradient(circle, #FDBA74 1px, transparent 1px)',
      backgroundSize: '1rem 1rem',
      maskImage: 'radial-gradient(circle at center, black 0%, transparent 70%)',
      WebkitMaskImage: 'radial-gradient(circle at center, black 0%, transparent 70%)',
    }}
    aria-hidden="true"
  />
);

const logos = [
  'https://res.cloudinary.com/ddtw77k8l/image/upload/v1756779331/Company%20assests/lgbt_logo_x5v9wx.png',
  'https://res.cloudinary.com/ddtw77k8l/image/upload/v1756779331/Company%20assests/irata_logo_k9jpxg.png',
  'https://res.cloudinary.com/ddtw77k8l/image/upload/v1756780330/Company%20assests/disability-confident-employer_g49q9n.png',
  'https://res.cloudinary.com/ddtw77k8l/image/upload/v1756779331/Company%20assests/home_office_logo_m5h2zf.png',
  'https://res.cloudinary.com/ddtw77k8l/image/upload/v1756779330/Company%20assests/food_for_life_logo_fdyxbn.png',
  'https://res.cloudinary.com/ddtw77k8l/image/upload/v1756779330/Company%20assests/red_tractor_logo_hswc6z.png',
  'https://res.cloudinary.com/ddtw77k8l/image/upload/v1756779330/Company%20assests/revo_logo_d2jrvw.png',
  'https://res.cloudinary.com/ddtw77k8l/image/upload/v1756779330/Company%20assests/city_of_london_logo_m0qslv.png',
  'https://res.cloudinary.com/ddtw77k8l/image/upload/v1756779329/Company%20assests/jsarc_logo_kzvbfl.png',
  'https://res.cloudinary.com/ddtw77k8l/image/upload/v1756779329/Company%20assests/npsa_logo_lbywke.png',
  'https://res.cloudinary.com/ddtw77k8l/image/upload/v1756779329/Company%20assests/naa_logo_e6vqlp.png',
  'https://res.cloudinary.com/ddtw77k8l/image/upload/v1756779328/Company%20assests/ukcma_logo_c0vjnd.png',
  'https://res.cloudinary.com/ddtw77k8l/image/upload/v1756779328/Company%20assests/bali_logo_y5a5uu.png',
  'https://res.cloudinary.com/ddtw77k8l/image/upload/v1756779328/Company%20assests/lenels2_logo_j0x4gq.png',
  'https://res.cloudinary.com/ddtw77k8l/image/upload/v1756779328/Company%20assests/gas_safe_logo_i7x9xq.png',
  'https://res.cloudinary.com/ddtw77k8l/image/upload/v1756719312/bharosa_srfcuj.jpg',
  'https://res.cloudinary.com/ddtw77k8l/image/upload/v1756719312/amazon_czzydg.jpg',
  'https://res.cloudinary.com/ddtw77k8l/image/upload/v1756722692/Cyber_bpswvl.webp',
  'https://res.cloudinary.com/ddtw77k8l/image/upload/v1756722708/HUDCO_nn19dt.jpg',
  'https://res.cloudinary.com/ddtw77k8l/image/upload/v1756722709/IIRR_qctmml.jpg',
  'https://res.cloudinary.com/ddtw77k8l/image/upload/v1756722714/Hyderabad-Metro-logo_ner8hi.png',
  'https://res.cloudinary.com/ddtw77k8l/image/upload/v1756722728/Police_ngmcen.jpg',
  'https://res.cloudinary.com/ddtw77k8l/image/upload/v1756722743/GHMC_c7lljx.jpg',
  'https://res.cloudinary.com/ddtw77k8l/image/upload/v1756722753/government-of-telangana-logo-4949BC8A09-seeklogo.com_qnqpta.png',
  'https://res.cloudinary.com/ddtw77k8l/image/upload/v1756722762/Ts_curruption_breuo_j2sfn0.jpg',
  'https://res.cloudinary.com/ddtw77k8l/image/upload/v1756722818/container-corporation-of-india-ltd-concor-logo-vector_zkktle.png',
];

const AccreditationsPage: React.FC = () => {
  return (
    <div className="bg-white p-4 sm:p-6 lg:p-8 space-y-12 md:space-y-16">
      <div className="max-w-5xl mx-auto">
        <div 
          className="relative bg-[#FEFBF9] rounded-3xl p-8 sm:p-12 md:p-16 text-center overflow-hidden shadow-sm border border-gray-100"
        >
          <DotPattern className="top-0 left-0 -translate-x-1/4 -translate-y-1/4" />
          <DotPattern className="bottom-0 right-0 translate-x-1/4 translate-y-1/4" />

          <div className="relative z-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 !leading-tight tracking-tight">
              Accreditations and Certification
            </h1>
            <p className="mt-8 text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              As a business, striving to be the best is at the heart of everything we do. Across the world, our services are continually assessed against industry standards, ensuring we're delivering the highest quality possible to our customers.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {logos.map((logo, index) => (
            <div 
              key={index} 
              className="bg-white border rounded-2xl p-4 flex items-center justify-center h-32 shadow-sm hover:shadow-md transition-shadow duration-300"
              style={{ borderColor: 'rgba(212, 178, 88, 0.3)' }}
            >
              <img 
                src={logo} 
                alt={`Accreditation logo ${index + 1}`} 
                className="max-h-24 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccreditationsPage;