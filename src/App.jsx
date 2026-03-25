import { useState } from 'react'
import './index.css'

const styles = [
  {
    id: 'classy-feminine',
    label: 'Classy feminine fits high end like a luxury spa',
    fits: 'Luxury spa, high-end salon, beauty clinic',
    bg: 'bg-white',
    textColor: 'text-indigo-950',
    heading: { font: 'Cormorant Infant', weight: 'font-normal', size: 'text-5xl', text: 'Visit Us in New York', color: 'text-indigo-950', capitalize: true },
    body: { font: 'Onest', weight: 'font-normal', size: 'text-base', text: 'Fringe Salon brings our creative, community-focused hair services to some of New York\'s most vibrant neighborhoods. You can find us in Manhattan, Brooklyn, the Lower East Side, and Gowanus, where our master stylists blend artistry with genuine care.', color: 'text-indigo-950' },
    cta: { text: 'Discover Our Locations', bg: 'bg-red-300', color: 'text-indigo-950', font: 'Onest', rounded: 'rounded-full' },
  },
  {
    id: 'bold-confident',
    label: 'Bold confident fits a health club or a shop',
    fits: 'Health club, barbershop, beauty salon, bold retail',
    bg: 'bg-gradient-to-br from-gray-900 to-gray-700',
    textColor: 'text-white',
    heading: { font: 'Poppins', weight: 'font-bold', size: 'text-5xl', text: 'Tu salón de belleza integral en Belgrano', color: 'text-white', uppercase: true },
    body: { font: 'Poppins', weight: 'font-medium', size: 'text-lg', text: 'Tu equipo de belleza en Belgrano, con 4.9 de calificación y casi 78 reseñas en Google. Profesionales dedicados a realzar tu estilo.', color: 'text-white' },
    cta: { text: 'Reservar Turno', bg: 'bg-yellow-500', color: 'text-gray-900', font: 'Poppins', rounded: 'rounded-lg' },
  },
  {
    id: 'luxury-sophisticated',
    label: 'High end luxury sophisticated combo',
    fits: 'Medspa, luxury clinic, high-end wellness',
    bg: 'bg-gradient-to-br from-stone-100 to-stone-200',
    textColor: 'text-yellow-900',
    heading: { font: 'Playfair Display', weight: 'font-normal', size: 'text-4xl', text: 'Welcome to Manhattan Medspa!', color: 'text-yellow-900' },
    subheading: { font: 'Jost', weight: 'font-black', size: 'text-5xl', text: "NEW YORK'S ULTIMATE MEDSPA EXPERIENCE", color: 'text-stone-800', uppercase: true, tracking: 'tracking-widest' },
    body: { font: 'Jost', weight: 'font-normal', size: 'text-xl', text: 'We are a Boutique Clinic offering Top of the Line Products and Skin care Services using State-of-the-art Equipment with a Personal Touch.', color: 'text-stone-700' },
    cta: { text: 'Learn More About Us', bg: 'bg-gray-600', color: 'text-white', font: 'Playfair Display', rounded: 'rounded-none', uppercase: true, tracking: 'tracking-[3px]' },
  },
  {
    id: 'simple-reliable',
    label: 'Simple fits almost anything — when u just need something reliable',
    fits: 'Insurance, any service business, general purpose',
    bg: 'bg-gradient-to-br from-sky-600 to-sky-800',
    textColor: 'text-white',
    heading: { font: 'Montserrat', weight: 'font-extrabold', size: 'text-6xl', text: 'We Ensure A Best Insurance Service', color: 'text-white' },
    body: { font: 'Montserrat', weight: 'font-medium', size: 'text-xl', text: 'We know how large objects will act, but things on a small scale. Trust our experts to deliver reliable results every time.', color: 'text-white' },
    cta: { text: 'Get Quote Now', bg: 'bg-sky-500', color: 'text-white', font: 'Montserrat', rounded: 'rounded-full' },
  },
  {
    id: 'creative-agency',
    label: 'Creative agency',
    fits: 'Digital agency, creative studio, web design firm',
    bg: 'bg-gray-950',
    textColor: 'text-white',
    heading: { font: 'Anton', weight: 'font-normal', size: 'text-7xl', text: 'It all begins with a simple conversation.', color: 'text-white', uppercase: true, highlight: { word: 'conversation.', color: 'text-blue-200' } },
    body: { font: 'Geist', weight: 'font-normal', size: 'text-lg', text: 'We manage your digital presence end-to-end: from smart strategy to SEO, ads, social, and standout web design.', color: 'text-white' },
    cta: { text: 'Book A Call →', bg: 'bg-lime-300', color: 'text-gray-950', font: 'Geist', rounded: 'rounded-full' },
  },
  {
    id: 'bold-creative-agency',
    label: 'Bold creative agency',
    fits: 'Web agency, branding firm, creative powerhouse',
    bg: 'bg-gray-950',
    textColor: 'text-white',
    heading: { font: 'Archivo', weight: 'font-extrabold', size: 'text-8xl', text: 'Memorable Websites That Sell.', color: 'text-white', uppercase: true, highlight: { word: '.', color: 'text-violet-500' } },
    body: { font: 'Archivo', weight: 'font-light', size: 'text-xl', text: 'Want a website customers love? We build memorable websites for brands like yours that earn more customers, outshine competitors, and help recruit top talent.', color: 'text-white' },
    cta: { text: "Let's Chat", bg: 'bg-gradient-to-r from-fuchsia-800 to-rose-500', color: 'text-white', font: 'Archivo', rounded: 'rounded-full', uppercase: true },
  },
  {
    id: 'friendly-trustable',
    label: 'Friendly font trustable lots of character',
    fits: 'Home renovation, remodeling, friendly contractor',
    bg: 'bg-gradient-to-br from-emerald-700 to-emerald-900',
    textColor: 'text-white',
    heading: { font: 'Outfit', weight: 'font-semibold', size: 'text-7xl', text: 'Looking to Remodel Your Home?', color: 'text-white', capitalize: true },
    subheading: { font: 'Outfit', weight: 'font-bold', size: 'text-3xl', text: 'FTR Renovation | Permits, financing, design, and builds.', color: 'text-white', capitalize: true },
    body: { font: 'Outfit', weight: 'font-medium', size: 'text-xl', text: 'We deliver expert craftsmanship and seamless project management to bring your vision to life.', color: 'text-white' },
    cta: { text: 'Get Free Estimate', bg: 'bg-white', color: 'text-emerald-800', font: 'Outfit', rounded: 'rounded-lg' },
  },
  {
    id: 'high-end-roofer',
    label: 'High end trustable stylish like a roofer that wants to impress',
    fits: 'Roofer, high-end contractor, quality builder',
    bg: 'bg-gray-900',
    textColor: 'text-white',
    heading: { font: 'Roboto Slab', weight: 'font-black', size: 'text-7xl', text: 'Committed to superior quality and results.', color: 'text-white' },
    subheading: { font: 'Roboto Slab', weight: 'font-normal', size: 'text-sm', text: 'PROFESSIONAL & EXPERT', color: 'text-yellow-500', uppercase: true, tracking: 'tracking-widest' },
    body: { font: 'Inter', weight: 'font-normal', size: 'text-base', text: 'Golden State Builder Inc. is dedicated to delivering exceptional craftsmanship and outstanding results. Our team of skilled professionals ensures every project meets the highest standards of quality.', color: 'text-gray-300' },
    cta: { text: 'Discover More', bg: 'bg-yellow-500', color: 'text-white', font: 'Inter', rounded: 'rounded-none', uppercase: true },
  },
  {
    id: 'bold-contractor',
    label: 'Bold confident nice design for say a contractor',
    fits: 'Painting contractor, concrete coatings, bold local business',
    bg: 'bg-gradient-to-br from-blue-900 to-blue-950',
    textColor: 'text-white',
    heading: { font: 'Franklin Gothic Heavy', weight: 'font-normal', size: 'text-7xl', text: "Central Valley's Award-Winning Painting & Concrete Coatings Team", color: 'text-white' },
    subheading: { font: 'Franklin Gothic Heavy', weight: 'font-normal', size: 'text-4xl', text: 'Affordable, friendly and ready to paint!', color: 'text-yellow-400' },
    body: { font: 'Franklin Gothic Book', weight: 'font-normal', size: 'text-xl', text: "We're a local business with 39+ years of experience and a strong community focus. Licensed, insured, in-house experts only!", color: 'text-white', fallbackFont: 'Inter' },
    cta: { text: 'Contact Us', bg: 'bg-rose-700', color: 'text-white', font: 'Inter', rounded: 'rounded-sm' },
  },
  {
    id: 'modern-consultancy',
    label: 'Very nice modern high end like a consultancy service',
    fits: 'Relocation service, consultancy, professional services',
    bg: 'bg-white',
    textColor: 'text-stone-900',
    heading: { font: 'Geist', weight: 'font-semibold', size: 'text-6xl', text: 'Relocate with confidence. Settle with ease.', color: 'text-stone-900' },
    subheading: { font: 'Geist', weight: 'font-medium', size: 'text-base', text: 'New Country. New Life.', color: 'text-stone-900' },
    body: { font: 'Geist', weight: 'font-normal', size: 'text-lg', text: 'Personalized support for individuals, families, and professionals moving abroad.', color: 'text-stone-900' },
    cta: { text: 'Get a Free Consultation', bg: 'bg-indigo-500', color: 'text-stone-50', font: 'Geist', rounded: 'rounded-full' },
  },
  {
    id: 'fits-anything-ibm',
    label: 'Fits almost anything — like a white collar anything (notice the IBM Plex Serif)',
    fits: 'SaaS, tech company, consulting, any white collar',
    bg: 'bg-white',
    textColor: 'text-slate-700',
    heading: { font: 'Space Grotesk', weight: 'font-bold', size: 'text-6xl', text: 'We bring solutions to make life easier for our customers.', color: 'text-slate-700', highlight: { word: 'solutions', color: 'text-indigo-700', font: 'IBM Plex Serif', weight: 'font-semibold' } },
    body: { font: 'Space Grotesk', weight: 'font-normal', size: 'text-2xl', text: 'We have considered our solutions to support every stage of your growth.', color: 'text-gray-500' },
    cta: { text: 'Get Started', bg: 'bg-indigo-700', color: 'text-white', font: 'Space Grotesk', rounded: 'rounded-lg' },
  },
  {
    id: 'classic-web-school',
    label: 'Classic web template fits white collar like a school or whatever',
    fits: 'School, education, university, classic institution',
    bg: 'bg-white',
    textColor: 'text-gray-950',
    heading: { font: 'Outfit', weight: 'font-semibold', size: 'text-7xl', text: 'Building Futures Together By Empowering Minds', color: 'text-gray-950' },
    body: { font: 'Outfit', weight: 'font-normal', size: 'text-lg', text: 'Join us in shaping a brighter future by nurturing potential, empowering minds, and fostering growth through education and collaboration.', color: 'text-neutral-600' },
    cta: { text: 'Learn From the Top Experts', bg: 'bg-emerald-600', color: 'text-white', font: 'Outfit', rounded: 'rounded-full' },
  },
  {
    id: 'sophisticated-painter',
    label: 'Sophisticated some extra styling for say a painter',
    fits: 'Interior painter, premium painting services',
    bg: 'bg-stone-50',
    textColor: 'text-stone-900',
    heading: { font: 'Fraunces', weight: 'font-bold', size: 'text-5xl', text: 'Interior Painting for Los Angeles Homes', color: 'text-stone-900' },
    subheading: { font: 'Manrope', weight: 'font-medium', size: 'text-lg', text: 'NVJ PAINTING', color: 'text-red-600', uppercase: true, tracking: 'tracking-widest' },
    body: { font: 'Manrope', weight: 'font-normal', size: 'text-base', text: 'Transform your home\'s interior with professional painting services. We handle everything from single rooms to complete home interiors.', color: 'text-stone-800' },
    cta: { text: 'GET A FREE ESTIMATE', bg: 'bg-red-600', color: 'text-neutral-50', font: 'Manrope', rounded: 'rounded-sm', uppercase: true },
  },
  {
    id: 'high-end-house-builder',
    label: 'High end sophisticated for say a high end house builder',
    fits: 'High-end home builder, painting company, luxury contractor',
    bg: 'bg-white',
    textColor: 'text-violet-950',
    heading: { font: 'Lora', weight: 'font-medium', size: 'text-5xl', text: 'Bring New Life & Color to Your Home!', color: 'text-violet-950' },
    subheading: { font: 'Inter', weight: 'font-medium', size: 'text-lg', text: 'RESIDENTIAL & COMMERCIAL', color: 'text-purple-800', uppercase: true, tracking: 'tracking-widest' },
    body: { font: 'Inter', weight: 'font-normal', size: 'text-lg', text: 'Colarossi Painting & Rain Gutters has served the South Bay, Los Angeles and surrounding areas for over 30 years, delivering the highest quality customer service and finished product for your home or office.', color: 'text-zinc-500' },
    cta: { text: 'Get a Free Estimate', bg: 'bg-purple-800', color: 'text-white', font: 'Inter', rounded: 'rounded-none' },
  },
  {
    id: 'high-end-construction',
    label: 'High end construction or aviation engineering or whatever',
    fits: 'Metal fabrication, construction engineering, industrial',
    bg: 'bg-stone-50',
    textColor: 'text-stone-900',
    heading: { font: 'Urbanist', weight: 'font-medium', size: 'text-5xl', text: 'We specialize in high-quality metal fabrication, strength and efficiency. From individual parts to complex structures.', color: 'text-neutral-500', highlight: { phrase: 'metal fabrication, strength and efficiency', color: 'text-stone-900' } },
    body: { font: 'Urbanist', weight: 'font-light', size: 'text-base', text: 'Specializing in metal fabrication, custom components, and industrial builds, we bring together experience, precision, and hands-on craftsmanship.', color: 'text-neutral-500' },
    cta: { text: 'About Company', bg: 'bg-yellow-200', color: 'text-stone-900', font: 'Urbanist', rounded: 'rounded-full' },
  },
  {
    id: 'fancy-web-agency',
    label: 'Fancy like a high end web agency with confidence',
    fits: 'Digital marketing agency, tech consultancy',
    bg: 'bg-white',
    textColor: 'text-neutral-900',
    heading: { font: 'Space Grotesk', weight: 'font-bold', size: 'text-5xl', text: 'Skräddarsydda tjänster för framgångsrik marknadsföring', color: 'text-neutral-900' },
    subheading: { font: 'Space Grotesk', weight: 'font-bold', size: 'text-base', text: 'Populära tjänster', color: 'text-neutral-900' },
    body: { font: 'Space Grotesk', weight: 'font-medium', size: 'text-lg', text: 'På Qase är vi Best Friend Approved™ – din digitala marknadsföringsbyrå som hjälper ditt företag att nå sin digitala potential. Vi gör marknadsföring roligt och effektivt.', color: 'text-neutral-900/60' },
    cta: { text: 'Se alla tjänster', bg: 'bg-neutral-900', color: 'text-white', font: 'Space Grotesk', rounded: 'rounded-xl' },
  },
  {
    id: 'american-painter',
    label: 'Nice corporate bold like american painter',
    fits: 'American painting company, franchise painter, bold corporate',
    bg: 'bg-white',
    textColor: 'text-zinc-800',
    heading: { font: 'Montserrat', weight: 'font-black', size: 'text-6xl', text: 'Coloring Our Community', color: 'text-zinc-800' },
    subheading: { font: 'Montserrat', weight: 'font-medium', size: 'text-2xl', text: '360° Painting of Wilmington', color: 'text-zinc-800' },
    body: { font: 'Montserrat', weight: 'font-medium', size: 'text-base', text: 'Professional painting services for your home and business. Quality craftsmanship that transforms spaces.', color: 'text-zinc-600' },
    cta: { text: 'Book Your Free Estimate', bg: 'bg-rose-700', color: 'text-white', font: 'Montserrat', rounded: 'rounded-none', uppercase: true },
  },
  {
    id: 'modern-painter-builder',
    label: 'Modern can fit say a modern painter or builder',
    fits: 'Modern painter, builder, contemporary contractor',
    bg: 'bg-sky-50',
    textColor: 'text-black',
    heading: { font: 'Bebas Neue', weight: 'font-normal', size: 'text-5xl', text: 'About Stephen James Painting', color: 'text-black' },
    body: { font: 'Poppins', weight: 'font-normal', size: 'text-base', text: 'At Stephen James Painting, we specialize in transforming homes and businesses with professional interior and exterior painting services. Since 2006, we\'ve built a reputation for delivering exceptional craftsmanship, attention to detail, and outstanding customer service.', color: 'text-neutral-800' },
    cta: { text: 'LEARN MORE', bg: 'bg-gradient-to-r from-sky-600 to-cyan-500', color: 'text-white', font: 'Bebas Neue', rounded: 'rounded-md' },
  },
  {
    id: 'sophisticated-contractor',
    label: 'Sophisticated nice for say a high end contractor',
    fits: 'High-end contractor, premium service provider',
    bg: 'bg-white',
    textColor: 'text-zinc-950',
    heading: { font: 'Libre Franklin', weight: 'font-bold', size: 'text-5xl', text: "Don't Just Take Our Word For It", color: 'text-zinc-950' },
    body: { font: 'Inter', weight: 'font-normal', size: 'text-base', text: "Five-star painting reviews, our commitment to excellence shines through every project. Join the ranks of satisfied customers who trust Southern California's most recommended painting services.", color: 'text-zinc-950' },
    cta: { text: 'Read More Reviews', bg: 'bg-zinc-900', color: 'text-white', font: 'Libre Franklin', rounded: 'rounded-md' },
  },
]

