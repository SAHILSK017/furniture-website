export const IMG = {
  hero: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2400&q=90',
  livingRoom: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=88',
  workspace: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=88',
  kitchen: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=88',
  granite: 'https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1600&q=88',
  marble: 'https://images.unsplash.com/photo-1567226840607-8999f0550901?auto=format&fit=crop&w=1200&q=88',
  tiles: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=88',
  furniture: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1600&q=88',
  furniture2: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1400&q=88',
  furniture3: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1400&q=88',
  concept: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=88',
  craft: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=88',
  sideboard: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=88',
};

export const HERO_SLIDES = [
  IMG.hero,
  IMG.livingRoom,
  IMG.kitchen,
  IMG.concept,
  IMG.workspace,
  IMG.furniture,
];

export const MATERIALS = [
  {
    id: 'granite',
    title: 'Granite & Tiles',
    subtitle: 'Surfaces of Permanence',
    description:
      'Quarry-sourced granite and artisan tiles — selected for veining, finish, and the quiet authority they bring to architectural spaces.',
    image: IMG.granite,
  },
  {
    id: 'furniture',
    title: 'Furniture',
    subtitle: 'Sculpted for Living',
    description:
      'Bespoke sofas, dining tables, and accent pieces — proportioned to complement stone surfaces with warmth and enduring elegance.',
    image: IMG.furniture,
  },
  {
    id: 'concepts',
    title: 'Interior Concepts',
    subtitle: 'Complete Vision',
    description:
      'Curated room compositions harmonizing granite, tile, furniture, and light into environments ready to inhabit.',
    image: IMG.concept,
  },
];

export const SPACES = [
  {
    id: 'living',
    title: 'Luxury Living Room',
    tag: 'Statement Interiors',
    description: 'Natural stone, bespoke furniture, and cinematic light in perfect proportion.',
    image: IMG.livingRoom,
    dominant: true,
  },
  {
    id: 'workspace',
    title: 'Executive Workspace',
    tag: 'Precision & Stone',
    description: 'Granite surfaces and structured shelving for focused luxury.',
    image: IMG.workspace,
  },
  {
    id: 'kitchen',
    title: 'Modern Kitchen',
    tag: 'Granite & Oak',
    description: 'Calacatta-inspired islands paired with warm timber cabinetry.',
    image: IMG.kitchen,
  },
];

export const TIMELINE = [
  { title: 'Raw Material', text: 'Hand-selected granite, marble, and timber from trusted quarries and ateliers worldwide.' },
  { title: 'Design', text: 'Every surface and furnishing composed with architectural intent and material honesty.' },
  { title: 'Manufacturing', text: 'Precision cutting, finishing, and assembly by artisans across our Chennai and Madurai studios.' },
  { title: 'Installation', text: 'Meticulous on-site execution — seamless joints, level surfaces, structural integrity.' },
  { title: 'Luxury Living', text: 'Spaces reborn through stone, surface, and furniture working in quiet harmony.' },
];

export const FURNITURE = [
  {
    title: 'Velvet Lounge',
    tag: 'Living',
    description: 'Deep velvet upholstery with sculpted lines — a centrepiece for refined living rooms.',
    image: IMG.furniture,
  },
  {
    title: 'Marble Console',
    tag: 'Entry',
    description:
      'Polished marble console with brass inlay — designed for entryways, creating an immediate sense of arrival and permanence.',
    image: IMG.furniture2,
  },
  {
    title: 'Oak Dining',
    tag: 'Dining',
    description: 'Solid oak dining table with stone base — proportioned for gatherings that feel both intimate and grand.',
    image: IMG.furniture3,
  },
  {
    title: 'Stone Sideboard',
    tag: 'Bedroom',
    description: 'Granite-topped sideboard with soft-close drawers — storage elevated to architectural furniture.',
    image: IMG.sideboard,
  },
];

