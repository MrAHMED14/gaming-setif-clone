'use client'
import { useSelector } from "react-redux"

const CartLen = () => {
  const cartItem = useSelector(state => state.cart.products)
  return (
    <p className="text-base">({cartItem?.length})</p>
  )
}

export default CartLen