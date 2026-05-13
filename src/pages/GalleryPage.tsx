import { useState } from 'react';
import { Search, Filter, Maximize2 } from 'lucide-react';

const CATEGORIES = ['All', 'Floral', 'Tropical', 'Sculpted', '3D Render', 'Abstract'] as const;

const GALLERY_ITEMS = [
  {
    id: 1,
    title: 'Ethereal Orchid Cascade',
    category: 'Floral',
    image: '/gallery/gallery_1_orchid_1778644398686.png',
    author: 'Studio Bloom',
    aspect: 'landscape',
  },
  {
    id: 2,
    title: 'Monstera DNA Study',
    category: 'Tropical',
    image: '/gallery/gallery_9_monstera_1778644538327.png',
    author: 'Flora Labs',
    aspect: 'portrait',
  },
  {
    id: 3,
    title: 'Crystal Garden v2',
    category: '3D Render',
    image: '/gallery/gallery_2_crystal_1778644414133.png',
    author: 'NatureAI Co.',
    aspect: 'landscape',
  },
  {
    id: 4,
    title: 'Peony Architecture',
    category: 'Sculpted',
    image: '/gallery/gallery_5_peony_1778644475164.png',
    author: 'Petal Studio',
    aspect: 'portrait',
  },
  {
    id: 5,
    title: 'Bioluminescent Fern',
    category: 'Abstract',
    image: '/gallery/gallery_3_fern_1778644428637.png',
    author: 'Glow Works',
    aspect: 'landscape',
  },
  {
    id: 6,
    title: 'Succulent Geometry',
    category: 'Sculpted',
    image: '/gallery/gallery_6_succulent_1778644487729.png',
    author: 'Form Studio',
    aspect: 'square',
  },
  {
    id: 7,
    title: 'Tropical Reef Garden',
    category: 'Tropical',
    image: '/gallery/gallery_7_reef_1778644506354.png',
    author: 'Reef AI',
    aspect: 'landscape',
  },
  {
    id: 8,
    title: 'Rose Petal Vortex',
    category: 'Floral',
    image: '/gallery/gallery_8_rose_1778644524921.png',
    author: 'Vortex Lab',
    aspect: 'portrait',
  },
  {
    id: 9,
    title: 'Neural Botanics',
    category: '3D Render',
    image: '/gallery/gallery_4_neural_1778644447150.png',
    author: 'Deep Flora',
    aspect: 'landscape',
  },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState<(typeof GALLERY_ITEMS)[0] | null>(null);

  const filtered = GALLERY_ITEMS.filter((item) => {
    const matchCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchSearch =
      !searchQuery ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="px-4 sm:px-6 lg:px-16 pb-16 sm:pb-24">
      {/* Header */}
      <div className="text-center pt-8 sm:pt-12 pb-8 sm:pb-12 max-w-2xl mx-auto">
        <p className="text-[10px] sm:text-xs tracking-widest uppercase text-white/50 mb-4 font-semibold">
          Community Showcase
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-[-0.04em] text-white leading-[1.1] mb-6">
          Explore the <br className="hidden sm:block" />
          <em className="font-serif italic text-white/80 font-normal">gallery</em>
        </h1>
        <p className="text-sm sm:text-base text-white/60 max-w-lg mx-auto leading-relaxed">
          Discover breathtaking botanical designs created by our global community of AI‑powered artists.
        </p>
      </div>

      {/* Filters */}
      <div className="max-w-5xl mx-auto mb-8 sm:mb-10 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
        {/* Search */}
        <div className="liquid-glass rounded-2xl px-4 py-3 flex items-center gap-3 flex-1 min-w-0">
          <Search className="w-4 h-4 text-white/40 shrink-0" />
          <input
            type="text"
            placeholder="Search designs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent outline-none text-sm text-white placeholder:text-white/30 w-full"
          />
        </div>

        {/* Category pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 no-scrollbar">
          <Filter className="w-4 h-4 text-white/40 shrink-0 hidden sm:block" />
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`shrink-0 rounded-full px-4 py-2 text-xs font-medium cursor-pointer transition-all hover:scale-105 active:scale-95 ${
                activeCategory === cat
                  ? 'liquid-glass-strong text-white'
                  : 'liquid-glass text-white/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-5xl mx-auto columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-5 space-y-4 sm:space-y-5">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="liquid-glass rounded-2xl sm:rounded-3xl overflow-hidden break-inside-avoid group cursor-pointer hover:scale-[1.02] transition-transform"
            onClick={() => setSelectedItem(item)}
          >
            <div className="relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full object-cover"
                loading="lazy"
                style={{
                  aspectRatio:
                    item.aspect === 'portrait'
                      ? '2/3'
                      : item.aspect === 'square'
                      ? '1/1'
                      : '3/2',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <Maximize2 className="w-5 h-5 text-white/80 absolute top-4 right-4" />
              </div>
            </div>
            <div className="p-4 sm:p-5">
              <h3 className="text-sm font-medium text-white mb-1 truncate">{item.title}</h3>
              <div className="flex items-center justify-between">
                <p className="text-[10px] sm:text-xs text-white/50">{item.author}</p>
                <span className="text-[10px] text-white/30 liquid-glass rounded-full px-2.5 py-0.5">
                  {item.category}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20">
          <p className="text-white/40 text-sm">No designs found. Try a different search or category.</p>
        </div>
      )}

      {/* Lightbox */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 cursor-pointer"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="liquid-glass-strong rounded-3xl overflow-hidden max-w-3xl w-full max-h-[85vh] flex flex-col cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedItem.image}
              alt={selectedItem.title}
              className="w-full object-contain max-h-[60vh]"
            />
            <div className="p-5 sm:p-6">
              <h3 className="text-lg font-medium text-white mb-1">{selectedItem.title}</h3>
              <div className="flex items-center gap-3">
                <p className="text-xs text-white/50">{selectedItem.author}</p>
                <span className="text-[10px] text-white/30 liquid-glass rounded-full px-3 py-1">
                  {selectedItem.category}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
