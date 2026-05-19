import React, { useState, useEffect, useRef } from 'react';
import { useCheckout } from '../../contexts/CheckoutContext';
import { landingDataB } from '../../data/data-config-b';

export function LeadCaptureModalB() {
  const { isModalOpen, closeCheckoutModal } = useCheckout();
  const { checkout } = landingDataB;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [showContent, setShowContent] = useState(false);
  const [utmSource, setUtmSource] = useState('');
  const [utmMedium, setUtmMedium] = useState('');
  const [utmCampaign, setUtmCampaign] = useState('');
  const modalRef = useRef(null);
  const nameInputRef = useRef(null);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      const timer = setTimeout(() => setShowContent(true), 50);
      const focusTimer = setTimeout(() => nameInputRef.current?.focus(), 300);
      return () => { clearTimeout(timer); clearTimeout(focusTimer); };
    } else { document.body.style.overflow = ''; setShowContent(false); }
    return () => { document.body.style.overflow = ''; };
  }, [isModalOpen]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setUtmSource(params.get('utm_source') || '');
    setUtmMedium(params.get('utm_medium') || '');
    setUtmCampaign(params.get('utm_campaign') || '');
  }, []);

  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') closeCheckoutModal(); };
    if (isModalOpen) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isModalOpen, closeCheckoutModal]);

  const formatPhone = (value) => {
    let digits = value.replace(/\D/g, '');
    if (digits.startsWith('55') && digits.length > 11) digits = digits.slice(2);
    digits = digits.slice(0, 11);
    if (digits.length <= 2) return digits.length ? `(${digits}` : '';
    if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  };

  const handlePhoneChange = (e) => { setPhone(formatPhone(e.target.value)); if (errors.phone) setErrors(p => ({ ...p, phone: '' })); };
  const handleNameChange = (e) => { setName(e.target.value); if (errors.name) setErrors(p => ({ ...p, name: '' })); };
  const handleEmailChange = (e) => { setEmail(e.target.value); if (errors.email) setErrors(p => ({ ...p, email: '' })); };

  const validate = () => {
    const ne = {};
    if (!name.trim()) ne.name = 'Informe seu nome';
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) ne.email = 'Informe um e-mail válido';
    const pd = phone.replace(/\D/g, '');
    if (pd.length < 10 || pd.length > 11) ne.phone = 'Informe um WhatsApp válido';
    setErrors(ne);
    return Object.keys(ne).length === 0;
  };

  const getPhoneParts = () => { const d = phone.replace(/\D/g, ''); return { phoneac: d.slice(0, 2), phonenumber: d.slice(2) }; };
  const sanitizePhone = (p) => { let d = p.replace(/\D/g, ''); return (d.startsWith('55') && d.length > 11) ? `+${d}` : `+55${d}`; };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    const np = name.trim().split(/\s+/);
    const pp = getPhoneParts();
    try {
      const ac = new AbortController();
      const tid = setTimeout(() => ac.abort(), 2000);
      await fetch(checkout.ghlWebhookUrl, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(), firstName: np[0], lastName: np.slice(1).join(' '),
          email: email.trim().toLowerCase(), phone: sanitizePhone(phone),
          productValue: Number(`${landingDataB.pricing.price}.${landingDataB.pricing.cents || '90'}`),
          source: 'LP-ORTO-BR-B',
          customField: { lead_stage: 'pre-checkout', product: checkout.productName, especialidade_medica: 'Ortopedista', hotmart_offer_id: checkout.hotmartOfferCode || 'br84xiqy', ab_variant: 'B', utm_source: utmSource, utm_medium: utmMedium, utm_campaign: utmCampaign },
        }), signal: ac.signal
      });
      clearTimeout(tid);
    } catch (err) { console.warn('GHL error:', err); }
    try {
      const base = `https://pay.hotmart.com/${checkout.hotmartProductId}`;
      const params = new URLSearchParams();
      if (checkout.hotmartOfferCode) params.append('off', checkout.hotmartOfferCode);
      params.append('name', name.trim()); params.append('email', email.trim().toLowerCase());
      params.append('phoneac', pp.phoneac); params.append('phonenumber', pp.phonenumber);
      window.location.href = `${base}?${params.toString()}`;
    } catch (err) { window.location.href = `https://pay.hotmart.com/${checkout.hotmartOfferCode}`; }
  };

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center" role="dialog" aria-modal="true">
      <div className={`absolute inset-0 bg-[#020b18]/80 backdrop-blur-xl transition-opacity duration-300 ${showContent ? 'opacity-100' : 'opacity-0'}`} onClick={closeCheckoutModal} />
      <div ref={modalRef} className={`relative w-[94%] max-w-[420px] mx-auto transition-all duration-400 ease-out ${showContent ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'}`}>
        {/* Close */}
        <button onClick={closeCheckoutModal} className="absolute -top-3 -right-3 z-50 w-9 h-9 flex items-center justify-center rounded-full bg-[#0b1627] border border-white/10 text-white/50 hover:text-white hover:bg-[#111f33] transition-all shadow-lg" aria-label="Fechar">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        <div className="bg-gradient-to-b from-[#0b1627] to-[#010612] rounded-[28px] border border-[#00f2ff]/20 shadow-[0_25px_80px_rgba(0,0,0,0.8)] overflow-hidden relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[2px] bg-gradient-to-r from-transparent via-[#00f2ff]/60 to-transparent" />
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#00f2ff]/5 blur-2xl rounded-full" />
          
          <div className="pt-8 pb-4 px-6 text-center relative z-10">
            <div className="mb-4">
              <span className="text-white font-display font-black text-xl tracking-tight">MED</span>
              <span className="text-[#00f2ff] font-display font-black text-xl text-glow">7</span>
            </div>
            <h3 className="text-white font-display font-bold text-[17px] leading-snug mb-1.5">Preencha para liberar seu acesso</h3>
            <p className="text-white/50 text-[13px] font-body">Dados necessários para processar seu pedido com segurança.</p>
          </div>

          <form onSubmit={handleSubmit} className="px-6 pb-6 space-y-4 relative z-10" noValidate>
            <div>
              <div className={`relative rounded-xl border transition-colors ${errors.name ? 'border-red-500/50 bg-red-500/5' : 'border-white/10 bg-black/20 focus-within:border-[#00f2ff]/40 focus-within:bg-white/5'}`}>
                <input ref={nameInputRef} type="text" id="lead-name-b" value={name} onChange={handleNameChange} placeholder="Seu nome" autoComplete="given-name" className="w-full bg-transparent text-white text-[15px] font-body px-4 py-3.5 rounded-xl outline-none placeholder:text-white/30" />
              </div>
              {errors.name && <p className="text-red-400 text-[11px] mt-1.5 ml-1 font-medium">{errors.name}</p>}
            </div>
            <div>
              <div className={`relative rounded-xl border transition-colors ${errors.email ? 'border-red-500/50 bg-red-500/5' : 'border-white/10 bg-black/20 focus-within:border-[#00f2ff]/40 focus-within:bg-white/5'}`}>
                <input type="email" id="lead-email-b" value={email} onChange={handleEmailChange} placeholder="Seu melhor e-mail" autoComplete="email" className="w-full bg-transparent text-white text-[15px] font-body px-4 py-3.5 rounded-xl outline-none placeholder:text-white/30" />
              </div>
              {errors.email && <p className="text-red-400 text-[11px] mt-1.5 ml-1 font-medium">{errors.email}</p>}
            </div>
            <div>
              <div className={`relative rounded-xl border transition-colors flex items-center ${errors.phone ? 'border-red-500/50 bg-red-500/5' : 'border-white/10 bg-black/20 focus-within:border-[#00f2ff]/40 focus-within:bg-white/5'}`}>
                <div className="flex items-center gap-1.5 pl-4 pr-2 py-3.5 border-r border-white/10 flex-shrink-0 select-none">
                  <span className="text-[16px] leading-none">🇧🇷</span>
                  <span className="text-white/50 text-[13px] font-body font-medium">+55</span>
                </div>
                <input type="tel" id="lead-phone-b" value={phone} onChange={handlePhoneChange} placeholder="(DD) XXXXX-XXXX" autoComplete="tel-national" className="w-full bg-transparent text-white text-[15px] font-body px-3 py-3.5 rounded-r-xl outline-none placeholder:text-white/30" />
              </div>
              {errors.phone && <p className="text-red-400 text-[11px] mt-1.5 ml-1 font-medium">{errors.phone}</p>}
            </div>
            <input type="hidden" name="especialidade_medica" value="Ortopedista" />
            <input type="hidden" name="utm_source" value={utmSource} />
            <input type="hidden" name="utm_medium" value={utmMedium} />
            <input type="hidden" name="utm_campaign" value={utmCampaign} />

            <button type="submit" disabled={isSubmitting} className="relative btn-elite w-full py-4 mt-2 rounded-xl group/btn overflow-hidden shadow-[0_10px_30px_rgba(0,242,255,0.2)] hover:shadow-[0_15px_40px_rgba(0,242,255,0.4)] disabled:opacity-60">
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-[150%] skew-x-[-30deg] animate-[shimmer_3s_infinite]" />
              <span className="relative z-10 flex items-center justify-center gap-2 text-[14px]">
                {isSubmitting ? (<><svg className="animate-spin h-4 w-4" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>Processando...</>) : (<>IR PARA PAGAMENTO SEGURO<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg></>)}
              </span>
            </button>
            <p className="text-[10px] text-white/30 text-center px-4 leading-relaxed mt-2">🔒 Seus dados estão protegidos. Ao avançar, você concorda com nossos <span className="text-white/50">Termos de Uso</span> e <span className="text-white/50">Política de Privacidade</span>.</p>
            <div className="flex items-center justify-center gap-5 pt-3 pb-1">
              <div className="flex items-center gap-1.5 opacity-60"><span className="text-[13px]">🔒</span><span className="text-[10px] font-display font-bold uppercase tracking-widest text-white/50">Seguro</span></div>
              <div className="flex items-center gap-1.5 opacity-60"><span className="text-[13px]">⚡</span><span className="text-[10px] font-display font-bold uppercase tracking-widest text-[#00f2ff]">Imediato</span></div>
              <div className="flex items-center gap-1.5 opacity-60"><span className="text-[13px]">🛡️</span><span className="text-[10px] font-display font-bold uppercase tracking-widest text-white/50">Protegido</span></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
