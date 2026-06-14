import { useState } from 'react';
import SmoothScroll from './hooks/SmoothScroll';
import PageLoader from './components/PageLoader';
import ImageViewHint from './components/ImageViewHint';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SectionDivider from './components/SectionDivider';
import FeaturedSpaces from './components/FeaturedSpaces';
import MaterialsShowcase from './components/MaterialsShowcase';
import CraftsmanshipStory from './components/CraftsmanshipStory';
import FurnitureCollection from './components/FurnitureCollection';
import SurfaceGallery from './components/SurfaceGallery';
import SpaceCalculator from './components/SpaceCalculator';
import Testimonials from './components/Testimonials';
import ContactFooter from './components/ContactFooter';

export default function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <SmoothScroll>
      {!loaded && <PageLoader onComplete={() => setLoaded(true)} />}
      <ImageViewHint />
      <Navbar loaded={loaded} />
      <main>
        <Hero loaded={loaded} />
        <SectionDivider />
        <FeaturedSpaces />
        <SectionDivider />
        <MaterialsShowcase />
        <CraftsmanshipStory />
        <FurnitureCollection />
        <SurfaceGallery />
        <SpaceCalculator />
        <Testimonials />
      </main>
      <ContactFooter />
    </SmoothScroll>
  );
}
