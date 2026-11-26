import { useMemo, useState } from 'react'
import ProductCard from '../components/ProductCard'
import SiteFooter from '../components/SiteFooter'
import SiteHeader from '../components/SiteHeader'
import { useCart } from '../context/CartContext'
import {
  categories,
  chips,
  features,
  occasions,
  products,
  testimonials,
  trustItems,
} from '../data/home'
import '../styles/mockup.css'

export default function HomePage() {
  const { addToCart, showToast, toast } = useCart()
  const [activeChip, setActiveChip] = useState('All')
  const [liked, setLiked] = useState<Record<string, boolean>>({})

  const visibleProducts = useMemo(() => {
    if (activeChip === 'All') return products
    if (activeChip === 'Under ₹999') return products.filter((p) => p.price < 999)
    return products.filter((p) => p.tags.includes(activeChip))
  }, [activeChip])

  return (
    <>
      <SiteHeader />

      <section className="hero">
        <div className="wrap hero-inner">
          <div>
            <span className="pill">Trending Now</span>
            <h1>
              Ordinary
              <br />
              ends <em>here.</em>
            </h1>
            <p>A curated collection of rare, fun and unique finds you won&apos;t get everywhere.</p>
            <a href="#trending" className="btn-primary">
              Shop Now →
            </a>
          </div>
          <div className="hero-art">
            <div className="note">
              Exclusive
              <br />
              Designs ↙
            </div>
            <img
              className="hero-img"
              src="/images/d2ee435c-e8a6-433b-bb18-21a00cd5057d.webp"
              alt="Exclusive tumbler designs"
            />
            <div className="dots">
              <i />
              <i />
              <i />
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="wrap">
          {features.map((feat) => (
            <div className="feat" key={feat.label}>
              <span>{feat.icon}</span> {feat.label}
            </div>
          ))}
        </div>
      </section>

      <main className="wrap">
        <div className="welcome">
          <h2>
            Welcome to
            <br />
            My <span>Rare Store!</span>
          </h2>
          <p className="lede">
            Discover a world of unique, fun and hard-to-find products, curated just for you.
          </p>
        </div>

        <section className="cats" id="categories">
          {categories.map((cat) => (
            <a
              key={cat.title}
              href="#trending"
              className={`cat ${cat.big ? 'big' : cat.className ?? ''}`}
            >
              <h3>
                {cat.title.split('\n').map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
              </h3>
              <div className="go">→</div>
              <div className="emoji">
                <img src={cat.image} alt="" />
              </div>
            </a>
          ))}
        </section>

        <div className="sec-head" id="trending">
          <div>
            <div className="eyebrow">Shop our picks</div>
            <h2>Trending Products</h2>
          </div>
          <a href="#trending">View All →</a>
        </div>

        <div className="chips" role="tablist">
          {chips.map((chip) => (
            <button
              key={chip}
              type="button"
              className={`chip${activeChip === chip ? ' on' : ''}`}
              onClick={() => setActiveChip(chip)}
            >
              {chip}
            </button>
          ))}
        </div>

        <div className="grid" id="products">
          {visibleProducts.map((product) => (
            <ProductCard
              key={product.slug}
              product={product}
              liked={liked[product.name]}
              onToggleLike={(name) =>
                setLiked((prev) => ({ ...prev, [name]: !prev[name] }))
              }
            />
          ))}
        </div>

        <section className="promo space">
          <div>
            <span className="tag">Limited Edition</span>
            <h2>
              Fresh from
              <br />
              another <span>universe</span>
            </h2>
            <p>Astronaut lamps, galaxy projectors and cosmic desk toys.</p>
            <a href="#trending" className="btn-light">
              Explore Collection →
            </a>
          </div>
          <div className="promo-art">
            <img src="/images/Banner.png" alt="Astronaut with headphones and LED lamp" />
          </div>
        </section>

        <section className="promo lucky">
          <div>
            <h2>
              Feeling
              <br />
              lucky? <span>✱</span>
            </h2>
            <p>
              Can&apos;t decide? Let the universe
              <br />
              pick something unexpected for you.
            </p>
            <button
              type="button"
              className="btn-red"
              onClick={() => {
                addToCart('Mystery Box')
                showToast('Mystery box added to your cart')
              }}
            >
              Try a Mystery Box →
            </button>
          </div>
          <div className="promo-art">
            <img src="/images/4.png" alt="Mystery collectible" />
          </div>
        </section>

        <section className="occasion-new" id="occasions">
          <div className="occ-head">
            <div className="eyebrow">Gifts for every chapter</div>
            <h2>Shop by Occasion</h2>
            <p>Find the perfect rare gift for every moment, in India, China and beyond.</p>
          </div>
          <div className="occ-grid">
            {occasions.map((occ) => (
              <a href="#trending" className="occ-card" key={occ.title}>
                <div className="occ-art" style={{ background: occ.bg }}>
                  <img src={occ.image} alt="" />
                </div>
                <div className="occ-body">
                  <span className="occ-tag">{occ.tag}</span>
                  <h3>{occ.title}</h3>
                  <p>{occ.text}</p>
                  <span className="occ-go">Shop now →</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="story">
          <div className="stay">
            <img src="/images/Produc_banner.webp" alt="Stay weird, stay rare" />
          </div>
          <div className="our">
            <div className="eyebrow">Our Story</div>
            <h2>
              More than
              <br />
              just <span>a store.</span>
            </h2>
            <p>
              My Rare Store brings together unique products, creative finds and everyday curiosities
              for people who love the uncommon.
            </p>
            <a href="#categories" className="btn-primary">
              Learn More
            </a>
          </div>
        </section>

        <section className="testi" aria-labelledby="testi-title">
          <div className="testi-head">
            <div className="eyebrow">Loved by curious minds</div>
            <h2 id="testi-title">
              Stories from our <span>rare</span> collectors
            </h2>
          </div>
          <div className="testi-grid">
            {testimonials.map((item) => (
              <article className="tcard" key={item.name}>
                <span className="qm">“</span>
                <div className="stars">{item.stars}</div>
                <p>{item.quote}</p>
                <div className="who">
                  <div className="avatar">{item.initials}</div>
                  <div>
                    <b>{item.name}</b>
                    <small>{item.city}</small>
                  </div>
                  <span className="tag-bought">{item.bought}</span>
                </div>
              </article>
            ))}
          </div>
          <div className="testi-gifts" aria-hidden="true">
            <img src="/images/download_1.webp" alt="" />
            <img src="/images/download_8.webp" alt="" />
          </div>
          <p className="testi-cta">
            Bought something rare? <a href="#">Share your story</a>
          </p>
        </section>

        <div className="trust">
          {trustItems.map((item) => (
            <div key={item.title}>
              <span>{item.icon}</span>
              <div>
                {item.title}
                <small>{item.sub}</small>
              </div>
            </div>
          ))}
        </div>
      </main>

      <SiteFooter />
      <div className={`toast${toast ? ' show' : ''}`}>{toast}</div>
    </>
  )
}
