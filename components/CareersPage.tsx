import React, { useState, useMemo } from 'react';
import { ArrowRightIcon } from './icons/ArrowRightIcon';
import { SearchIcon } from './icons/SearchIcon';
import { CareersIcon } from './icons/CareersIcon';
import { LocationPinIcon } from './icons/LocationPinIcon';
import { ShieldCheckIcon } from './icons/ShieldCheckIcon'; // Re-used for Trust
import { RespectIcon } from './icons/RespectIcon';
import { ColleaguesIcon } from './icons/ColleaguesIcon'; // Re-used for Unity
import { EmpowermentIcon } from './icons/EmpowermentIcon';
import { GrowthIcon } from './icons/GrowthIcon';
import { HealthcareIcon } from './icons/HealthcareIcon'; // Re-used for Wellness
import { DiversityIcon } from './icons/DiversityIcon';
import { UsersGroupIcon } from './icons/UsersGroupIcon'; // Re-used for Community
import { AwardsIcon } from './icons/AwardsIcon'; // Re-used for Recognition
import { FlexibilityIcon } from './icons/FlexibilityIcon';

const jobs = [
    { title: 'Senior Facilities Manager', location: 'Mumbai, India', department: 'Operations', type: 'Full-time' },
    { title: 'Data Center Technician', location: 'Hyderabad, India', department: 'Technology', type: 'Full-time' },
    { title: 'Marketing Executive', location: 'Remote', department: 'Marketing', type: 'Full-time' },
    { title: 'Human Resources Generalist', location: 'Delhi, India', department: 'HR', type: 'Full-time' },
    { title: 'Aviation Services Coordinator', location: 'Bangalore, India', department: 'Operations', type: 'Full-time' },
    { title: 'ESG Analyst', location: 'Mumbai, India', department: 'ESG', type: 'Full-time' },
    { title: 'Lead Software Engineer', location: 'Remote', department: 'Technology', type: 'Full-time' },
    { title: 'Junior Accountant', location: 'Hyderabad, India', department: 'Finance', type: 'Full-time' },
    { title: 'Client Relationship Manager', location: 'Delhi, India', department: 'Sales', type: 'Full-time' },
    { title: 'Operations Intern', location: 'Bangalore, India', department: 'Operations', type: 'Internship' },
];

const allDepartments = [...new Set(jobs.map(job => job.department))];
const allLocations = [...new Set(jobs.map(job => job.location))];

