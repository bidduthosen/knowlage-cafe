import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    return (
        <div className='bg-white p-4 my-5 rounded-md'>
            <h1 className='font-semibold'>{bookmark.title}</h1>
        </div>
    );
};
Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired,
}

export default Bookmark;