import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-16 relative overflow-hidden bg-[#020202]">
      {/* Structural Refinement: Constant alignment and atmospheric accents */}
      <div className="fractured-accent top-[10%] right-[-5%] rotate-[35deg]"></div>
      <div className="fractured-accent bottom-[20%] left-[-2%] rotate-[-45deg]"></div>

      <section className="p-0 mt-16 sm:mt-24 transmit-gradient">
        <div className="app-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            {/* Contact Info Column */}
            <div className="space-y-12 sm:space-y-16">
              <div>
                <h3 className="text-[#ffce00] font-black tracking-[0.5em] text-[10px] uppercase mb-8">Get in Touch</h3>
                <h1 className="hero-heading font-black italic tracking-tighter leading-none mb-12 uppercase text-white">READY FOR <br /><span className="gold-gradient-text">WAR?</span></h1>
                <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-md">
                  Have questions about our facility, membership plans, or corporate rates? Send us a transmission.
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-[#ffce00] to-transparent mt-10"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-16">
                {[
                  { label: 'Location', val: 'Cité 440 logts, Lots 12-23\nAin el Malha, 16029\nAlgiers, DZ' },
                  { label: 'Communication', val: '+213 (0) 554 628 266\n+213 (0) 44 19 28 91\ncontact@thegymland.club' },
                  { label: 'Hours', val: 'Daily: 06:00 — 00:00\nFriday: 15:00 — 00:00' },
                  { label: 'Social', val: '@thegymland.club\nfacebook.com/gymland' },
                ].map((item, i) => (
                  <div key={i} className="space-y-4 group">
                    <h4 className="text-[10px] font-black tracking-[0.3em] uppercase text-[#ffce00] border-l-2 border-[#ffce00] pl-4">{item.label}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed whitespace-pre-line group-hover:text-white transition-colors duration-500 font-light">
                      {item.val}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Form Column - Enhanced focus effects handled globally in index.html */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#080808] p-8 sm:p-12 lg:p-16 rounded-[2.5rem] lg:rounded-[3.5rem] shadow-2xl border border-white/5 relative overflow-hidden group"
            >
              {/* Subtle Amber Radial Glow */}
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#ffce00]/5 blur-[100px] pointer-events-none group-hover:opacity-20 transition-opacity"></div>

              <form className="space-y-6 lg:space-y-8 relative z-10">
                <div className="space-y-3">
                  <label className="text-[10px] font-black tracking-[0.4em] uppercase text-gray-600 ml-2">Identified Name</label>
                  <input
                    type="text"
                    placeholder="E.G. JOHN DOE"
                    className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 lg:py-5 px-6 lg:px-8 text-sm font-bold tracking-widest text-white transition-all duration-500 hover:border-[#ffce00]/30 focus:border-[#ffce00] focus:bg-black/60 outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black tracking-[0.4em] uppercase text-gray-600 ml-2">Email Node</label>
                    <input
                      type="email"
                      placeholder="SOLDIER@GYMLAND.CLUB"
                      className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 lg:py-5 px-6 lg:px-8 text-sm font-bold tracking-widest text-white transition-all duration-500 hover:border-[#ffce00]/30 focus:border-[#ffce00] focus:bg-black/60 outline-none"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black tracking-[0.4em] uppercase text-gray-600 ml-2">Voice Line</label>
                    <input
                      type="tel"
                      placeholder="+213..."
                      className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 lg:py-5 px-6 lg:px-8 text-sm font-bold tracking-widest text-white transition-all duration-500 hover:border-[#ffce00]/30 focus:border-[#ffce00] focus:bg-black/60 outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black tracking-[0.4em] uppercase text-gray-600 ml-2">Age</label>
                    <input
                      type="number"
                      placeholder="YEARS"
                      className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 lg:py-5 px-6 lg:px-8 text-sm font-bold tracking-widest text-white transition-all duration-500 hover:border-[#ffce00]/30 focus:border-[#ffce00] focus:bg-black/60 outline-none"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black tracking-[0.4em] uppercase text-gray-600 ml-2">Goal</label>
                    <select className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 lg:py-5 px-6 lg:px-8 text-sm font-bold tracking-widest text-white transition-all appearance-none cursor-pointer uppercase hover:border-[#ffce00]/30 focus:border-[#ffce00] focus:bg-black/60 outline-none">
                      <option className="bg-[#080808] text-white">Tone / Definition</option>
                      <option className="bg-[#080808] text-white">Muscle Gain</option>
                      <option className="bg-[#080808] text-white">General Fitness</option>
                      <option className="bg-[#080808] text-white">Weight Loss</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black tracking-[0.4em] uppercase text-gray-600 ml-2">Training Preference</label>
                  <div className="grid grid-cols-3 gap-4">
                    {['Solo', 'Group', 'Coached'].map(type => (
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
                  <label className="text-[10px] font-black tracking-[0.4em] uppercase text-gray-600 ml-2">Transmission Message</label>
                  <textarea
                    rows={4}
                    placeholder="HOW CAN WE HELP YOU ASCEND?"
                    className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 lg:py-5 px-6 lg:px-8 text-sm font-bold tracking-widest text-white transition-all duration-500 hover:border-[#ffce00]/30 focus:border-[#ffce00] focus:bg-black/60 outline-none"
                  ></textarea>
                </div>

                <div className="text-center">
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-6">
                    * Direct Contact Required for Final Pricing
                  </p>
                  <button className="w-full bg-[#ffce00] text-black py-5 lg:py-6 rounded-full font-black italic tracking-tighter text-xl hover:scale-[1.01] hover:shadow-[0_0_50px_rgba(255,206,0,0.25)] transition-all duration-500 ease-out uppercase active:scale-95">
                    SEND TRANSMISSION
                  </button>
                </div>
              </form>
            </motion.div>
          </div>

          {/* Map - Integrated Alignment */}
          <div className="mt-24 lg:mt-32 w-full h-[450px] lg:h-[600px] bg-[#050505] rounded-[2.5rem] lg:rounded-[4rem] overflow-hidden relative border border-white/5 shadow-2xl">
            <div className="absolute inset-0 grayscale opacity-40 hover:opacity-60 transition-opacity duration-1000">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3202.102377317377!2d3.0782780766158024!3d36.623912072295694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fad2436f595db%3A0xe4d8349079be400d!2sThe%20Gym%20Land!5e0!3m2!1sen!2sdz!4v1711111111111!5m2!1sen!2sdz" width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="absolute bottom-6 left-6 lg:bottom-12 lg:left-12 glass-card p-6 lg:p-10 rounded-2xl border border-white/10 max-w-[280px] sm:max-w-sm pointer-events-none">
              <h5 className="text-xl lg:text-2xl font-black italic tracking-tighter uppercase mb-2 text-[#ffce00]">TACTICAL LOCATION</h5>
              <p className="text-gray-400 text-[10px] lg:text-xs font-bold tracking-widest leading-relaxed">ALGIERS ELITE PERFORMANCE HUB. VISIT THE MONARCHY IN PERSON.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;