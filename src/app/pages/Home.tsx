import { Hero } from '../components/Hero';
import { ProductPreviewEnhanced } from '../components/ProductPreviewEnhanced';
import { Features } from '../components/Features';
import { HowItWorks } from '../components/HowItWorks';
import { SocialProof } from '../components/SocialProof';
import { FinalCTA } from '../components/FinalCTA';
import { Footer } from '../components/Footer';

export function Home() {
  return (
    <div className="min-h-screen bg-white antialiased">
      <Hero />
      <ProductPreviewEnhanced />
      <Features />
      <HowItWorks />
      <SocialProof />
      <FinalCTA />
      <Footer />
    </div>
  );
}