const ValueCard: React.FC<{ icon: React.ReactNode; title: string; description: string; }> = ({ icon, title, description }) => (
    <div className="bg-white rounded-2xl p-6 text-center shadow-md border border-gray-100 transform hover:-translate-y-2 transition-transform duration-300">
        <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100/50 text-[#D4B258]">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <p className="mt-2 text-gray-600 text-sm">{description}</p>
    </div>
);

const BenefitCard: React.FC<{ icon: React.ReactNode; title: string; }> = ({ icon, title }) => (
    <div className="flex items-center p-4 bg-gray-50 rounded-xl">
        <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-amber-100/50 text-[#D4B258]">
            {icon}
        </div>
        <h4 className="ml-4 font-semibold text-gray-700">{title}</h4>
    </div>
);

const CareersPage: React.FC<{ navigate: (page: string, data?: any) => void; }> = ({ navigate }) => {
    const backgroundImageUrl = "https://images.unsplash.com/photo-1549923746-c342d4a39818?q=80&w=2070&auto=format&fit=crop";

    const [searchTerm, setSearchTerm] = useState('');
    const [department, setDepartment] = useState('all');
    const [location, setLocation] = useState('all');

    const filteredJobs = useMemo(() => {
        return jobs.filter(job => 
            (job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
             job.department.toLowerCase().includes(searchTerm.toLowerCase()) || 
             job.location.toLowerCase().includes(searchTerm.toLowerCase())) &&
            (department === 'all' || job.department === department) &&
            (location === 'all' || job.location === location)
        );
    }, [searchTerm, department, location]);

    const handleSearchClick = () => {
        const jobsSection = document.getElementById('current-openings');
        if (jobsSection) {
            jobsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="p-4 sm:p-6 lg:p-8 space-y-12 md:space-y-16">
            {/* Hero Section */}
            <div
                className="relative rounded-3xl overflow-hidden shadow-2xl flex items-center bg-cover bg-center min-h-[500px] md:min-h-[600px]"
                role="banner"
                style={{ backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2), transparent), url('${backgroundImageUrl}')` }}
            >
                <div className="relative z-10 p-8 sm:p-12 lg:p-16">
                    <div className="bg-[#FEFBF9]/95 backdrop-blur-sm p-8 sm:p-10 md:p-12 rounded-2xl max-w-2xl shadow-xl">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 !leading-tight tracking-tight">
                            Join Our Mission
                        </h1>
                        <p className="mt-6 text-base md:text-lg text-gray-600 max-w-xl">
                            Become part of a global team dedicated to making people and places the best they can be. Explore a rewarding career at IxoraGroup.
                        </p>
                        <div className="mt-10">
                            <button onClick={handleSearchClick} className="bg-[#D4B258] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#C3A24B] transition-colors inline-flex items-center">
                                Search Open Roles <ArrowRightIcon className="w-5 h-5 ml-2" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* TRUE Values Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 !leading-tight tracking-tight">
                        Our TRUE Values
                    </h2>
                    <p className="mt-4 text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                        Our values are the foundation of our culture and guide every decision we make. We live by Trust, Respect, Unity, and Empowerment.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <ValueCard icon={<ShieldCheckIcon className="w-8 h-8"/>} title="Trust" description="We build relationships based on integrity, transparency, and reliability."/>
                    <ValueCard icon={<RespectIcon className="w-8 h-8"/>} title="Respect" description="We value every individual's contribution, fostering a culture of dignity and inclusion."/>
                    <ValueCard icon={<ColleaguesIcon className="w-8 h-8"/>} title="Unity" description="We collaborate as one global team to achieve shared goals and celebrate success."/>
                    <ValueCard icon={<EmpowermentIcon className="w-8 h-8"/>} title="Empowerment" description="We provide our colleagues with the tools and autonomy to innovate and excel."/>
                </div>
            </section>

            {/* Perks & Benefits Section */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-sm">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    <div className="flex flex-col justify-center">
                        <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 !leading-tight tracking-tight">
                            Perks & Benefits
                        </h2>
                        <p className="mt-6 text-gray-600">
                            We invest in our people. Our comprehensive benefits package is designed to support your professional growth, personal well-being, and work-life balance.
                        </p>
                        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <BenefitCard icon={<GrowthIcon className="w-6 h-6"/>} title="Professional Development"/>
                            <BenefitCard icon={<HealthcareIcon className="w-6 h-6"/>} title="Health & Wellness"/>
                            <BenefitCard icon={<DiversityIcon className="w-6 h-6"/>} title="Inclusive Culture"/>
                            <BenefitCard icon={<UsersGroupIcon className="w-6 h-6"/>} title="Community Impact"/>
                            <BenefitCard icon={<AwardsIcon className="w-6 h-6"/>} title="Recognition & Rewards"/>
                            <BenefitCard icon={<FlexibilityIcon className="w-6 h-6"/>} title="Work-Life Balance"/>
                        </div>
                    </div>
                    <div className="rounded-2xl overflow-hidden shadow-lg">
                        <img 
                            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1974&auto=format&fit=crop"
                            alt="A diverse group of colleagues collaborating in a modern office."
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Current Openings Section */}
            <section id="current-openings" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full scroll-mt-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 !leading-tight tracking-tight">
                        Current Openings
                    </h2>
                    <p className="mt-4 text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                        Find your next opportunity. We're looking for passionate individuals to join us on our mission.
                    </p>
                </div>
                {/* Search and Filters */}
                <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-md border border-gray-100 mb-8 grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                    <div className="relative">
                        <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"/>
                        <input
                            type="text"
                            placeholder="Search by title, department..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full h-12 pl-11 pr-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-300 focus:border-amber-400"
                        />
                    </div>
                    <select value={department} onChange={e => setDepartment(e.target.value)} className="w-full h-12 px-4 border border-gray-200 rounded-lg bg-white">
                        <option value="all">All Departments</option>
                        {allDepartments.map(dep => <option key={dep} value={dep}>{dep}</option>)}
                    </select>
                     <select value={location} onChange={e => setLocation(e.target.value)} className="w-full h-12 px-4 border border-gray-200 rounded-lg bg-white">
                        <option value="all">All Locations</option>
                        {allLocations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
                    </select>
                </div>
                {/* Job List */}
                <div className="space-y-4">
                    {filteredJobs.length > 0 ? (
                        filteredJobs.map((job, index) => (
                            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4 hover:border-amber-300 hover:shadow-lg transition-all">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800">{job.title}</h3>
                                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                                        <span className="flex items-center gap-1"><CareersIcon className="w-4 h-4"/> {job.department}</span>
                                        <span className="flex items-center gap-1"><LocationPinIcon className="w-4 h-4"/> {job.location}</span>
                                    </div>
                                </div>
                                <a href="#" className="bg-[#D4B258] text-white font-semibold px-6 py-2.5 rounded-full hover:bg-[#C3A24B] transition-colors flex-shrink-0">
                                    Apply Now
                                </a>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-12 bg-white rounded-2xl shadow-sm border border-gray-100">
                            <h3 className="text-xl font-semibold text-gray-700">No matching openings found</h3>
                            <p className="text-gray-500 mt-2">Try adjusting your search filters or check back later.</p>
                        </div>
                    )}
                </div>
            </section>
            
        </div>
    );
};

export default CareersPage;
