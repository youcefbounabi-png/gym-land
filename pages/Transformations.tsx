import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TRANSFORMATIONS } from '../constants';
import { ShadowOverlay } from '../components/ui/ShadowOverlay';
import { useLanguage } from '../LanguageContext';

const Transformations: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { t } = useLanguage();

  return (
    <div className="pt-32 pb-16 overflow-hidden">
      <section className="p-0 mt-16 sm:mt-24">
        <div className="app-container">
          <div className="max-w-4xl mb-20 sm:mb-32 px-4">
            <h1 className="hero-heading font-black italic tracking-tighter mb-10 leading-none uppercase text-white">{t('transf_title_1')} <span className="text-[#ffce00]">{t('transf_title_2').replace('.', '')}</span> <br /> {t('transf_title_2').includes('.') ? '' : ''}</h1>
            <p className="text-gray-400 text-lg md:text-xl lg:text-2xl font-light leading-relaxed">{t('transf_desc')}</p>
          </div>

          <div className="space-y-32 sm:space-y-48">
            {TRANSFORMATIONS.map((tr, idx) => (
              <div key={tr.id} className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 lg:gap-24`}>
                <div className="w-full lg:w-2/3 grid grid-cols-2 gap-4 sm:gap-6 relative group">
                  {/* Before Frame */}
                  <div
                    className="relative overflow-hidden rounded-[2rem] sm:rounded-[3rem] border border-white/5 bg-neutral-900 cursor-pointer group/img"
                    onClick={() => setSelectedImage(tr.beforeImg)}
                  >
                    <img
                      src={tr.beforeImg}
                      className="w-full aspect-[3/4] object-cover grayscale brightness-50 contrast-125 blur-[1px] group-hover:blur-0 transition-all duration-1000 group-hover/img:scale-105"
                      alt={t('transf_before')}
                    />
                    <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-black/80 px-4 py-1 sm:px-5 sm:py-2 rounded-full text-[10px] font-black tracking-widest uppercase text-white backdrop-blur-md border border-white/10 z-10">{t('transf_before')}</div>
                    <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/20 transition-colors flex items-center justify-center">
                      <i className="fas fa-expand text-white opacity-0 group-hover/img:opacity-100 transition-opacity text-2xl"></i>
                    </div>
                  </div>

                  {/* After Frame */}
                  <div
                    className="relative overflow-hidden rounded-[2rem] sm:rounded-[3rem] border border-[#ffce00]/20 bg-neutral-900 shadow-[0_0_50px_rgba(0,0,0,0.5)] cursor-pointer group/img"
                    onClick={() => setSelectedImage(tr.afterImg)}
                  >
                    <img
                      src={tr.afterImg}
                      className="w-full aspect-[3/4] object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-105 group-hover/img:scale-110"
                      alt={t('transf_after')}
                    />
                    <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-[#ffce00] px-4 py-1 sm:px-5 sm:py-2 rounded-full text-[10px] font-black tracking-widest uppercase text-black shadow-[0_0_15px_rgba(255,206,0,0.4)] z-10">{t('transf_after')}</div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#ffce00]/5 to-transparent pointer-events-none"></div>
                    <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/20 transition-colors flex items-center justify-center">
                      <i className="fas fa-expand text-white opacity-0 group-hover/img:opacity-100 transition-opacity text-2xl shadow-xl"></i>
                    </div>
                  </div>

                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-1/2 bg-gradient-to-b from-transparent via-[#ffce00] to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-700 hidden sm:block"></div>
                </div>

                <div className="w-full lg:w-1/3 space-y-6 sm:space-y-8">
                  <div className="w-20 sm:w-24 h-1.5 bg-[#ffce00] mb-8 shadow-[0_0_20px_rgba(255,206,0,0.5)] rounded-full"></div>
                  <h3 className="text-4xl sm:text-5xl font-black italic tracking-tighter uppercase text-white">{tr.name}</h3>
                  <div className="inline-block bg-[#ffce00]/10 border border-[#ffce00]/20 px-5 py-2 rounded-xl text-[10px] font-black tracking-widest text-[#ffce00] uppercase mb-4 shadow-[0_0_20px_rgba(255,206,0,0.05)]">
                    {tr.timeframe} {t('transf_evolution')}
                  </div>
                  <p className="text-gray-400 text-lg sm:text-xl italic font-light leading-relaxed">"{tr.result}"</p>
                  <div className="pt-6 sm:pt-10">
                    <button className="text-[10px] font-black tracking-[0.4em] uppercase border-b-2 border-[#ffce00]/30 hover:border-[#ffce00] pb-2 transition-all hover:text-[#ffce00] group/btn flex items-center gap-3">
                      <span>{t('transf_read_more')}</span>
                      <i className="fas fa-chevron-right text-[8px] transition-transform group-hover/btn:translate-x-1"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-40 text-center bg-[#d4a800] rounded-[3rem] sm:rounded-[4rem] py-20 sm:py-32 px-6 sm:px-10 text-black relative overflow-hidden group">
            <div className="absolute inset-0 rounded-[3rem] sm:rounded-[4rem] overflow-hidden opacity-50">
              <ShadowOverlay
                color="rgba(255, 255, 255, 0.8)"
                animation={{ scale: 70, speed: 90 }}
                noise={{ opacity: 0, scale: 1 }}
                sizing="fill"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-[shimmer_5s_infinite] pointer-events-none"></div>
            <div className="relative z-10">
              <h2 className="section-heading font-black italic tracking-tighter leading-none mb-10 uppercase">{t('transf_cta_title_1')} <br /> {t('transf_cta_title_2')}</h2>
              <p className="text-xl sm:text-2xl font-bold opacity-80 mb-12 sm:mb-16 max-w-2xl mx-auto leading-relaxed">{t('transf_cta_desc')}</p>
              <button className="w-full sm:w-auto bg-black text-white px-12 sm:px-20 py-5 sm:py-7 rounded-full font-black italic tracking-tighter text-2xl md:text-3xl hover:scale-110 transition-all shadow-2xl hover:shadow-[#ffce00]/20">
                {t('transf_cta_button')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[1000] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-12 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Expanded Transformation"
                className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl border border-white/10"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-0 -right-4 sm:-right-12 text-white/50 hover:text-white text-4xl p-4 transition-colors"
                aria-label="Close Modal"
              >
                <i className="fas fa-times"></i>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Transformations;