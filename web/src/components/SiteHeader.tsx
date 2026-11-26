import { Link } from 'react-router-dom'
import { navLinks } from '../data/home'
import { useCart } from '../context/CartContext'

export default function SiteHeader() {
  const { cartCount, showToast } = useCart()

  return (
    <>
      <div className="announce">
        <span>Not your average store</span>
        <span>Curious things live here</span>
      </div>

      <header className="top">
        <div className="wrap top-inner">
          <Link to="/" className="logo" aria-label="My Rare Store home">
            MY
            <br />
            RARE<small>STORE</small>
          </Link>
          <nav className="main">
            {navLinks.map((link) => (
              <Link key={link.label} to={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="search">
            <input type="search" placeholder="Find something rare..." aria-label="Search products" />
            <svg viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="7" />
              <path d="M20 20l-4-4" />
            </svg>
          </div>
          <button
            className="btn-surprise"
            type="button"
            onClick={() => showToast('Surprise! A mystery item is on its way')}
          >
            Surprise Me
          </button>
          <button className="icon-btn" type="button" aria-label="Wishlist">
            ♡
          </button>
          <button className="icon-btn" type="button" aria-label="Cart">
            🛒<span className="badge">{cartCount}</span>
          </button>
        </div>
      </header>
    </>
  )
}
