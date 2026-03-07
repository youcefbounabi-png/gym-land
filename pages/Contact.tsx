import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-32 pb-16 relative overflow-hidden bg-[#020202]">
      <div className="fractured-accent top-[10%] right-[-5%] rotate-[35deg]"></div>
      <div className="fractured-accent bottom-[20%] left-[-2%] rotate-[-45deg]"></div>

      <section className="p-0 mt-16 sm:mt-24 transmit-gradient">
        <div className="app-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            {/* Contact Info Column */}
            <div className="space-y-12 sm:space-y-16">
              <div>
                <h3 className="text-[#ffce00] font-black tracking-[0.5em] text-[10px] uppercase mb-8">{t('contact_badge')}</h3>
                <h1 className="hero-heading font-black italic tracking-tighter leading-none mb-12 uppercase text-white">{t('contact_title_1')} <br /><span className="gold-gradient-text">{t('contact_title_2')}</span></h1>
                <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-md">
                  {t('contact_desc')}
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-[#ffce00] to-transparent mt-10"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-16">
                {/* Location */}
                <div className="space-y-4 group">
                  <h4 className="text-[10px] font-black tracking-[0.3em] uppercase text-[#ffce00] border-l-2 border-[#ffce00] pl-4">{t('contact_location')}</h4>
                  <div className="text-gray-500 text-sm leading-relaxed whitespace-pre-line group-hover:text-white transition-colors duration-500 font-light">
                    {'Cité 440 logts, Lots 12-23\nAin el Malha, 16029\nAlgiers, DZ'}
                  </div>
                </div>

                {/* Communication */}
                <div className="space-y-4 group">
                  <h4 className="text-[10px] font-black tracking-[0.3em] uppercase text-[#ffce00] border-l-2 border-[#ffce00] pl-4">{t('contact_communication')}</h4>
                  <div className="text-gray-500 text-sm leading-relaxed group-hover:text-white transition-colors duration-500 font-light">
                    <a href="https://wa.me/213554628266" target="_blank" rel="noopener noreferrer" className="hover:text-[#ffce00] transition-colors block mb-1">
                      +213 (0) 554 62 82 66 (WhatsApp)
                    </a>
                    <a href="tel:+21344192891" className="hover:text-[#ffce00] transition-colors block mb-1">
                      +213 (0) 44 19 28 91
                    </a>
                    <a href="mailto:contact@thegymland.club" className="hover:text-[#ffce00] transition-colors block">
                      contact@thegymland.club
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="space-y-4 group">
                  <h4 className="text-[10px] font-black tracking-[0.3em] uppercase text-[#ffce00] border-l-2 border-[#ffce00] pl-4">{t('contact_hours')}</h4>
                  <div className="text-gray-500 text-sm leading-relaxed whitespace-pre-line group-hover:text-white transition-colors duration-500 font-light">
                    {t('contact_hours_val')}
                  </div>
                </div>

                {/* Social */}
                <div className="space-y-4 group">
                  <h4 className="text-[10px] font-black tracking-[0.3em] uppercase text-[#ffce00] border-l-2 border-[#ffce00] pl-4">{t('contact_social')}</h4>
                  <div className="text-gray-500 text-sm leading-relaxed whitespace-pre-line group-hover:text-white transition-colors duration-500 font-light">
                    {t('contact_social_val')}
                  </div>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#080808] p-8 sm:p-12 lg:p-16 rounded-[2.5rem] lg:rounded-[3.5rem] shadow-2xl border border-white/5 relative overflow-hidden group"
            >
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#ffce00]/5 blur-[100px] pointer-events-none group-hover:opacity-20 transition-opacity"></div>

              <form className="space-y-6 lg:space-y-8 relative z-10">
                <div className="space-y-3">
                  <label className="text-[10px] font-black tracking-[0.4em] uppercase text-gray-600 ml-2">{t('form_name_label')}</label>
                  <input
                    type="text"
                    placeholder={t('form_name_placeholder')}
                    className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 lg:py-5 px-6 lg:px-8 text-sm font-bold tracking-widest text-white transition-all duration-500 hover:border-[#ffce00]/30 focus:border-[#ffce00] focus:bg-black/60 outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black tracking-[0.4em] uppercase text-gray-600 ml-2">{t('form_email_label')}</label>
                    <input
                      type="email"
                      placeholder={t('form_email_placeholder')}
                      className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 lg:py-5 px-6 lg:px-8 text-sm font-bold tracking-widest text-white transition-all duration-500 hover:border-[#ffce00]/30 focus:border-[#ffce00] focus:bg-black/60 outline-none"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black tracking-[0.4em] uppercase text-gray-600 ml-2">{t('form_phone_label')}</label>
                    <input
                      type="tel"
                      placeholder={t('form_phone_placeholder')}
                      className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 lg:py-5 px-6 lg:px-8 text-sm font-bold tracking-widest text-white transition-all duration-500 hover:border-[#ffce00]/30 focus:border-[#ffce00] focus:bg-black/60 outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black tracking-[0.4em] uppercase text-gray-600 ml-2">{t('form_age_label')}</label>
                    <input
                      type="number"
                      placeholder={t('form_age_placeholder')}
                      className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 lg:py-5 px-6 lg:px-8 text-sm font-bold tracking-widest text-white transition-all duration-500 hover:border-[#ffce00]/30 focus:border-[#ffce00] focus:bg-black/60 outline-none"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black tracking-[0.4em] uppercase text-gray-600 ml-2">{t('form_goal_label')}</label>
                    <select className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 lg:py-5 px-6 lg:px-8 text-sm font-bold tracking-widest text-white transition-all appearance-none cursor-pointer uppercase hover:border-[#ffce00]/30 focus:border-[#ffce00] focus:bg-black/60 outline-none">
                      <option className="bg-[#080808] text-white">{t('form_goal_tone')}</option>
                      <option className="bg-[#080808] text-white">{t('form_goal_muscle')}</option>
                      <option className="bg-[#080808] text-white">{t('form_goal_fitness')}</option>
                      <option className="bg-[#080808] text-white">{t('form_goal_weight')}</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black tracking-[0.4em] uppercase text-gray-600 ml-2">{t('form_training_label')}</label>
                  <div className="grid grid-cols-3 gap-4">
                    {[t('form_training_solo'), t('form_training_group'), t('form_training_coached')].map(type => (
                      <label key={type} className="cursor-pointer group/type">
                        <input type="radio" name="training_type" className="peer hidden" />
                        <div className="w-full py-4 border border-white/10 rounded-2xl text-center text-[10px] font-black uppercase tracking-widest text-gray-500 peer-checked:bg-[#ffce00] peer-checked:text-black peer-checked:border-[#ffce00] transition-all group-hover/type:border-white/30">
                          {type}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black tracking-[0.4em] uppercase text-gray-600 ml-2">{t('form_message_label')}</label>
                  <textarea
                    rows={4}
                    placeholder={t('form_message_placeholder')}
                    className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 lg:py-5 px-6 lg:px-8 text-sm font-bold tracking-widest text-white transition-all duration-500 hover:border-[#ffce00]/30 focus:border-[#ffce00] focus:bg-black/60 outline-none"
                  ></textarea>
                </div>

                <div className="text-center">
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-6">
                    {t('form_pricing_note')}
                  </p>
                  <button className="w-full bg-[#ffce00] text-black py-5 lg:py-6 rounded-full font-black italic tracking-tighter text-xl hover:scale-[1.01] hover:shadow-[0_0_50px_rgba(255,206,0,0.25)] transition-all duration-500 ease-out uppercase active:scale-95">
                    {t('form_submit')}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>

          {/* Map */}
          <div className="mt-24 lg:mt-32 w-full h-[450px] lg:h-[600px] bg-[#050505] rounded-[2.5rem] lg:rounded-[4rem] overflow-hidden relative border border-white/5 shadow-2xl">
            <div className="absolute inset-0 grayscale opacity-40 hover:opacity-60 transition-opacity duration-1000">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3202.102377317377!2d3.0782780766158024!3d36.623912072295694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fad2436f595db%3A0xe4d8349079be400d!2sThe%20Gym%20Land!5e0!3m2!1sen!2sdz!4v1711111111111!5m2!1sen!2sdz" width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="absolute bottom-6 left-6 lg:bottom-12 lg:left-12 glass-card p-6 lg:p-10 rounded-2xl border border-white/10 max-w-[280px] sm:max-w-sm pointer-events-none">
              <h5 className="text-xl lg:text-2xl font-black italic tracking-tighter uppercase mb-2 text-[#ffce00]">{t('map_title')}</h5>
              <p className="text-gray-400 text-[10px] lg:text-xs font-bold tracking-widest leading-relaxed">{t('map_desc')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;