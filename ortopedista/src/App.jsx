import React from 'react';
import { Hero } from './components/Hero';
import { Hook } from './components/Hook';
import { Mechanism } from './components/Mechanism';
import { SocialProof } from './components/SocialProof';
import { Usage } from './components/Usage';
import { Gallery } from './components/Gallery';
import { Pricing } from './components/Pricing';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { MiniOffer } from './components/MiniOffer';

function App() {
  return (
    <div className="bg-[#020b18] min-h-screen">
      <main className="font-body text-white antialiased max-w-[480px] mx-auto min-h-screen bg-gradient-to-b from-[#020b18] via-[#01142c] to-[#020a18] shadow-[0_0_100px_rgba(0,0,0,0.8)] flex flex-col overflow-x-hidden">
        <Navbar />
        <Hero />
        <MiniOffer />
        <Hook />
        <Usage />
        <Gallery />
        <Mechanism />
        <SocialProof />
        <Pricing />
        <Faq />
        <Footer />
      </main>
    </div>
  );
}

export default App;
