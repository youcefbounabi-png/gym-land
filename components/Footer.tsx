
import React from 'react';
import { Link } from 'react-router-dom';
import { LOGO_URL, NAV_ITEMS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] pt-32 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand */}
          <div className="space-y-8">
            <img src={LOGO_URL} alt="Gymland" className="h-14 md:h-20" />
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs font-light">
              Empowering athletes since inception. 1,600m² of pure performance in the heart of Algiers. Join the monarch of fitness.
            </p>
            <div className="flex space-x-5">
              {[
                { icon: 'fab fa-facebook-f', href: '#' },
                { icon: 'fab fa-instagram', href: '#' },
                { icon: 'fab fa-youtube', href: '#' },
              ].map((social, i) => (
                <a key={i} href={social.href} className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center hover:bg-[#ffce00] hover:border-[#ffce00] hover:text-black transition-all duration-500">
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-[#ffce00] font-black mb-10 tracking-[0.3em] uppercase text-[10px]">Explore</h4>
            <ul className="space-y-5">
              {NAV_ITEMS.map(item => (
                <li key={item.path}>
                  <Link to={item.path} className="text-gray-500 hover:text-white transition-colors text-sm font-bold uppercase tracking-tighter">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#ffce00] font-black mb-10 tracking-[0.3em] uppercase text-[10px]">Headquarters</h4>
            <ul className="space-y-6 text-gray-500 text-sm font-light">
              <li className="flex items-start space-x-4">
                <i className="fas fa-map-marker-alt text-[#ffce00] mt-1"></i>
                <span>Cité 440 logts, Lots 12-23<br />Ain el Malha, 16029 <br /> Algiers, DZ</span>
              </li>
              <li className="flex items-center space-x-4">
                <i className="fas fa-phone text-[#ffce00]"></i>
                <span>+213 (0) 554 628 266</span>
              </li>
              <li className="flex items-center space-x-4">
                <i className="fas fa-envelope text-[#ffce00]"></i>
                <span>contact@thegymland.club</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-[#ffce00] font-black mb-10 tracking-[0.3em] uppercase text-[10px]">Stay Dangerous</h4>
            <p className="text-gray-500 text-sm mb-8 font-light leading-relaxed">Get training protocols and exclusive membership access updates.</p>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-5 px-8 text-xs font-bold tracking-widest focus:outline-none focus:border-[#ffce00] transition-all"
              />
              <button className="absolute right-2 top-2 bg-[#ffce00] text-black w-12 h-12 rounded-xl flex items-center justify-center hover:scale-105 transition-all shadow-lg shadow-[#ffce00]/10">
                <i className="fas fa-arrow-right text-sm"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[9px] text-gray-600 uppercase tracking-[0.3em] font-black">
          <p>© 2026 THE GYMLAND. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-10 mt-6 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="https://web-rocket.dz/" className="text-[#ffce00]/60 hover:text-[#ffce00] transition-colors">By Web Rocket</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
