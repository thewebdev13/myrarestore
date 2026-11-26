import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'

type CartContextValue = {
  cartCount: number
  toast: string | null
  showToast: (message: string) => void
  addToCart: (name: string, qty?: number) => void
}

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartCount, setCartCount] = useState(0)
  const [toast, setToast] = useState<string | null>(null)

  const value = useMemo<CartContextValue>(() => {
    function showToast(message: string) {
      setToast(message)
      window.setTimeout(() => setToast(null), 2200)
    }

    function addToCart(name: string, qty = 1) {
      setCartCount((count) => count + qty)
      showToast(qty > 1 ? `Added ${qty} × ${name}` : `Added to cart: ${name}`)
    }

    return { cartCount, toast, showToast, addToCart }
  }, [cartCount, toast])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
