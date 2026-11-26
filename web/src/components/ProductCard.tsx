import { Link } from 'react-router-dom'
import { discountPct, formatInr, type Product } from '../data/home'
import { useCart } from '../context/CartContext'

type Props = {
  product: Product
  liked?: boolean
  onToggleLike?: (name: string) => void
  showBadge?: boolean
}

export default function ProductCard({ product, liked, onToggleLike, showBadge }: Props) {
  const { addToCart } = useCart()
  const off = discountPct(product.price, product.mrp)

  return (
    <article className="card">
      <div className={`thumb ${product.bg}`}>
        {showBadge && <span className="disc-badge">-{off}%</span>}
        <Link to={`/product/${product.slug}`}>
          <img src={product.image} alt={product.name} />
        </Link>
        <button
          className={`heart${liked ? ' on' : ''}`}
          type="button"
          aria-label={`Save ${product.name}`}
          onClick={() => onToggleLike?.(product.name)}
        >
          {liked ? '♥' : '♡'}
        </button>
      </div>
      <h4>
        <Link to={`/product/${product.slug}`}>{product.name}</Link>
      </h4>
      <div className="price">
        <b>{formatInr(product.price)}</b>
        <s>{formatInr(product.mrp)}</s>
        {!showBadge && <em>-{off}%</em>}
      </div>
      <button className="add" type="button" onClick={() => addToCart(product.name)}>
        🛒 Add to Cart
      </button>
    </article>
  )
}