function StyleCard({ style, index }) {
  const h = style.heading
  const b = style.body
  const c = style.cta

  const renderHeading = () => {
    if (h.highlight && h.highlight.word) {
      const parts = h.text.split(h.highlight.word)
      return (
        <span>
          {parts[0]}
          <span className={h.highlight.color} style={{ fontFamily: h.highlight.font || h.font, fontWeight: h.highlight.weight ? undefined : undefined }}>
            {h.highlight.word}
          </span>
          {parts[1] || ''}
        </span>
      )
    }
    if (h.highlight && h.highlight.phrase) {
      const idx = h.text.indexOf(h.highlight.phrase)
      if (idx >= 0) {
        return (
          <span>
            <span className={h.color}>{h.text.slice(0, idx)}</span>
            <span className={h.highlight.color}>{h.highlight.phrase}</span>
            <span className={h.color}>{h.text.slice(idx + h.highlight.phrase.length)}</span>
          </span>
        )
      }
    }
    return h.text
  }

  return (
    <div className={`${style.bg} rounded-2xl overflow-hidden shadow-lg`}>
      {/* Label bar */}
      <div className="bg-red-600 px-6 py-3 flex items-center justify-between">
        <span className="text-white text-sm font-semibold font-sans">{String(index + 1).padStart(2, '0')}</span>
        <span className="text-white text-sm font-medium font-sans">{style.label}</span>
      </div>
      
      {/* Content */}
      <div className="px-8 py-10 md:px-12 md:py-14">
        {/* Subheading if exists (above heading) */}
        {style.subheading && (
          <p 
            className={`${style.subheading.color} ${style.subheading.size} ${style.subheading.weight} ${style.subheading.uppercase ? 'uppercase' : ''} ${style.subheading.tracking || ''} mb-4`}
            style={{ fontFamily: `"${style.subheading.font}", sans-serif` }}
          >
            {style.subheading.text}
          </p>
        )}
        
        {/* Heading */}
        <h2 
          className={`${h.color} ${h.size} ${h.weight} ${h.uppercase ? 'uppercase' : ''} ${h.capitalize ? 'capitalize' : ''} ${h.tracking || ''} leading-tight mb-6`}
          style={{ fontFamily: `"${h.font}", serif` }}
        >
          {renderHeading()}
        </h2>

        {/* Body */}
        <p 
          className={`${b.color} ${b.size} ${b.weight} leading-relaxed mb-8 max-w-2xl`}
          style={{ fontFamily: `"${b.fallbackFont || b.font}", sans-serif` }}
        >
          {b.text}
        </p>

        {/* CTA */}
        <button 
          className={`${c.bg} ${c.color} ${c.rounded} ${c.uppercase ? 'uppercase' : ''} ${c.tracking || ''} px-8 py-3.5 font-semibold ${c.size || 'text-base'} transition-transform hover:scale-105`}
          style={{ fontFamily: `"${c.font}", sans-serif` }}
        >
          {c.text}
        </button>
      </div>

      {/* Font info bar */}
      <div className="bg-gray-100 px-8 py-4 border-t border-gray-200">
        <div className="flex flex-wrap gap-4 text-xs text-gray-500 font-mono">
          <span>Heading: <strong className="text-gray-800">{h.font}</strong> ({h.weight.replace('font-', '')})</span>
          <span>Body: <strong className="text-gray-800">{b.fallbackFont || b.font}</strong> ({b.weight.replace('font-', '')})</span>
          <span>CTA: <strong className="text-gray-800">{c.font}</strong></span>
          {style.subheading && <span>Sub: <strong className="text-gray-800">{style.subheading.font}</strong></span>}
        </div>
        <p className="text-xs text-gray-400 mt-1">Fits: {style.fits}</p>
      </div>
    </div>
  )
}

