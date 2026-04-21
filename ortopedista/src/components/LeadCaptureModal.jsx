import React, { useState, useEffect, useRef } from 'react';
import { useCheckout } from '../contexts/CheckoutContext';
import { landingData } from '../data/data-config';

export function LeadCaptureModal() {
  const { isModalOpen, closeCheckoutModal } = useCheckout();
  const { checkout } = landingData;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [showContent, setShowContent] = useState(false);

  // Hidden tracking fields state
  const [utmSource, setUtmSource] = useState('');
  const [utmMedium, setUtmMedium] = useState('');
  const [utmCampaign, setUtmCampaign] = useState('');

  const modalRef = useRef(null);
  const nameInputRef = useRef(null);

  // Animation: delay content appearance for smooth entry
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      const timer = setTimeout(() => setShowContent(true), 50);
      // Focus first input
      const focusTimer = setTimeout(() => nameInputRef.current?.focus(), 300);
      return () => {
        clearTimeout(timer);
        clearTimeout(focusTimer);
      };
    } else {
      document.body.style.overflow = '';
      setShowContent(false);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  // Capture UTM parameters from URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setUtmSource(params.get('utm_source') || '');
    setUtmMedium(params.get('utm_medium') || '');
    setUtmCampaign(params.get('utm_campaign') || '');
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') closeCheckoutModal();
    };
    if (isModalOpen) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isModalOpen, closeCheckoutModal]);

  // Phone mask: (DD) XXXXX-XXXX
  const formatPhone = (value) => {
    const digits = value.replace(/\D/g, '').slice(0, 11);
    if (digits.length <= 2) return digits.length ? `(${digits}` : '';
    if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  };

  const handlePhoneChange = (e) => {
    setPhone(formatPhone(e.target.value));
    if (errors.phone) setErrors((prev) => ({ ...prev, phone: '' }));
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    if (errors.name) setErrors((prev) => ({ ...prev, name: '' }));
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (errors.email) setErrors((prev) => ({ ...prev, email: '' }));
  };

  // Validation
  const validate = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = 'Informe seu nome';
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = 'Informe um e-mail válido';
    const phoneDigits = phone.replace(/\D/g, '');
    if (phoneDigits.length < 10 || phoneDigits.length > 11)
      newErrors.phone = 'Informe um WhatsApp válido';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Extract phone parts for Hotmart prefilledInfo
  const getPhoneParts = () => {
    const digits = phone.replace(/\D/g, '');
    return {
      phoneac: digits.slice(0, 2),
      phonenumber: digits.slice(2),
    };
  };


  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const phoneParts = getPhoneParts();
    const phoneDigits = phone.replace(/\D/g, '');

    // 1. Send lead to GoHighLevel (Awaiting with timeout for higher reliability)
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 2000); // 2-second limit

      await fetch(checkout.ghlWebhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: name.trim(),
          email: email.trim().toLowerCase(),
          phone: `+55${phoneDigits}`,
          productValue: parseFloat(`${landingData.pricing.price}.${landingData.pricing.cents || '90'}`),
          tags: [checkout.leadTag],
          source: checkout.source,
          customField: {
            lead_stage: 'pre-checkout',
            product: checkout.productName,
            especialidade_medica: 'Ortopedista',
            hotmart_offer_id: checkout.hotmartOfferCode || 'br84xiqy',
            utm_source: utmSource,
            utm_medium: utmMedium,
            utm_campaign: utmCampaign,
          },
        }),
        signal: controller.signal
      });
      clearTimeout(timeoutId);
    } catch (err) {
      // We continue to redirect even if webhook fails or times out to not block the sale
      console.warn('GHL capture timeout or error (continuing to checkout):', err);
    }

    // 2. Redirect to Hotmart Checkout with prefilled data
    try {
      const baseUrl = `https://pay.hotmart.com/${checkout.hotmartProductId}`;
      const params = new URLSearchParams();

      if (checkout.hotmartOfferCode) {
        params.append('off', checkout.hotmartOfferCode);
      }

      params.append('name', name.trim());
      params.append('email', email.trim().toLowerCase());
      params.append('phoneac', phoneParts.phoneac);
      params.append('phonenumber', phoneParts.phonenumber);

      const checkoutUrl = `${baseUrl}?${params.toString()}`;

      // Navigate on the same tab for better mobile conversion
      window.location.href = checkoutUrl;

    } catch (err) {
      console.error('Redirection error:', err);
      // Ultimate fallback
      window.location.href = `https://pay.hotmart.com/${checkout.hotmartOfferCode}`;
    }

  };

  return (
    <>
      {/* Modal — only rendered when open */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label="Formulário de identificação"
        >
          {/* Backdrop */}
          <div
            className={`absolute inset-0 bg-black/85 backdrop-blur-xl transition-opacity duration-300 ${showContent ? 'opacity-100' : 'opacity-0'}`}
            onClick={closeCheckoutModal}
          />

          {/* Modal Card */}
          <div
            ref={modalRef}
            className={`relative w-[94%] max-w-[420px] mx-auto transition-all duration-400 ease-out ${showContent ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'}`}
          >
            {/* Close Button */}
            <button
              onClick={closeCheckoutModal}
              className="absolute -top-3 -right-3 z-50 w-9 h-9 flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-white/60 hover:text-white hover:bg-white/20 transition-all duration-200 backdrop-blur-md shadow-lg"
              aria-label="Fechar"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Card */}
            <div className="bg-[#0a0f1a]/98 rounded-[28px] border border-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.8)] backdrop-blur-3xl overflow-hidden">

              {/* Top Glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[2px] bg-gradient-to-r from-transparent via-[#00f2ff]/60 to-transparent" />

              {/* Header */}
              <div className="pt-8 pb-4 px-6 text-center">
                {/* Med7 Logo Text */}
                <div className="mb-4">
                  <span className="text-white font-display font-black text-xl tracking-tight">MED</span>
                  <span className="text-[#00f2ff] font-display font-black text-xl">7</span>
                </div>

                <h3 className="text-white font-display font-bold text-[17px] sm:text-lg leading-snug mb-1.5">
                  Preencha para liberar seu acesso
                </h3>
                <p className="text-white/50 text-[13px] font-body">
                  Dados necessários para processar seu pedido com segurança.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="px-6 pb-6 space-y-4" noValidate>

                {/* Name Field */}
                <div>
                  <div className={`relative rounded-xl border transition-colors duration-200 ${errors.name ? 'border-red-500/60 bg-red-500/5' : 'border-white/15 bg-white/5 focus-within:border-[#00f2ff]/40 focus-within:bg-white/[0.07]'}`}>
                    <input
                      ref={nameInputRef}
                      type="text"
                      id="lead-name"
                      value={name}
                      onChange={handleNameChange}
                      placeholder="Seu nome"
                      autoComplete="given-name"
                      className="w-full bg-transparent text-white text-[15px] font-body px-4 py-3.5 rounded-xl outline-none placeholder:text-white/30"
                    />
                  </div>
                  {errors.name && <p className="text-red-400 text-[11px] mt-1.5 ml-1 font-medium">{errors.name}</p>}
                </div>

                {/* Email Field */}
                <div>
                  <div className={`relative rounded-xl border transition-colors duration-200 ${errors.email ? 'border-red-500/60 bg-red-500/5' : 'border-white/15 bg-white/5 focus-within:border-[#00f2ff]/40 focus-within:bg-white/[0.07]'}`}>
                    <input
                      type="email"
                      id="lead-email"
                      value={email}
                      onChange={handleEmailChange}
                      placeholder="Seu melhor e-mail"
                      autoComplete="email"
                      className="w-full bg-transparent text-white text-[15px] font-body px-4 py-3.5 rounded-xl outline-none placeholder:text-white/30"
                    />
                  </div>
                  {errors.email && <p className="text-red-400 text-[11px] mt-1.5 ml-1 font-medium">{errors.email}</p>}
                </div>

                {/* Phone Field with +55 flag */}
                <div>
                  <div className={`relative rounded-xl border transition-colors duration-200 flex items-center ${errors.phone ? 'border-red-500/60 bg-red-500/5' : 'border-white/15 bg-white/5 focus-within:border-[#00f2ff]/40 focus-within:bg-white/[0.07]'}`}>
                    {/* Country Code Prefix */}
                    <div className="flex items-center gap-1.5 pl-4 pr-2 py-3.5 border-r border-white/10 flex-shrink-0 select-none">
                      <span className="text-[16px] leading-none">🇧🇷</span>
                      <span className="text-white/60 text-[13px] font-body font-medium">+55</span>
                    </div>
                    <input
                      type="tel"
                      id="lead-phone"
                      value={phone}
                      onChange={handlePhoneChange}
                      placeholder="(DD) XXXXX-XXXX"
                      autoComplete="tel-national"
                      className="w-full bg-transparent text-white text-[15px] font-body px-3 py-3.5 rounded-r-xl outline-none placeholder:text-white/30"
                    />
                  </div>
                  {errors.phone && <p className="text-red-400 text-[11px] mt-1.5 ml-1 font-medium">{errors.phone}</p>}
                </div>

                {/* Hidden Tracking Fields */}
                <input type="hidden" name="especialidade_medica" id="especialidade_medica" value="Ortopedista" />
                <input type="hidden" name="hotmart_offer_id" id="hotmart_offer_id" value={checkout.hotmartOfferCode || 'br84xiqy'} />
                <input type="hidden" name="utm_source" id="utm_source" value={utmSource} />
                <input type="hidden" name="utm_medium" id="utm_medium" value={utmMedium} />
                <input type="hidden" name="utm_campaign" id="utm_campaign" value={utmCampaign} />

                {/* CTA Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative w-full py-4 mt-2 rounded-xl font-display font-black text-[14px] sm:text-[15px] uppercase tracking-wider transition-all duration-300 overflow-hidden disabled:opacity-60 disabled:cursor-wait bg-gradient-to-r from-[#00d4ff] via-[#00f2ff] to-[#00d4ff] text-[#020b18] shadow-[0_0_30px_rgba(0,242,255,0.35)] hover:shadow-[0_0_45px_rgba(0,242,255,0.55)] hover:scale-[1.02] active:scale-[0.98]"
                >
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-[150%] skew-x-[-30deg] animate-[shimmer_2.5s_infinite]" />

                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Processando...
                      </>
                    ) : (
                      <>
                        IR PARA PAGAMENTO SEGURO
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </>
                    )}
                  </span>
                </button>

                {/* LGPD Notice */}
                <p className="text-[10px] text-white/40 text-center px-4 leading-relaxed mt-2">
                  🔒 Seus dados estão protegidos. Ao avançar para o pagamento, você concorda com nossos <span className="text-white/60">Termos de Uso</span> e <span className="text-white/60">Política de Privacidade</span>.
                </p>

                {/* Trust Indicators */}
                <div className="flex items-center justify-center gap-5 pt-3 pb-1">
                  <div className="flex items-center gap-1.5 opacity-70">
                    <span className="text-[13px]">🔒</span>
                    <span className="text-[10px] font-display font-bold uppercase tracking-widest text-white/50">Seguro</span>
                  </div>
                  <div className="flex items-center gap-1.5 opacity-70">
                    <span className="text-[13px]">⚡</span>
                    <span className="text-[10px] font-display font-bold uppercase tracking-widest text-white/50">Imediato</span>
                  </div>
                  <div className="flex items-center gap-1.5 opacity-70">
                    <span className="text-[13px]">🛡️</span>
                    <span className="text-[10px] font-display font-bold uppercase tracking-widest text-white/50">Protegido</span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
