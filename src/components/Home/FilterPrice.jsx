import React from 'react'

const FilterPrice = ({setInputPrice}) => {

    const handleSubmit = e => {
        e.preventDefault()
        const inputFrom =+e.target.from.value
        const inputTo =+e.target.to.value
        if(inputFrom && inputTo){
            setInputPrice({
                from: inputFrom,
                to:inputTo
            })
        } else if (!inputFrom && inputTo){
            setInputPrice({
                from: 0,
                to: inputTo
            })
        } else if (inputFrom && !inputTo){
            setInputPrice({
                from: inputFrom,
                to: Infinity
            })
        }
        else {
            setInputPrice({
                from: 0,
                to: Infinity
            })
        }
    }

  return (
    <section className='price__section'>
        <h2 className='price__title'>Price</h2>
        <form className='price__form' onSubmit={handleSubmit}>
            <div className='price__from'>
                <label className='price__label' htmlFor='from'>From</label>
                <input className='price__input' type="number" id='from'/>
            </div>
            <div className='price__to'>
                <label className='price__label' htmlFor='to'>To</label>
                <input className='price__input' type="number" id='to'/>
            </div>
            <button className='price__btn'>Apply</button>
        </form>
    </section>
  )
}

export default FilterPrice