function App() {
  const [filter, setFilter] = useState('')
  
  const filtered = styles.filter(s => {
    if (!filter) return true
    const q = filter.toLowerCase()
    return s.label.toLowerCase().includes(q) 
      || s.fits.toLowerCase().includes(q)
      || s.heading.font.toLowerCase().includes(q)
      || s.body.font.toLowerCase().includes(q)
  })

  // Extract unique fonts
  const allFonts = [...new Set(styles.flatMap(s => [
    s.heading.font, 
    s.body.fallbackFont || s.body.font, 
    s.cta.font,
    ...(s.subheading ? [s.subheading.font] : []),
    ...(s.heading.highlight?.font ? [s.heading.highlight.font] : [])
  ]))].sort()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gray-950 text-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-red-400 text-sm font-mono mb-3 tracking-widest uppercase">Velocity Systems AB — Internal Reference</p>
          <h1 className="text-5xl md:text-7xl font-black mb-4" style={{ fontFamily: '"Archivo", sans-serif' }}>
            Font & Style<br />Reference
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mb-8" style={{ fontFamily: '"Inter", sans-serif' }}>
            {styles.length} curated design directions with exact font pairings from the Figma board. 
            Each card shows heading, body, and CTA font combinations ready to use in builds.
          </p>
          
          {/* Font count */}
          <div className="flex flex-wrap gap-2 mb-6">
            {allFonts.map(f => (
              <button
                key={f}
                onClick={() => setFilter(filter === f ? '' : f)}
                className={`px-3 py-1 rounded-full text-xs font-mono transition-colors ${
                  filter === f 
                    ? 'bg-red-500 text-white' 
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-200'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Search */}
          <input
            type="text"
            placeholder="Filter by style, font, or industry..."
            value={filter}
            onChange={e => setFilter(e.target.value)}
            className="w-full max-w-md bg-gray-800 text-white px-5 py-3 rounded-xl border border-gray-700 focus:border-red-500 focus:outline-none placeholder-gray-500"
          />
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex flex-col gap-10">
          {filtered.map((style, i) => (
            <StyleCard key={style.id} style={style} index={styles.indexOf(style)} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-400 py-20 text-lg">No styles match "{filter}"</p>
        )}
      </div>

      {/* Footer */}
      <div className="bg-gray-950 text-gray-500 text-center py-8 text-sm font-mono">
        Velocity Systems AB — Font Reference v1.0 — {allFonts.length} fonts across {styles.length} styles
      </div>
    </div>
  )
}

export default App
