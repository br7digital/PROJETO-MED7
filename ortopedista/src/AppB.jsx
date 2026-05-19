import React from 'react';
import { NavbarB } from './components/variant-b/NavbarB';
import { HeroB } from './components/variant-b/HeroB';
import { PainB } from './components/variant-b/PainB';
import { GalleryB } from './components/variant-b/GalleryB';
import { CustomizationB } from './components/variant-b/CustomizationB';
import { BonusesB } from './components/variant-b/BonusesB';
import { SocialProofB } from './components/variant-b/SocialProofB';
import { PricingB } from './components/variant-b/PricingB';
import { FaqB } from './components/variant-b/FaqB';
import { FooterB } from './components/variant-b/FooterB';
import { LeadCaptureModalB } from './components/variant-b/LeadCaptureModalB';
import { CheckoutProvider } from './contexts/CheckoutContext';

function App() {
  return (
    <CheckoutProvider>
      <div className="bg-[#020b18] min-h-screen">
        <main className="font-body text-white/80 antialiased max-w-[520px] mx-auto min-h-screen bg-[#020b18] flex flex-col overflow-x-hidden relative">
          <NavbarB />
          <HeroB />
          <PainB />
          <GalleryB />
          <CustomizationB />
          <BonusesB />
          <SocialProofB />
          <PricingB />
          <FaqB />
          <FooterB />
        </main>
        <LeadCaptureModalB />
      </div>
    </CheckoutProvider>
  );
}

export default App;
