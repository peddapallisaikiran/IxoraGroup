import React, { useState, useRef, useEffect } from 'react';
import { IxoraGroupLogo } from './IxoraGroupLogo';
import { ChevronDownIcon } from './icons/ChevronDownIcon';
import { SearchIcon } from './icons/SearchIcon';
import { MenuIcon } from './icons/MenuIcon';
import { CloseIcon } from './icons/CloseIcon';
import { PhoneIcon } from './icons/PhoneIcon';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { ArrowUpRightIcon } from './icons/ArrowUpRightIcon';
import { ArrowRightIcon } from './icons/ArrowRightIcon';
import { DataCentreIcon } from './icons/DataCentreIcon';
import { EducationIcon } from './icons/EducationIcon';
import { CommercialSpacesIcon } from './icons/CommercialSpacesIcon';
import { HealthcareIcon } from './icons/HealthcareIcon';
import { AZIcon } from './icons/AZIcon';
import { AviationIcon } from './icons/AviationIcon';
import { ManufacturingIcon } from './icons/ManufacturingIcon';
import { RetailIcon } from './icons/RetailIcon';
import { HospitalityIcon } from './icons/HospitalityIcon';
import { FacilitiesManagementIcon } from './icons/FacilitiesManagementIcon';
import { HardServicesIcon } from './icons/HardServicesIcon';
import { CarbonEnergyIcon } from './icons/CarbonEnergyIcon';
import { LandscapingIcon } from './icons/LandscapingIcon';
import { CleaningIcon } from './icons/CleaningIcon';
import { PestControlIcon } from './icons/PestControlIcon';
import { FrontOfHouseIcon } from './icons/FrontOfHouseIcon';
import { QhseIcon } from './icons/QhseIcon';
import { EnvironmentalIcon } from './icons/EnvironmentalIcon';
import { GovernanceIcon } from './icons/GovernanceIcon';
import { ModernSlaveryStatementIcon } from './icons/ModernSlaveryStatementIcon';
import { DiversityIcon } from './icons/DiversityIcon';
import { ApprenticeshipsIcon } from './icons/ApprenticeshipsIcon';
import { CodeOfConductIcon } from './icons/CodeOfConductIcon';
import { SocialIcon } from './icons/SocialIcon';
import { PoliciesLibraryIcon } from './icons/PoliciesLibraryIcon';
import { FoundationIcon } from './icons/FoundationIcon';
import { PeopleIntoWorkIcon } from './icons/PeopleIntoWorkIcon';
import { LeadershipTeamIcon } from './icons/LeadershipTeamIcon';
import { TrueValuesIcon } from './icons/TrueValuesIcon';
import { AwardsIcon } from './icons/AwardsIcon';
import { CareersIcon } from './icons/CareersIcon';
import { LocationPinIcon } from './icons/LocationPinIcon';
import { HistoryIcon } from './icons/HistoryIcon';
import { EsgIcon } from './icons/EsgIcon';
import { OurBrandsIcon } from './icons/OurBrandsIcon';
import { AccreditationsIcon } from './icons/AccreditationsIcon';
import { GlobalIcon } from './icons/GlobalIcon';
import { VisionIcon } from './icons/VisionIcon';
import { ColleaguesIcon } from './icons/ColleaguesIcon';

type ActiveMenu = 'sectors' | 'services' | 'esg' | 'about' | null;

const navLinks = [
    { name: 'Our Sectors', menu: 'sectors' as ActiveMenu, href: '#', page: null },
    { name: 'Our Services', menu: 'services' as ActiveMenu, href: '#', page: null },
    { name: 'Technology', menu: null, href: '#', page: 'technology' },
    { name: 'ESG', menu: 'esg' as ActiveMenu, href: '#', page: null },
    { name: 'About Us', menu: 'about' as ActiveMenu, href: '#', page: null },
    { name: 'Blogs', menu: null, href: '#', page: 'news' },
];

