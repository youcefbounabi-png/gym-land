
import React from 'react';
import { Link } from 'react-router-dom';
import { LOGO_URL } from '../constants';
import { useLanguage } from '../LanguageContext';

const NAV_KEYS = [
  { key: 'nav_home', path: '/' },
  { key: 'nav_about', path: '/about' },
  { key: 'nav_services', path: '/services' },
  { key: 'nav_membership', path: '/membership' },
  { key: 'nav_trainers', path: '/trainers' },
  { key: 'nav_transformations', path: '/transformations' },
  { key: 'nav_contact', path: '/contact' },
] as const;

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#050505] pt-32 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand */}
          <div className="space-y-8">
            <img src={LOGO_URL} alt="Gymland" className="h-14 md:h-20" />
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs font-light">
              {t('footer_desc')}
            </p>
            <div className="flex space-x-5">
              {[
                { icon: 'fab fa-facebook-f', href: 'https://www.facebook.com/p/The-Gymland-100028607843632/' },
                { icon: 'fab fa-instagram', href: 'https://www.instagram.com/thegymland_dz/' },
                { icon: 'fab fa-youtube', href: 'https://www.youtube.com/@gymland636' },
              ].map((social, i) => (
                <a key={i} href={social.href} className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center hover:bg-[#ffce00] hover:border-[#ffce00] hover:text-black transition-all duration-500">
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-[#ffce00] font-black mb-10 tracking-[0.3em] uppercase text-[10px]">{t('footer_explore')}</h4>
            <ul className="space-y-5">
              {NAV_KEYS.map(item => (
                <li key={item.path}>
                  <Link to={item.path} className="text-gray-500 hover:text-white transition-colors text-sm font-bold uppercase tracking-tighter">
                    {t(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#ffce00] font-black mb-10 tracking-[0.3em] uppercase text-[10px]">{t('footer_hq')}</h4>
            <ul className="space-y-6 text-gray-500 text-sm font-light">
              <li className="flex items-start space-x-4">
                <i className="fas fa-map-marker-alt text-[#ffce00] mt-1"></i>
                <span>Cité 440 logts, Lots 12-23<br />Ain el Malha, 16029 <br /> Algiers, DZ</span>
              </li>
              <li className="flex items-center space-x-4">
                <i className="fas fa-phone text-[#ffce00]"></i>
                <a href="https://wa.me/213554628266" className="hover:text-[#ffce00] transition-colors">+213 (0) 554 62 82 66</a>
              </li>
              <li className="flex items-center space-x-4">
                <i className="fas fa-envelope text-[#ffce00]"></i>
                <span>contact@thegymland.club</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-[#ffce00] font-black mb-10 tracking-[0.3em] uppercase text-[10px]">{t('footer_newsletter_title')}</h4>
            <p className="text-gray-500 text-sm mb-8 font-light leading-relaxed">{t('footer_newsletter_desc')}</p>
            <div className="relative group">
              <input
                type="email"
                placeholder="EMAIL"
                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-5 px-8 text-xs font-bold tracking-widest focus:outline-none focus:border-[#ffce00] transition-all"
              />
              <button className="absolute right-2 top-2 bg-[#ffce00] text-black w-12 h-12 rounded-xl flex items-center justify-center hover:scale-105 transition-all shadow-lg shadow-[#ffce00]/10">
                <i className="fas fa-arrow-right text-sm"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[9px] text-gray-600 uppercase tracking-[0.3em] font-black">
          <p>{t('footer_copyright')}</p>
          <div className="flex space-x-10 mt-6 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">{t('footer_privacy')}</a>
            <a href="#" className="hover:text-white transition-colors">{t('footer_terms')}</a>
            <a href="https://web-rocket.dz/" className="text-[#ffce00]/60 hover:text-[#ffce00] transition-colors">By Web Rocket</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
