import React from 'react'
import Dropdown from './dropdown'

const categories = (props) => {
    const { categories, languages } = props

    return (
        <div className="flex flex-row mx-2">
            <Dropdown items={languages} color='white' heading='Languages'/>
            <div className="flex ml-2 overflow-x-scroll">
                {categories.map(category => {
                    return <div key={category.id} className="inline-block p-2 rounded shadow bg-gray-50 place-self-center">{category.name}</div>
                })}
            </div>
        </div>
    )
}

export default categories
