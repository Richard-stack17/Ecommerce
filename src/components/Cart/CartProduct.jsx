import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { getUserCart } from '../../store/slices/cart.slice'
import getConfig from '../../utils/getConfig'
import './styles/cartProduct.css'
const CartProduct = ({product}) => {
  const dispatch = useDispatch()
  const handleDelete = () => {
    URL = `https://e-commerce-api.academlo.tech/api/v1/cart/${product.id}`
    axios.delete(URL,getConfig())
      .then(res => {
        console.log(res.data)
        dispatch(getUserCart()) //para renderizar la vista
      })
      .catch(err => console.log(err))
  }
  return (
    <article className='card-product'> 
        <header className='card-product__header'>
            <h4>{product.brand}</h4>
            <h3>{product.title}</h3>
        </header>
        <button className='card-product__btn' onClick={handleDelete}>
            <i className="fa-regular fa-trash-can"></i>
        </button>
        <div className='card-product__quantity'>{product.productsInCart.quantity}</div>
        <div className='card-product__unitPrice'>
            <p className='card-product__unitPrice-title'>Unit Price: </p>
            <span className='card-product__unitPrice-number'>{product.price}</span>
        </div>
    </article>
  )
}

export default CartProduct