import { useEffect, useState } from 'react';
import Product from '../Product/Product';
import BookMarks from '../BookMarks/BookMarks';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <h1>products {products.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-12'>
                <div className='col-span-12 md:col-span-8 bg-orange-400'>
                    {
                        products.map(product => <Product key={product.id} product={product}></Product>)
                    }
                </div>
                <div className='col-span-12 md:col-span-4 bg-red-100'>
                    <BookMarks></BookMarks>
                </div>
            </div>
        </div>
    );
};

export default Products;