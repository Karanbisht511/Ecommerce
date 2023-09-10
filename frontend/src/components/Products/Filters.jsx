import filtersData from '../../data/filters.json'
import { useState, useContext } from 'react'
import CategoryContext from '../Context/CategoryContext'

export default function Filters() {

    const {updateCategory} = useContext(CategoryContext)

    const handleCategoryChange = (category) => {
        // console.log(category);
        updateCategory(category)
    }

    return <>
        <div id='filter'>
            <h1>filters</h1>
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
            }
        </div>
    </>
}