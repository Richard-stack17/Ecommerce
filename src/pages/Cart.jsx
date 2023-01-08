import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartProduct from '../components/Cart/CartProduct'
import { getUserCart } from '../store/slices/cart.slice'
import getConfig from '../utils/getConfig'

const Cart = () => {
  const dispatch= useDispatch()
  const cartProducts = useSelector(state => state.cart)

  useEffect(() => {
    dispatch(getUserCart())
  },[])
  const handleCheckout = () => {
    const URL = 'https://e-commerce-api.academlo.tech/api/v1/purchases'
    const data = {
        street:"Green St. 1456",
        colony: "Southwest",
        zipCode: 12345,
        city:'USA',
        references:"Some references"
    }
    axios.post(URL, data, getConfig())
        .then(res => {
            console.log(res.data)
            dispatch(getUserCart())
        })
        .catch(err => console.log(err))
  }
  return (
    <section className='cart'>
      <h2 className='cart__title'>Cart</h2>
      <div className='cart__products'>
        {
          cartProducts?.map(product => (
            <CartProduct
              key={product.id}
              product={product}
            />
          ))
        }
      </div>
      <footer className='cart__footer'>
        <span className='cart__total'>Total: </span>
        <p className='cart__pay'>
            {
                cartProducts?
                    cartProducts.reduce((acc,cv) => {
                        return cv.price*cv.productsInCart.quantity + acc
                    },0)
                :
                        0
            }   
                     
        </p>
        <button className='cart__btn' onClick={handleCheckout}>Checkout</button>
      </footer>
    </section>
  )
}

export default Cart
