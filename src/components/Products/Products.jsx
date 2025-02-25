import { useEffect, useState } from 'react';
import Product from '../Product/Product';
import BookMarks from '../BookMarks/BookMarks';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [bookmarks, setBookMarks] = useState([]);

    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);


    const handleBookMarks = (product)=>{
        const newBooks = [...bookmarks, product];
        setBookMarks(newBooks)
    }
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-12 gap-8'>
                <div className='col-span-12 md:col-span-8'>
                    {
                        products.map(product => <Product key={product.id} product={product} handleBookMarks={handleBookMarks}></Product>)
                    }
                </div>
                <div className='col-span-12 md:col-span-4'>
                    <BookMarks bookmarks={bookmarks}></BookMarks>
                </div>
            </div>
        </div>
    );
};

export default Products;