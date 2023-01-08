import axios from 'axios'
import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getConfig from '../../utils/getConfig'
import { getUserCart } from '../../store/slices/cart.slice'

const ProductDescription = ({product}) => {
    const [counter, setCounter] = useState(1)
    const cart = useSelector(state => state.cart)
    const handleMinus = () => {
        if(counter-1>0){
            setCounter(counter-1)
        }
        
    }
    const handlePlus = () => {
        setCounter(counter+1)
    }
    
    const dispatch = useDispatch()
    const handleCart = () => {
        const URL = 'https://e-commerce-api.academlo.tech/api/v1/cart'
        const data = {
            id: product.id,
            quantity: counter
        }
        axios.post(URL, data, getConfig())
            .then(res => {
                console.log(res.data)
                dispatch(getUserCart())
            })
            .catch(err => {
                if(err.response.status === 400){
                    const URLPatch = 'https://e-commerce-api.academlo.tech/api/v1/cart'
                    const prevQuantity = cart.filter(e => e.id===product.id)[0].productsInCart.quantity
                    const data = {
                        id: product.id,
                        newQuantity: prevQuantity + counter
                    }
                    axios.patch(URLPatch,data,getConfig())
                        .then(res => {
                            console.log(res.data)
                            dispatch(getUserCart()) //para que se actualice mi infromaicón en el estado global
                        })
                        .catch(err => console.log(err))
                }
            })
    }
  return (
    <article className='product-desc'>
        <h2 className='product-desc__title'>{product?.title}</h2>
        <p>{product?.description}</p>
        <section className='product-desc__price'>
            <span className='product-desc__span'>Price</span>
            <h3 className='product-desc__h3'>{product?.price}</h3>
        </section>
        <section className='product-desc__quantity'>
            <h3 className='product-desc__h3'>Quantity</h3>
            <div className='product-desc__def'>
                <div onClick={handleMinus}>-</div>
                <div>{counter}</div>
                <div onClick={handlePlus}>+</div>
            </div>
        </section>
        <button className='product-desc__btn' onClick={handleCart}>Add to Cart <i className="fa-solid fa-cart-shopping"></i></button>
    </article>
  )
}

export default ProductDescription