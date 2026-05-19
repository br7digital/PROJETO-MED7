import React, { useState } from 'react';
import { landingDataB } from '../../data/data-config-b';

export function FaqB() {
  const { title, questions } = landingDataB.faq;
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (idx) => setOpenIndex(openIndex === idx ? null : idx);

  return (
    <section className="relative py-16 px-5 bg-gradient-to-b from-[#020c1a] to-[#01050d] overflow-hidden">
      <div className="max-w-lg mx-auto relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-[clamp(26px,8vw,34px)] font-display font-black text-white tracking-tighter leading-[1.12] text-glow">{title}</h2>
        </div>
        <div className="space-y-3">
          {questions.map((item, idx) => (
            <div key={idx} className={`rounded-2xl border transition-all duration-300 ${openIndex === idx ? 'bg-white/5 border-[#00f2ff]/30 shadow-[0_0_20px_rgba(0,242,255,0.05)]' : 'bg-transparent border-white/10 hover:border-white/20'}`}>
              <button onClick={() => toggle(idx)} className="w-full px-5 py-4 flex items-center justify-between text-left focus:outline-none">
                <span className="text-white/90 font-display font-semibold text-[14px] pr-4">{item.question}</span>
                <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 border ${openIndex === idx ? 'bg-[#00f2ff]/10 text-[#00f2ff] border-[#00f2ff]/30 rotate-180' : 'bg-transparent text-white/40 border-white/10'}`}>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" /></svg>
                </span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-5 pb-5 pt-1 text-white/60 text-[13px] leading-[1.7] font-body border-t border-white/5 mt-2">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