const TopBar: React.FC = () => (
    <div className="hidden lg:block bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-end items-center h-12 text-sm text-gray-700">
            <div className="flex items-center space-x-6">
                <a href="tel:+919059919999" className="flex items-center hover:text-[#D4B258]">
                    <PhoneIcon className="w-4 h-4 mr-2" />
                    <span>Call us on <strong>+91 90599 19999</strong></span>
                </a>
                <a href="#" className="flex items-center hover:text-[#D4B258]">
                    <WhatsAppIcon className="w-4 h-4 mr-2" />
                    <span>Chat on <strong>WhatsApp</strong></span>
                </a>
            </div>
        </div>
    </div>
);

const MegaMenuCard: React.FC<{ title: string; description: string; imageUrl: string; }> = ({ title, description, imageUrl }) => (
    <div className="w-full lg:w-1/3 bg-gray-50 rounded-lg p-6 group">
        <img src={imageUrl} alt={title} className="w-full h-40 object-cover rounded-md mb-4" />
        <div className="flex justify-between items-start">
            <div>
                <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
                <p className="text-sm text-gray-600 mt-2">{description}</p>
            </div>
            <a href="#" className="relative w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full text-white transition-colors duration-300 bg-[#D4B258] hover:bg-[#C3A24B]">
                 <div className="relative w-5 h-5">
                    <ArrowUpRightIcon className="absolute inset-0 w-full h-full transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0" />
                    <ArrowRightIcon className="absolute inset-0 w-full h-full transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100" />
                </div>
            </a>
        </div>
    </div>
);

const MegaMenuLink: React.FC<{ icon: React.ReactNode; text: string; onClick?: (e: React.MouseEvent) => void; }> = ({ icon, text, onClick }) => (
    <a href="#" onClick={onClick} className="flex items-center space-x-3 text-gray-700 group">
        <span className="text-gray-500 transition-colors duration-200 group-hover:text-[#D4B258]">{icon}</span>
        <span className="font-medium transition-colors duration-200 group-hover:text-[#D4B258]">{text}</span>
    </a>
);

const SectorsMegaMenu: React.FC<{ navigate: (page: string) => void }> = ({ navigate }) => {
    const leftColumnLinks = [
        { icon: <DataCentreIcon className="w-6 h-6" />, text: 'Data Centres', page: 'data-center' },
        { icon: <EducationIcon className="w-6 h-6" />, text: 'Education', page: 'education' },
        { icon: <CommercialSpacesIcon className="w-6 h-6" />, text: 'Commercial Spaces', page: 'commercial' },
        { icon: <HealthcareIcon className="w-6 h-6" />, text: 'Healthcare' },
        { icon: <AZIcon className="w-6 h-6" />, text: 'A-Z of Sector Locations' },
    ];
    const rightColumnLinks = [
        { icon: <AviationIcon className="w-6 h-6" />, text: 'Aviation', page: 'aviation' },
        { icon: <ManufacturingIcon className="w-6 h-6" />, text: 'Manufacturing' },
        { icon: <RetailIcon className="w-6 h-6" />, text: 'Retail' },
        { icon: <HospitalityIcon className="w-6 h-6" />, text: 'Hospitality' },
    ];
    return (
        <div className="flex gap-8">
            <MegaMenuCard 
                title="Our Sectors" 
                description="Click here or on the links to find out more about our sector-specific services."
                imageUrl="https://res.cloudinary.com/ddtw77k8l/image/upload/v1755672574/Company%20assests/download_14_mymkdb.avif"
            />
            <div className="w-2/3 grid grid-cols-2 gap-x-8 gap-y-4 content-start pt-6">
                <div className="col-span-2">
                    <h3 className="text-2xl font-bold text-gray-800">130 Years of sector-specific experience and insight</h3>
                    <p className="text-gray-600 mt-2">We're on a mission to make your people and places the best they can be.</p>
                </div>
                <div className="space-y-4 pt-4">{leftColumnLinks.map(link => 
                    <MegaMenuLink 
                        key={link.text} 
                        {...link} 
                        onClick={link.page ? (e) => { e.preventDefault(); navigate(link.page!); } : undefined} 
                    />
                )}</div>
                <div className="space-y-4 pt-4">{rightColumnLinks.map(link => 
                    <MegaMenuLink 
                        key={link.text} 
                        {...link}
                        onClick={link.page ? (e) => { e.preventDefault(); navigate(link.page!); } : undefined} 
                    />
                )}</div>
            </div>
        </div>
    );
};

