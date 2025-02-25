import { useEffect, useState } from 'react';
import Product from '../Product/Product';
import BookMarks from '../BookMarks/BookMarks';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [bookmarks, setBookMarks] = useState([]);
    const [reating, setReating] = useState(0);

    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);


    const handleBookMarks = (product) => {
        const newBooks = [...bookmarks, product];
        setBookMarks(newBooks);
    };

    const handleReating = ( time) => {
        const newTime = reating + time;
        setReating(newTime);
    };
    const  handleRemoveBookMarks = (id) =>{
        const bookMarktPer = bookmarks.filter(pd => pd.id !== id);
        setBookMarks(bookMarktPer)
        
    }
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-12 gap-8'>
                <div className='col-span-12 md:col-span-8'>
                    {
                        products.map((product, idx) => <Product
                            key={idx}
                            product={product}
                            handleBookMarks={handleBookMarks}
                            handleReating={handleReating}
                            handleRemoveBookMarks={handleRemoveBookMarks}
                        ></Product>)
                    }
                </div>
                <div className='col-span-12 md:col-span-4'>
                    <BookMarks bookmarks={bookmarks} reating={reating}></BookMarks>
                </div>
            </div>
        </div>
    );
};

export default Products;