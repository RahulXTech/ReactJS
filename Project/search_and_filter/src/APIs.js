fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(console.log);

fetch('https://dummyjson.com/products/categories')
.then(res => res.json())
.then(console.log);