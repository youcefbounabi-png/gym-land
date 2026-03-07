import React from 'react';
import { motion } from 'framer-motion';
import { TRAINERS } from '../constants';
import { useLanguage } from '../LanguageContext';

const Trainers: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-32 pb-16 overflow-hidden">
      <section className="p-0 mt-16 sm:mt-24">
        <div className="app-container">
          <div className="text-center mb-20 sm:mb-32 px-4">
            <h3 className="text-[#ffce00] font-black tracking-[0.5em] text-[10px] uppercase mb-8">{t('trainers_badge')}</h3>
            <h1 className="hero-heading font-black italic tracking-tighter mb-10 leading-none uppercase text-white">{t('trainers_title_1')} <br /> <span className="gold-gradient-text">{t('trainers_title_2')}</span></h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-light">{t('trainers_desc')}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            {TRAINERS.map((trainer, idx) => (
              <motion.div
                key={trainer.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="group h-full flex flex-col"
              >
                <div className="relative overflow-hidden rounded-[2.5rem] sm:rounded-[3.5rem] mb-8 sm:mb-10 aspect-[3/4] sm:h-[600px] border border-white/5">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-[1200ms] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-700"></div>

                  {/* Social Overlay */}
                  <div className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 flex space-x-4 sm:space-x-5 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <a href="#" className="bg-white text-black w-10 h-10 sm:w-12 sm:h-12 rounded-[1rem] sm:rounded-2xl flex items-center justify-center hover:bg-[#ffce00] transition-all">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="bg-white text-black w-10 h-10 sm:w-12 sm:h-12 rounded-[1rem] sm:rounded-2xl flex items-center justify-center hover:bg-[#ffce00] transition-all">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
                <div className="text-center mt-auto">
                  <div className="inline-block relative">
                    <h3 className="text-3xl sm:text-4xl font-black italic tracking-tighter mb-2 uppercase transition-colors text-white group-hover:text-[#ffce00]">
                      {trainer.name}
                    </h3>
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#ffce00] group-hover:w-full transition-all duration-500 shadow-[0_0_10px_#ffce00]"></div>
                  </div>
                  <p className="text-gray-500 font-black tracking-[0.3em] text-[10px] uppercase mt-2">{trainer.specialty}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Trainers;