import { Link } from 'react-router-dom'
import { footerLinks } from '../data/home'

export default function SiteFooter() {
  return (
    <footer id="footer">
      <div className="wrap">
        <div className="foot">
          <div>
            <Link to="/" className="logo">
              MY
              <br />
              RARE<small>STORE</small>
            </Link>
            <p className="tag-line">
              Ordinary Ends Here. A little weird, a lot wonderful. Discover the unexpected.
            </p>
          </div>
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h5>{col.title}</h5>
              <ul>
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="legal">
          <span>© 2026 My Rare Store. Made for curious minds.</span>
          <span>
            <b>●</b> Concept storefront · Demo products only
          </span>
        </div>
      </div>
    </footer>
  )
}
