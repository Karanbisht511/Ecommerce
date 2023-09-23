import filtersData from '../../data/filters.json'
import { useState, useContext, useEffect } from 'react'
import ProductContext from '../Context/ProductsContext'

export default function Filters() {

    const [priceFilter, setPriceFilter] = useState({ prcFltrType: null, price: null })
    const { updateFilters } = useContext(ProductContext)

    const saveFilter = () => {
        updateFilters({ priceFilter })
    }

    // useEffect(() => {
    //     updateFilters({ priceFilter })
    // }, [priceFilter])

    return <>
        <div id='filter'>
            <h1>filters</h1>
            <div id='price'>
                {/* <h2>Price</h2> */}
                <label htmlFor="price_handler">Price</label>
                <input onChange={(e) => {
                    const { name, value } = e.target
                    console.log(`${name}:${value}`);
                    setPriceFilter(prev => ({ ...prev, [name]: value }))
                }} type="range" name="price" id="price_handler" min="0" max="90" />

                {<div>type:{priceFilter?.prcFltrType}:{priceFilter?.price} </div>}

                <select name="prcFltrType" id="range_criteria" onChange={(e) => {
                    const { name, value } = e.target
                    console.log(`${name}:${value}`);
                    setPriceFilter(prev => ({ ...prev, [name]: value }))
                }}>
                    <option value="min">Min</option>
                    <option value="max">Max</option>
                </select>

            </div>

            {/* <div>
                <label htmlFor="Rating_handler">Rating</label>
               <div id='start_container'>
           <input type='checkbox' className='stars' />
               </div>
               
                <input type="range" name="rating" id="Rating_handler" />
            </div> */}

            {/* <h1>filters</h1>
            {
                filtersData && filtersData.data['category'].map(function (item, index) {
                    return <div onClick={() => {
                        handleCategoryChange(item)
                    }}
                        key={index}
                        className='filter-item'>
                        <h2>{item}</h2>
                    </div>
                })
            } */}
            <button onClick={saveFilter}>save</button>
        </div>
    </>
}