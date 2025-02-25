import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";
import { AiFillDelete } from "react-icons/ai";


const Product = ({ product, handleBookMarks, handleReating, handleRemoveBookMarks }) => {
    const { cover, author, title, author_img, posted_date, reading_time, hashtags, id } = product;
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
                    <div className='flex justify-center items-center gap-5'>
                        <h5 className='text-base text-gray-400'>{reading_time} Min read</h5>
                        <button onClick={() => handleBookMarks(product)} className='hover:text-red-500 border-2 border-green-300 p-2 rounded-full hover:bg-green-200 hover:border-green-500' >
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
                <div className='flex items-center gap-6'>
                    <h3 onClick={() => handleReating(reading_time)} className='underline text-blue-800 font-semibold text-lg cursor-pointer'>Mark as read</h3>
                    <button onClick={() => handleRemoveBookMarks(id)} className='border-2 border-red-300 p-2 rounded-full hover:bg-red-200 hover:border-red-500'><AiFillDelete /></button>
                </div>
            </div>
        </div>
    );
};
Product.propTypes = {
    product: PropTypes.object.isRequired,
    handleBookMarks: PropTypes.func.isRequired,
    handleReating: PropTypes.func.isRequired,
    handleRemoveBookMarks: PropTypes.func.isRequired,
}

export default Product;