export const SURFACES = [
  {
    type: 'Granite',
    name: 'Absolute Black',
    description: 'Deep polished black granite with mirror finish — bold, timeless, and architecturally commanding.',
    image: IMG.granite,
    span: 'lg:col-span-7 lg:row-span-2',
  },
  {
    type: 'Marble',
    name: 'Calacatta Gold',
    description: 'Warm gold veining across luminous white marble — the hallmark of European luxury kitchens and baths.',
    image: IMG.marble,
    span: 'lg:col-span-5',
  },
  {
    type: 'Tiles',
    name: 'Terrazzo White',
    description: 'Hand-cast terrazzo with subtle aggregate — contemporary texture for floors, walls, and feature surfaces.',
    image: IMG.tiles,
    span: 'lg:col-span-4',
  },
  {
    type: 'Granite',
    name: 'Kashmir White',
    description: 'Soft grey-white granite with gentle movement — versatile for countertops and cladding.',
    image: IMG.kitchen,
    span: 'lg:col-span-4',
  },
  {
    type: 'Marble',
    name: 'Statuario',
    description: 'Dramatic grey veining on pure white — the classic choice for statement bathrooms and lobbies.',
    image: IMG.livingRoom,
    span: 'lg:col-span-4 lg:row-span-2',
  },
  {
    type: 'Tiles',
    name: 'Slate Grey',
    description: 'Matte slate-toned tiles with natural texture — grounding modern and minimalist interiors.',
    image: IMG.craft,
    span: 'lg:col-span-4',
  },
];

export const TESTIMONIALS = [
  {
    id: 'living-room',
    name: 'Priya & Rajesh K.',
    location: 'Chennai',
    projectType: 'Luxury Living Room',
    category: 'Residential',
    quote:
      'We had been living with the same layout for twelve years and never quite felt at home in our own living room. Amara helped us choose a Calacatta marble feature wall and custom seating that actually fits how we use the space — evenings with family, not just for guests. The installers were meticulous about the veining alignment. It feels finished, finally.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 'granite-kitchen',
    name: 'Lakshmi Venkatesh',
    location: 'Madurai',
    projectType: 'Granite Kitchen',
    category: 'Kitchen',
    quote:
      'My old laminate counters were staining every month. We went with Absolute Black granite through Amara — the edge detail on the island alone was worth the wait. They measured twice, templated on site, and the seam is nearly invisible. Cooking feels different now; the surface stays cool, wipes clean, and the kitchen looks like it belongs in a proper home, not a rental.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 'executive-workspace',
    name: 'Arjun Mehta',
    location: 'Chennai',
    projectType: 'Office Workspace',
    category: 'Commercial',
    quote:
      'We outgrew a generic co-working aesthetic and needed a boardroom that clients would remember without feeling ostentatious. Amara specified polished granite desktops and integrated shelving in dark walnut tones. Deadlines were tight — they coordinated fabrication and install across two floors without us chasing updates. Our team notices the difference every morning.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 'marble-entry',
    name: 'Meera Subramanian',
    location: 'Coimbatore',
    projectType: 'Marble Entry Console',
    category: 'Entryway',
    quote:
      'The foyer was the one room we kept postponing. Amara designed a marble console with brass inlay that sets the tone before you step into the house. What I appreciated most was honesty — they told us which stone would hold up to daily keys, bags, and monsoon moisture. Six months in, it still looks the day it was installed.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 'furniture-collection',
    name: 'Karthik & Ananya R.',
    location: 'Bengaluru',
    projectType: 'Furniture Collection',
    category: 'Residential',
    quote:
      'We wanted pieces that would last beyond trends — a dining table, sideboards, and bedroom storage in one cohesive palette. Amara\'s furniture team worked from our floor plan and suggested proportions we would never have considered. Delivery was white-glove; not a scratch on the floors. Friends assume we hired an architect separately.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 'bathroom-surfaces',
    name: 'Dr. Selvam P.',
    location: 'Trichy',
    projectType: 'Granite Bathroom',
    category: 'Bathroom',
    quote:
      'Renovating two bathrooms with young children meant we needed surfaces that could take daily wear. Amara recommended a honed granite vanity top and slip-resistant floor tiles that still look refined. Their site supervisor checked waterproofing before stone went in — small detail, but it gave us confidence. No callbacks, no surprises on the final invoice.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80',
  },
];
