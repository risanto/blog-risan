import React from 'react'

const categories = (props) => {
    const { categories } = props

    return (
        <div className="flex ml-2 overflow-x-auto">
            {categories.map(category => {
                return <div key={category.id} className="inline-block p-2 rounded shadow bg-gray-50 place-self-center">{category.name}</div>
            })}
        </div>
    )
}

export default categories
