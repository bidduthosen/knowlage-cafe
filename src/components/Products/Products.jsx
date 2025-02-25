import { useEffect, useState } from 'react';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div>
            <h1>products {products.length}</h1>
        </div>
    );
};

export default Products;