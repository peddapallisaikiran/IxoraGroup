import React from 'react';
import { IxoraGroupLogo } from './IxoraGroupLogo';
import { LinkedInIcon } from './icons/LinkedInIcon';
import { FacebookIcon } from './icons/FacebookIcon';
import { TwitterIcon } from './icons/TwitterIcon';
import { InstagramIcon } from './icons/InstagramIcon';

const gold = '#D4B258';

const FooterLink: React.FC<{ href: string; children: React.ReactNode; className?: string }> = ({ href, children, className }) => (
  <a href={href} className={`text-gray-700 hover:text-gray-900 transition-colors duration-200 ${className}`}>
    {children}
  </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-800 pt-20 pb-10 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16 items-start">
          {/* Column 1: Logo and Brand Info */}
          <div className="lg:col-span-2 space-y-5">
            <IxoraGroupLogo className="h-12 mb-4" />
            <p className="text-gray-600 max-w-xs text-lg">
              Making people and places the best they can be.
            </p>
            <a href="#" className="font-semibold text-lg text-[#D4B258] border-b-2 border-[#D4B258] pb-1 inline-block hover:opacity-80">
              Contact Us
            </a>
          </div>

          {/* Column 2: Soft Services */}
          <div className="text-md">
            <h4 className="font-semibold text-gray-500 mb-5">Soft Services</h4>
            <ul className="space-y-4">
              <li><FooterLink href="#">Facilities Management</FooterLink></li>
              <li><FooterLink href="#">Cleaning</FooterLink></li>
              <li><FooterLink href="#">Hard Services</FooterLink></li>
              <li><FooterLink href="#">Pest Control</FooterLink></li>
              <li><FooterLink href="#">Carbon & Energy</FooterLink></li>
              <li><FooterLink href="#">Front of House</FooterLink></li>
              <li><a href="#" className="font-semibold text-[#D4B258] border-b border-[#D4B258] pb-px hover:opacity-80">Show more</a></li>
            </ul>
          </div>

          {/* Column 3: Sectors */}
          <div className="text-md">
            <h4 className="font-semibold text-gray-500 mb-5">Sectors</h4>
            <ul className="space-y-4">
              <li><FooterLink href="#">Aviation</FooterLink></li>
              <li><FooterLink href="#">Commercial</FooterLink></li>
              <li><FooterLink href="#">Distribution & Logistics</FooterLink></li>
              <li><FooterLink href="#">Healthcare</FooterLink></li>
              <li><FooterLink href="#">Education</FooterLink></li>
              <li><FooterLink href="#">Retail</FooterLink></li>
              <li><a href="#" className="font-semibold text-[#D4B258] border-b border-[#D4B258] pb-px hover:opacity-80">Show more</a></li>
            </ul>
          </div>

          {/* Column 4: Company */}
          <div className="text-md">
            <h4 className="font-semibold text-gray-500 mb-5">Company</h4>
            <ul className="space-y-4">
              <li><FooterLink href="#">Careers</FooterLink></li>
              <li><FooterLink href="#">QHSE</FooterLink></li>
              <li><FooterLink href="#">Code of Conduct</FooterLink></li>
              <li><FooterLink href="#">ESG</FooterLink></li>
              <li><FooterLink href="#">IxoraGroup Introduction</FooterLink></li>
              <li><FooterLink href="#">Leadership Team</FooterLink></li>
              <li><FooterLink href="#">History & Heritage</FooterLink></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm gap-6">
          <p className="text-gray-500 text-center md:text-left">&copy; {new Date().getFullYear()} IxoraGroup Holdings Ltd. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-gray-500">
            <a href="#" className="hover:text-gray-900 underline">Policies</a>
            <a href="#" className="hover:text-gray-900 underline">Terms & Conditions</a>
            <a href="#" className="hover:text-gray-900 underline">Modern Slavery Statement</a>
            <a href="#" className="hover:text-gray-900 underline">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900 underline">Mid-Year Update</a>
            <a href="#" className="hover:text-gray-900 underline">Cookie Preferences</a>
          </div>
          <div className="flex items-center space-x-4">
             <a href="#" className="text-gray-500 hover:text-gray-900" aria-label="Facebook">
                <FacebookIcon className="w-6 h-6" />
             </a>
             <a href="#" className="text-gray-500 hover:text-gray-900" aria-label="Twitter">
                <TwitterIcon className="w-6 h-6" />
             </a>
             <a href="#" className="text-gray-500 hover:text-gray-900" aria-label="Instagram">
                <InstagramIcon className="w-6 h-6" />
             </a>
             <a href="#" className="text-gray-500 hover:text-gray-900" aria-label="LinkedIn">
                <LinkedInIcon className="w-7 h-7" />
             </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;