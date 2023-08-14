import React from 'react'

const Categories = ({ categories, filterItems }) => {
  const mapedCategories = categories.map((category) => {
    return (
      <button 
        key={category} 
        className='btn'
        onClick={() => filterItems(category)}
      >
        {category}
      </button>
    )
  });

  return (
    <div className='btn-container'>
      {mapedCategories}
    </div>
  )
}

export default Categories
