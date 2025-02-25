import Bookmark from "../Bookmark/Bookmark";
import PropTypes from 'prop-types';

const BookMarks = ({ bookmarks }) => {

    return (
        <div className="mt-5">
            <div className=" text-center bg-gray-100 rounded-lg p-5">
                <h4 className="font-semibold text-xl text-blue-600 ">Spent time on read : 177 min</h4>
            </div>
            <div className=" bg-gray-100 rounded-lg p-5 my-6">
                <div>
                    <h3 className="font-semibold text-xl">Bookmarked Blogs : {bookmarks.length}</h3>
                </div>
                {
                    bookmarks?.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};
BookMarks.propTypes = {
    bookmarks: PropTypes.object.isRequired,
}

export default BookMarks;