const ServicesMegaMenu: React.FC = () => {
    const leftColumnLinks = [
        { icon: <FacilitiesManagementIcon className="w-6 h-6" />, text: 'Facilities Management' },
        { icon: <HardServicesIcon className="w-6 h-6" />, text: 'Hard Services' },
        { icon: <CarbonEnergyIcon className="w-6 h-6" />, text: 'Carbon & Energy Management' },
        { icon: <LandscapingIcon className="w-6 h-6" />, text: 'Landscaping' },
    ];
    const rightColumnLinks = [
        { icon: <CleaningIcon className="w-6 h-6" />, text: 'Cleaning' },
        { icon: <PestControlIcon className="w-6 h-6" />, text: 'Pest Control' },
        { icon: <FrontOfHouseIcon className="w-6 h-6" />, text: 'Front of House & Concierge' },
        { icon: <AZIcon className="w-6 h-6" />, text: 'A-Z of Places We Service' },
    ];
    return (
        <div className="flex gap-8">
            <MegaMenuCard 
                title="Our Services" 
                description="Click here or on the links to find out more about our facilities services."
                imageUrl="https://res.cloudinary.com/ddtw77k8l/image/upload/v1755675138/Company%20assests/download_15_nno3ma.avif"
            />
            <div className="w-2/3 grid grid-cols-2 gap-x-8 gap-y-4 content-start pt-6">
                 <div className="col-span-2">
                    <h3 className="text-2xl font-bold text-gray-800">Best practice services for best customer outcomes</h3>
                    <p className="text-gray-600 mt-2">We're on a mission to make your people and places the best they can be.</p>
                </div>
                <div className="space-y-4 pt-4">{leftColumnLinks.map(link => <MegaMenuLink key={link.text} {...link} />)}</div>
                <div className="space-y-4 pt-4">{rightColumnLinks.map(link => <MegaMenuLink key={link.text} {...link} />)}</div>
            </div>
        </div>
    );
};

const EsgMegaMenu: React.FC = () => {
    const leftColumnLinks = [
        { icon: <QhseIcon className="w-6 h-6" />, text: 'QHSE' },
        { icon: <EnvironmentalIcon className="w-6 h-6" />, text: 'Environmental' },
        { icon: <GovernanceIcon className="w-6 h-6" />, text: 'Governance' },
        { icon: <ModernSlaveryStatementIcon className="w-6 h-6" />, text: 'Modern Slavery Statement' },
        { icon: <DiversityIcon className="w-6 h-6" />, text: 'Diversity, Equity and Inclusion' },
        { icon: <ApprenticeshipsIcon className="w-6 h-6" />, text: 'Apprenticeships & Funded Learning' },
    ];
    const rightColumnLinks = [
        { icon: <CodeOfConductIcon className="w-6 h-6" />, text: 'Code of Conduct' },
        { icon: <SocialIcon className="w-6 h-6" />, text: 'Social' },
        { icon: <PoliciesLibraryIcon className="w-6 h-6" />, text: 'Policies Library' },
        { icon: <FoundationIcon className="w-6 h-6" />, text: 'IxoraGroup Foundation' },
        { icon: <PeopleIntoWorkIcon className="w-6 h-6" />, text: 'People into Work' },
        { icon: <VisionIcon className="w-6 h-6" />, text: 'Vision & Mission' },
    ];
    return (
        <div className="flex gap-8">
            <MegaMenuCard 
                title="ESG" 
                description="Environmental, Social and Governance (ESG) targets and initiatives align to our vision and mission."
                imageUrl="https://res.cloudinary.com/ddtw77k8l/image/upload/v1755681148/Company%20assests/download_16_egmhki.avif"
            />
            <div className="w-2/3 grid grid-cols-2 gap-x-8 gap-y-4 content-start pt-6">
                 <div className="col-span-2">
                    <h3 className="text-2xl font-bold text-gray-800">Doing the right things in the right way - the IxoraGroup way</h3>
                    <p className="text-gray-600 mt-2">Our aim is to make a meaningful and lasting impact for people, planet and purpose.</p>
                </div>
                <div className="space-y-4 pt-4">{leftColumnLinks.map(link => <MegaMenuLink key={link.text} {...link} />)}</div>
                <div className="space-y-4 pt-4">{rightColumnLinks.map(link => <MegaMenuLink key={link.text} {...link} />)}</div>
            </div>
        </div>
    );
};

