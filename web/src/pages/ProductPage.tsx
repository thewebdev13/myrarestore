import { useMemo, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import SiteFooter from '../components/SiteFooter'
import SiteHeader from '../components/SiteHeader'
import { useCart } from '../context/CartContext'
import {
  discountPct,
  formatInr,
  getProductBySlug,
  getRelatedProducts,
} from '../data/home'
import '../styles/mockup.css'
import '../styles/product.css'

export default function ProductPage() {
  const { slug = '' } = useParams()
  const product = getProductBySlug(slug)
  const related = useMemo(() => getRelatedProducts(slug), [slug])
  const { addToCart, toast } = useCart()

  const [qty, setQty] = useState(1)
  const [color, setColor] = useState(0)
  const [wishlisted, setWishlisted] = useState(false)
  const [openPanel, setOpenPanel] = useState<'details' | 'shipping'>('details')
  const [liked, setLiked] = useState<Record<string, boolean>>({})

  if (!product) {
    return <Navigate to="/" replace />
  }

  const off = discountPct(product.price, product.mrp)
  const lineTotal = product.price * qty

  return (
    <>
      <SiteHeader />

      <main className="wrap product-page">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/#trending">Shop All</Link>
          <span>/</span>
          <span>{product.name}</span>
        </nav>

        <section className="pdp">
          <div className={`pdp-media ${product.bg}`}>
            <img src={product.image} alt={product.name} />
          </div>

          <div className="pdp-info">
            <div className="pdp-cat">{product.categoryLabel}</div>
            <h1>{product.name}</h1>
            <p className="pdp-desc">{product.description}</p>

            <div className="pdp-price">
              <b>{formatInr(product.price)}</b>
              <s>{formatInr(product.mrp)}</s>
              <em>-{off}%</em>
            </div>

            <div className="pdp-field">
              <span className="pdp-label">Color Inspiration</span>
              <div className="swatches">
                {product.colors.map((swatch, index) => (
                  <button
                    key={swatch.name}
                    type="button"
                    className={`swatch${color === index ? ' on' : ''}`}
                    style={{ background: swatch.hex }}
                    aria-label={swatch.name}
                    title={swatch.name}
                    onClick={() => setColor(index)}
                  />
                ))}
              </div>
            </div>

            <div className="pdp-field">
              <span className="pdp-label">Quantity</span>
              <div className="qty">
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  onClick={() => setQty((value) => Math.max(1, value - 1))}
                >
                  −
                </button>
                <span>{qty}</span>
                <button
                  type="button"
                  aria-label="Increase quantity"
                  onClick={() => setQty((value) => value + 1)}
                >
                  +
                </button>
              </div>
            </div>

            <div className="pdp-actions">
              <button
                type="button"
                className="btn-cart"
                onClick={() => addToCart(product.name, qty)}
              >
                Add to Cart — {formatInr(lineTotal)}
              </button>
              <button
                type="button"
                className={`btn-wish${wishlisted ? ' on' : ''}`}
                onClick={() => setWishlisted((value) => !value)}
              >
                {wishlisted ? '♥ Saved' : '♡ Save to wishlist'}
              </button>
            </div>

            <div className="pdp-accordions">
              <div className={`acc${openPanel === 'details' ? ' open' : ''}`}>
                <button
                  type="button"
                  className="acc-head"
                  onClick={() => setOpenPanel('details')}
                >
                  <span>Details</span>
                  <span>{openPanel === 'details' ? '−' : '+'}</span>
                </button>
                {openPanel === 'details' && (
                  <ul className="acc-body">
                    {product.details.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>

              <div className={`acc${openPanel === 'shipping' ? ' open' : ''}`}>
                <button
                  type="button"
                  className="acc-head"
                  onClick={() => setOpenPanel('shipping')}
                >
                  <span>Shipping & returns</span>
                  <span>{openPanel === 'shipping' ? '−' : '+'}</span>
                </button>
                {openPanel === 'shipping' && (
                  <ul className="acc-body">
                    {product.shipping.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="related">
          <div className="sec-head related-head">
            <h2>You may also like</h2>
          </div>
          <div className="grid">
            {related.map((item) => (
              <ProductCard
                key={item.slug}
                product={item}
                showBadge
                liked={liked[item.name]}
                onToggleLike={(name) =>
                  setLiked((prev) => ({ ...prev, [name]: !prev[name] }))
                }
              />
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
      <div className={`toast${toast ? ' show' : ''}`}>{toast}</div>
    </>
  )
}
