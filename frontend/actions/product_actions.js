import * as ProductApiUtil from '../util/product_api_util';

export const RECEIVE_ALL_PRODUCTS = 'RECEIVE_ALL_PRODUCTS';
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';


export const receiveAllProducts = (products) => ({
    type: RECEIVE_ALL_PRODUCTS,
    products
});

export const receiveProduct = (product) => ({
    type: RECEIVE_PRODUCT,
    product,
    // comments,
    // users
});

export const removeProduct = (productId) => ({
    type: REMOVE_PRODUCT,
    productId
});

export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

/////

export const fetchProducts = () => (dispatch) => (
    ProductApiUtil.fetchProducts()
        .then(products => {
            
            (dispatch(receiveAllProducts(products)))
        })
)

export const fetchProduct = (productId) => (dispatch) => (
    ProductApiUtil.fetchProduct(productId)
        .then(product => (dispatch(receiveProduct(product))))
)

export const createProduct = (product) => (dispatch) => (
    ProductApiUtil.createProduct(product)
        .then(product => (dispatch(receiveProduct(product))), error => (dispatch(receiveErrors(error.responseJSON))))
)

export const updateProduct = (product) => (dispatch) => (
    ProductApiUtil.updateProduct(product)
        .then(product => (dispatch(receiveProduct(product))))
        // , error => (dispatch(receiveErrors(error.responseJSON))))
)

export const deleteProduct = (productId) => (dispatch) => (
    ProductApiUtil.deleteProduct(productId)
        .then(product => (dispatch(removeProduct(productId))))
)