const AboutUsMegaMenu: React.FC<{ navigate: (page: string) => void }> = ({ navigate }) => {
    const leftColumnLinks = [
        { icon: <VisionIcon className="w-6 h-6" />, text: 'Vision & Mission' },
        { icon: <ColleaguesIcon className="w-6 h-6" />, text: 'Our Colleagues' },
        { icon: <LeadershipTeamIcon className="w-6 h-6" />, text: 'Leadership Team' },
        { icon: <TrueValuesIcon className="w-6 h-6" />, text: 'TRUE Values' },
        { icon: <AwardsIcon className="w-6 h-6" />, text: 'Awards & Recognition' },
        { icon: <CareersIcon className="w-6 h-6" />, text: 'Careers', page: 'careers' },
        { icon: <LocationPinIcon className="w-6 h-6" />, text: 'Ixora India Office Locations' },
        { icon: <AZIcon className="w-6 h-6" />, text: 'IxoraGroup A-Z of Spaces and Places' },
    ];
    const rightColumnLinks = [
        { icon: <HistoryIcon className="w-6 h-6" />, text: 'History & Heritage' },
        { icon: <DiversityIcon className="w-6 h-6" />, text: 'Diversity, Equity & Inclusion' },
        { icon: <EsgIcon className="w-6 h-6" />, text: 'ESG' },
        { icon: <OurBrandsIcon className="w-6 h-6" />, text: 'Our Brands' },
        { icon: <AccreditationsIcon className="w-6 h-6" />, text: 'Accreditations & Certification' },
        { icon: <FoundationIcon className="w-6 h-6" />, text: 'IxoraGroup Foundation' },
        { icon: <GlobalIcon className="w-6 h-6" />, text: 'Global Locations' },
    ];
    return (
        <div className="flex gap-8">
            <MegaMenuCard 
                title="About Us" 
                description="Click here or on the links opposite to find out more about our ethos and approach."
                imageUrl="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2073&auto=format&fit=crop"
            />
            <div className="w-2/3 grid grid-cols-2 gap-x-8 gap-y-4 content-start pt-6">
                 <div className="col-span-2">
                    <h3 className="text-2xl font-bold text-gray-800">We're a global facilities services business</h3>
                    <p className="text-gray-600 mt-2">Join our mission to make people and places the best they can be.</p>
                </div>
                <div className="space-y-4 pt-4">{leftColumnLinks.map(link => 
                    <MegaMenuLink 
                        key={link.text} 
                        {...link}
                        onClick={link.page ? (e) => { e.preventDefault(); navigate(link.page!); } : undefined} 
                    />
                )}</div>
                <div className="space-y-4 pt-4">{rightColumnLinks.map(link => <MegaMenuLink key={link.text} {...link} />)}</div>
            </div>
        </div>
    );
};

