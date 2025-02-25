import PropTypes from 'prop-types';

const Product = ({product}) => {
    console.log(typeof product)
    return (
        <div>
            <h1>product</h1>
        </div>
    );
};
Product.propTypes ={
    product: PropTypes.object.isRequired,
}

export default Product;