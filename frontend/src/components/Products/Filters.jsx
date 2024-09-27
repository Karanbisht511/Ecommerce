import { useState, useContext, useEffect } from 'react'
import ProductContext from '../Context/ProductsContext'

export default function Filters() {

    const [priceFilter, setPriceFilter] = useState({ prcFltrType: "min", price: null })
    const [rating, setRating] = useState(null)
    const { updateFilters } = useContext(ProductContext)

    const saveFilter = () => {
        updateFilters({ priceFilter,rating })
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        console.log(`${name}:${value}`);
        setPriceFilter(prev => ({ ...prev, [name]: value }))
    }

    return <>
        <div id='filter'>
            <h1>filters</h1>
            <div id='price'>
                {/* <h2>Price</h2> */}
                <label htmlFor="price_handler">Price</label>
                <input onChange={handleChange} type="range" name="price" id="price_handler" min="0" max="90" />

                {<div>type:{priceFilter?.prcFltrType}:{priceFilter?.price} </div>}

                <select name="prcFltrType" id="range_criteria" onChange={handleChange}>
                    <option value="min">Min</option>
                    <option value="max">Max</option>
                </select>

            </div>

            <div>
                <label htmlFor="Rating_handler">Rating</label>
                <div id='start_container'>
                    <div onClick={(e)=>{
                        console.log(e.view.document);
                    }} >
                        <span className='star' onClick={(e) => {
                            console.log(e);
                            setRating(1)
                        }}>★</span>
                        <span className='star' onClick={(e) => {
                            console.log(e);
                            setRating(2)
                        }}>★</span>
                        <span className='star' onClick={(e) => {
                            console.log(e);
                            setRating(3)
                        }}>★</span>
                        <span className='star' onClick={(e) => {
                            console.log(e);
                            setRating(4)
                        }}>★</span>
                        <span className='star' onClick={(e) => {
                            console.log(e);
                            setRating(5)
                        }}>★</span>
                    </div>
                </div>
            </div>


            <button onClick={saveFilter}>save</button>
        </div>
    </>
}