const MainNav: React.FC<{ onMenuEnter: (menu: ActiveMenu) => void; activeMenu: ActiveMenu; navigate: (page: string, data?: any) => void; }> = ({ onMenuEnter, activeMenu, navigate }) => {
    return (
        <div className="bg-white/80 backdrop-blur-lg shadow-sm">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <a href="#" onClick={(e) => { e.preventDefault(); navigate('home'); }} aria-label="IxoraGroup Home">
                        <IxoraGroupLogo className="h-14" />
                    </a>
                    
                    <div className="hidden lg:flex items-center space-x-8">
                        <nav className="flex items-center space-x-8">
                            {navLinks.map(link => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="flex items-center font-bold text-gray-700 hover:text-[#D4B258] transition-colors whitespace-nowrap"
                                    onMouseEnter={() => onMenuEnter(link.menu)}
                                    onClick={(e) => {
                                        if (link.page) {
                                            e.preventDefault();
                                            navigate(link.page, null);
                                        }
                                    }}
                                >
                                    <span>{link.name}</span>
                                    {link.menu && <ChevronDownIcon className={`w-4 h-4 ml-1 transition-transform duration-200 ${activeMenu === link.menu ? 'rotate-180' : ''}`} />}
                                </a>
                            ))}
                        </nav>
                        <div className="flex items-center space-x-4">
                            <button className="text-gray-600 hover:text-[#D4B258]" aria-label="Search">
                                <SearchIcon className="w-6 h-6" />
                            </button>
                            <a href="#" className="bg-[#D4B258] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#C3A24B] transition-colors">
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const MobileMenu: React.FC<{ isOpen: boolean; onClose: () => void; navigate: (page: string, data?: any) => void; }> = ({ isOpen, onClose, navigate }) => {
    const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

    const toggleSubMenu = (menu: string | null) => {
        if (!menu) return;
        setOpenSubMenu(openSubMenu === menu ? null : menu);
    };

    const sectorLinks = [
        { icon: <DataCentreIcon className="w-5 h-5" />, text: 'Data Centres', page: 'data-center' },
        { icon: <EducationIcon className="w-5 h-5" />, text: 'Education', page: 'education' },
        { icon: <CommercialSpacesIcon className="w-5 h-5" />, text: 'Commercial Spaces', page: 'commercial' },
        { icon: <HealthcareIcon className="w-5 h-5" />, text: 'Healthcare' },
        { icon: <AviationIcon className="w-5 h-5" />, text: 'Aviation', page: 'aviation' },
        { icon: <ManufacturingIcon className="w-5 h-5" />, text: 'Manufacturing' },
        { icon: <RetailIcon className="w-5 h-5" />, text: 'Retail' },
        { icon: <HospitalityIcon className="w-5 h-5" />, text: 'Hospitality' },
        { icon: <AZIcon className="w-5 h-5" />, text: 'A-Z of Sector Locations' },
    ];

    const serviceLinks = [
        { icon: <FacilitiesManagementIcon className="w-5 h-5" />, text: 'Facilities Management' },
        { icon: <HardServicesIcon className="w-5 h-5" />, text: 'Hard Services' },
        { icon: <CarbonEnergyIcon className="w-5 h-5" />, text: 'Carbon & Energy Management' },
        { icon: <LandscapingIcon className="w-5 h-5" />, text: 'Landscaping' },
        { icon: <CleaningIcon className="w-5 h-5" />, text: 'Cleaning' },
        { icon: <PestControlIcon className="w-5 h-5" />, text: 'Pest Control' },
        { icon: <FrontOfHouseIcon className="w-5 h-5" />, text: 'Front of House & Concierge' },
        { icon: <AZIcon className="w-5 h-5" />, text: 'A-Z of Places We Service' },
    ];
    
    const esgLinks = [
        { icon: <QhseIcon className="w-5 h-5" />, text: 'QHSE' },
        { icon: <EnvironmentalIcon className="w-5 h-5" />, text: 'Environmental' },
        { icon: <GovernanceIcon className="w-5 h-5" />, text: 'Governance' },
        { icon: <ModernSlaveryStatementIcon className="w-5 h-5" />, text: 'Modern Slavery Statement' },
        { icon: <DiversityIcon className="w-5 h-5" />, text: 'Diversity, Equity and Inclusion' },
        { icon: <ApprenticeshipsIcon className="w-5 h-5" />, text: 'Apprenticeships & Funded Learning' },
        { icon: <CodeOfConductIcon className="w-5 h-5" />, text: 'Code of Conduct' },
        { icon: <SocialIcon className="w-5 h-5" />, text: 'Social' },
        { icon: <PoliciesLibraryIcon className="w-5 h-5" />, text: 'Policies Library' },
        { icon: <FoundationIcon className="w-5 h-5" />, text: 'IxoraGroup Foundation' },
        { icon: <PeopleIntoWorkIcon className="w-5 h-5" />, text: 'People into Work' },
        { icon: <VisionIcon className="w-5 h-5" />, text: 'Vision & Mission' },
    ];

    const aboutLinks = [
        { icon: <VisionIcon className="w-5 h-5" />, text: 'Vision & Mission' },
        { icon: <ColleaguesIcon className="w-5 h-5" />, text: 'Our Colleagues' },
        { icon: <LeadershipTeamIcon className="w-5 h-5" />, text: 'Leadership Team' },
        { icon: <TrueValuesIcon className="w-5 h-5" />, text: 'TRUE Values' },
        { icon: <AwardsIcon className="w-5 h-5" />, text: 'Awards & Recognition' },
        { icon: <CareersIcon className="w-5 h-5" />, text: 'Careers', page: 'careers' },
        { icon: <LocationPinIcon className="w-5 h-5" />, text: 'Ixora India Office Locations' },
        { icon: <AZIcon className="w-5 h-5" />, text: 'IxoraGroup A-Z of Spaces and Places' },
        { icon: <HistoryIcon className="w-5 h-5" />, text: 'History & Heritage' },
        { icon: <DiversityIcon className="w-5 h-5" />, text: 'Diversity, Equity & Inclusion' },
        { icon: <EsgIcon className="w-5 h-5" />, text: 'ESG' },
        { icon: <OurBrandsIcon className="w-5 h-5" />, text: 'Our Brands' },
        { icon: <AccreditationsIcon className="w-5 h-5" />, text: 'Accreditations & Certification' },
        { icon: <FoundationIcon className="w-5 h-5" />, text: 'IxoraGroup Foundation' },
        { icon: <GlobalIcon className="w-5 h-5" />, text: 'Global Locations' },
    ];

    const menuItems: { [key: string]: { icon: React.ReactNode; text: string; page?: string }[] } = {
        sectors: sectorLinks,
        services: serviceLinks,
        esg: esgLinks,
        about: aboutLinks,
    };

    const SubMenu: React.FC<{ items: { icon: React.ReactNode; text: string; page?: string }[] }> = ({ items }) => (
        <div className="pl-4 border-l border-gray-200 ml-4 py-2 bg-gray-50/50">
             {items.map(link => (
                <a 
                    href="#" 
                    key={link.text} 
                    onClick={(e) => {
                        if (link.page) {
                            e.preventDefault();
                            navigate(link.page);
                            onClose();
                        }
                    }}
                    className="flex items-center space-x-3 text-gray-700 hover:bg-gray-100 rounded-md px-4 py-2 transition-colors"
                >
                    <span className="text-gray-500">{link.icon}</span>
                    <span className="font-medium text-sm">{link.text}</span>
                </a>
            ))}
        </div>
    );

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);
    
    useEffect(() => {
        if (!isOpen) {
          setTimeout(() => setOpenSubMenu(null), 300); // Reset submenu after close animation
        }
    }, [isOpen]);

    return (
        <div className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className={`fixed inset-0 bg-black/50 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0'}`} onClick={onClose} aria-hidden="true" />
            
            <div className={`absolute top-0 right-0 h-full w-full max-w-sm bg-white shadow-xl transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex justify-between items-center p-4 border-b">
                    <a href="#" onClick={(e) => { e.preventDefault(); navigate('home'); onClose(); }} aria-label="IxoraGroup Home"><IxoraGroupLogo className="h-10" /></a>
                    <button onClick={onClose} className="text-gray-600 hover:text-gray-900 p-2" aria-label="Close menu">
                        <CloseIcon className="w-6 h-6" />
                    </button>
                </div>
                <div className="overflow-y-auto h-[calc(100%-65px)]">
                    <nav className="py-4">
                        <ul>
                            {navLinks.map(link => (
                                <li key={link.name} className="border-b border-gray-100 last:border-b-0">
                                    {link.menu ? (
                                        <div>
                                            <button 
                                                onClick={() => toggleSubMenu(link.menu)}
                                                className="w-full flex justify-between items-center py-3 px-4 font-bold text-gray-700 hover:bg-gray-50 text-left"
                                                aria-expanded={openSubMenu === link.menu}
                                            >
                                                <span>{link.name}</span>
                                                <ChevronDownIcon className={`w-5 h-5 transition-transform duration-200 ${openSubMenu === link.menu ? 'rotate-180' : ''}`} />
                                            </button>
                                            <div className={`transition-all duration-300 ease-in-out overflow-hidden ${openSubMenu === link.menu ? 'max-h-[1000px]' : 'max-h-0'}`}>
                                                <SubMenu items={menuItems[link.menu]} />
                                            </div>
                                        </div>
                                    ) : (
                                        <a 
                                            href={link.href} 
                                            onClick={(e) => {
                                                if (link.page) {
                                                    e.preventDefault();
                                                    navigate(link.page, null);
                                                }
                                                onClose();
                                            }} 
                                            className="block py-3 px-4 font-bold text-gray-700 hover:bg-gray-50"
                                        >
                                            {link.name}
                                        </a>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>
                     <div className="mt-6 p-4">
                         <a href="#" className="bg-[#D4B258] text-white font-semibold w-full block text-center py-3 rounded-full hover:bg-[#C3A24B] transition-colors">
                            Contact Us
                        </a>
                        <div className="flex items-center justify-center space-x-8 mt-6 text-sm text-gray-700">
                           <a href="tel:+919059919999" className="flex items-center hover:text-[#D4B258]">
                                <PhoneIcon className="w-5 h-5 mr-2" />
                                <span>Call</span>
                            </a>
                            <a href="#" className="flex items-center hover:text-[#D4B258]">
                                <WhatsAppIcon className="w-5 h-5 mr-2" />
                                <span>WhatsApp</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Header: React.FC<{ navigate: (page: string, data?: any) => void; }> = ({ navigate }) => {
    const [activeMenu, setActiveMenu] = useState<ActiveMenu>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const timeoutIdRef = useRef<number | null>(null);

    const handleMenuEnter = (menu: ActiveMenu) => {
        if (timeoutIdRef.current) {
            clearTimeout(timeoutIdRef.current);
        }
        setActiveMenu(menu);
    };

    const handleMenuLeave = () => {
        timeoutIdRef.current = window.setTimeout(() => {
            setActiveMenu(null);
        }, 200);
    };
    
    const MegaMenuContent = () => {
        switch (activeMenu) {
            case 'sectors': return <SectorsMegaMenu navigate={navigate} />;
            case 'services': return <ServicesMegaMenu />;
            case 'esg': return <EsgMegaMenu />;
            case 'about': return <AboutUsMegaMenu navigate={navigate} />;
            default: return null;
        }
    };

    return (
        <>
            <header className="relative z-30" onMouseLeave={handleMenuLeave}>
                <div className="sticky top-0">
                    <TopBar />
                    <div className="lg:hidden bg-white/80 backdrop-blur-lg shadow-sm">
                         <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center h-20">
                            <a href="#" onClick={(e) => { e.preventDefault(); navigate('home'); }} aria-label="IxoraGroup Home">
                                <IxoraGroupLogo className="h-12" />
                            </a>
                            <button className="text-gray-700" onClick={() => setIsMobileMenuOpen(true)} aria-label="Open menu">
                                <MenuIcon className="w-7 h-7" />
                            </button>
                        </div>
                    </div>
                    <div className="hidden lg:block">
                        <MainNav 
                            onMenuEnter={handleMenuEnter} 
                            activeMenu={activeMenu}
                            navigate={navigate}
                        />
                    </div>
                </div>
                <div 
                    onMouseEnter={() => { if (timeoutIdRef.current) clearTimeout(timeoutIdRef.current); }}
                    className={`absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out transform ${
                    activeMenu ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'
                    }`}
                >
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        <MegaMenuContent />
                    </div>
                </div>
            </header>
            <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} navigate={navigate} />
        </>
    );
};

export default Header;