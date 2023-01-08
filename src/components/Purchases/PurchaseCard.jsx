import React from 'react'

const PurchaseCard = ({purchase}) => {
  
    const datePurchase = new Date(purchase.createdAt)
    return (
    <article className='purchase-card'>
        <h3 className='purchase-card__date'>{datePurchase.toLocaleDateString()}</h3>
         <section className='purchase-card__container'>
            <ul className='purchase-card__ul'>
                {
                    purchase.cart.products.map( prod => (
                        <li className='purchase-card__li' key={prod.id}>
                            <h4 className='purchase-card__title'>{prod.title}</h4>
                            <span className='purchase-card__span quantity'><b>Quantity:</b> {prod.productsInCart.quantity}</span>
                            <span className='purchase-card__span price'>{prod.price}</span>
                        </li>
                    ))
                }
            </ul>
         </section>
    </article>
  )
}

export default PurchaseCard