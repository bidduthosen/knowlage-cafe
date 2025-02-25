import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";

const Product = ({ product, handleBookMarks, handleReating }) => {
    const { cover, author, title, author_img, posted_date, reading_time, hashtags } = product;
    return (
        <div className=' mb-16 border-b-2 border-gray-400 py-5'>
            <img className='w-full rounded-lg' src={cover} alt="" />
            <div className='space-y-6'>
                <div className='flex justify-between items-center'>
                    <div className='flex py-5 space-x-4'>
                        <img className='w-10' src={author_img} alt="" />
                        <div>
                            <h5 className='font-bold text-xl'>{author}</h5>
                            <h5 className='text-base text-gray-400'>{posted_date}</h5>
                        </div>

                    </div>
                    <div className='flex justify-center items-center gap-2'>
                        <h5 className='text-base text-gray-400'>{reading_time} Min read</h5>
                        <button onClick={() => handleBookMarks(product)} className='hover:text-red-500' >
                            < CiBookmark />
                        </button>

                    </div>
                </div>
                <h4 className='font-semibold text-2xl'>{title}</h4>
                <p>
                    {
                        hashtags.map((teg, idx) => <span className='p-2 text-base text-gray-400' key={idx}>#{teg}</span>)
                    }
                </p>
                <h3 onClick={() => handleReating(reading_time)} className='underline text-blue-800 font-semibold text-lg cursor-pointer'>Mark as read</h3>
            </div>
        </div>
    );
};
Product.propTypes = {
    product: PropTypes.object.isRequired,
    handleBookMarks: PropTypes.func.isRequired,
    handleReating: PropTypes.func.isRequired,
}

export default Product;