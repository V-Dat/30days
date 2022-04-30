import React from 'react'
function CategorySelector({categories}) {

    const unique = [...new Set(categories.map(it => it.category))];

    return (
        <div className='category-selector col-sm-8 col-12'>
            <p className='display-6'>Categories</p>
            <select className='display-6 w-100'>
                {categories.map(category =>
                    <option key={category.id} value={category.id}>{category.id}</option>
                )}
            </select>
        </div>
    )
}

export default CategorySelector