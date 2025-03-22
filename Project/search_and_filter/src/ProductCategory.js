import React from 'react'

function ProductCategory() {
  const PCategory = [
    "beauty",
    "fragrances",
    "furniture",
    "groceries",
    "home-decoration",
    "kitchen-accessories",
    "laptops",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "mobile-accessories",
    "motorcycle",
    "skin-care",
    "smartphones",
    "sports-accessories",
    "sunglasses",
    "tablets",
    "tops",
    "vehicle",
    "womens-bags",
    "womens-dresses",
    "womens-jewellery",
    "womens-shoes",
    "womens-watches"
  ];
  return (
    <div>
      <ul>
          {ProductCategory.map((cate, index)=>(
            <li key={index}> {cate}</li>
          ))}
        
      </ul>
    </div>
  )
}

export default ProductCategory
