import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AudioPlayer } from './components/AudioPlayer';
import { ProductGrid } from './components/ProductGrid';
import { DashboardSimulator } from './components/DashboardSimulator';
import { CurriculumModal } from './components/CurriculumModal';
import { ReaderModal } from './components/ReaderModal';
import { DiagnosticQuiz } from './components/DiagnosticQuiz';
import { PhilosophySection } from './components/PhilosophySection';
import { FaqSection } from './components/FaqSection';
import { CtaBand } from './components/CtaBand';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { PRODUCTS, Product } from './data/products';

export default function App() {
  const [isReaderOpen, setIsReaderOpen] = useState(false);
  const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);
  const [isAuditOpen, setIsAuditOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAudioOpen, setIsAudioOpen] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  // Selected products for bundle or cart
  const [selectedBundleIds, setSelectedBundleIds] = useState<string[]>([
    'extreme-path',
    'inevitable-self',
    'architecture-of-inevitable',
  ]);

  const handleToggleBundleSelect = (productId: string) => {
    setSelectedBundleIds((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
  };

  const handleSelectAllBundle = () => {
    setSelectedBundleIds(PRODUCTS.map((p) => p.id));
  };

  const handleToggleAudio = () => {
    if (!isAudioOpen) {
      setIsAudioOpen(true);
      setIsPlayingAudio(true);
    } else {
      setIsPlayingAudio(!isPlayingAudio);
    }
  };

  const handleQuickCheckout = (product: Product) => {
    window.open(product.gumroadUrl, '_blank', 'noopener,noreferrer');
  };

  const handleBuyBundle = () => {
    window.open('https://biniyamsafayo.gumroad.com/', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#060a12] text-[#f2f6fb]">
      {/* Top Navbar */}
      <Navbar
        onOpenReader={() => setIsReaderOpen(true)}
        onOpenAudit={() => setIsAuditOpen(true)}
        cartCount={selectedBundleIds.length}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          onOpenAudit={() => setIsAuditOpen(true)}
          onOpenReader={() => setIsReaderOpen(true)}
          onToggleAudio={handleToggleAudio}
          isPlayingAudio={isPlayingAudio && isAudioOpen}
        />

        {/* Catalog & Master Trilogy Section */}
        <ProductGrid
          onOpenSyllabus={() => setIsSyllabusOpen(true)}
          onOpenDashboardDemo={() => {
            const el = document.getElementById('dashboard');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenReader={() => setIsReaderOpen(true)}
          onQuickCheckout={handleQuickCheckout}
          selectedBundleIds={selectedBundleIds}
          onToggleBundleSelect={handleToggleBundleSelect}
          onBuyBundle={handleBuyBundle}
        />

        {/* Interactive Living Dashboard Sandbox Simulator */}
        <DashboardSimulator />

        {/* In-Depth Philosophy & Behavioral Manifesto Section */}
        <PhilosophySection />

        {/* Searchable and Categorized FAQ Section */}
        <FaqSection />

        {/* Final High-Intent CTA Band */}
        <CtaBand onOpenAudit={() => setIsAuditOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Persistent Audio Player */}
      <AudioPlayer
        isOpen={isAudioOpen}
        onClose={() => {
          setIsAudioOpen(false);
          setIsPlayingAudio(false);
        }}
        isPlaying={isPlayingAudio}
        onTogglePlay={() => setIsPlayingAudio(!isPlayingAudio)}
      />

      {/* Syllabus Modal for The Extreme Path */}
      <CurriculumModal isOpen={isSyllabusOpen} onClose={() => setIsSyllabusOpen(false)} />

      {/* Sample Chapter Reader Modal for The Architecture of the Inevitable */}
      <ReaderModal isOpen={isReaderOpen} onClose={() => setIsReaderOpen(false)} />

      {/* Goal Architecture 60s Diagnostic Modal */}
      <DiagnosticQuiz
        isOpen={isAuditOpen}
        onClose={() => setIsAuditOpen(false)}
        onSelectProduct={(id) => {
          setIsAuditOpen(false);
          const product = PRODUCTS.find((p) => p.id === id);
          if (product) handleQuickCheckout(product);
        }}
      />

      {/* Slide-over Cart & Bundle Manager */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        selectedIds={selectedBundleIds}
        onRemoveItem={(id) => handleToggleBundleSelect(id)}
        onAddAllBundle={handleSelectAllBundle}
      />
    </div>
  );
}
