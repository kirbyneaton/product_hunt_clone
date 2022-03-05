import * as ProductApiUtil from '../util/product_api_util';

export const RECEIVE_ALL_PRODUCTS = 'RECEIVE_ALL_PRODUCTS';
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

export const receiveAllProducts = (products) => ({
    type: RECEIVE_ALL_PRODUCTS,
    products
});

export const receiveProduct = (product) => ({
    type: RECEIVE_PRODUCT,
    product
});

export const removeProduct = (productId) => ({
    type: REMOVE_PRODUCT,
    productId
});

/////

export const fetchProducts = () => (dispatch) => (
    ProductApiUtil.fetchProducts()
        .then(products => (dispatch(receiveAllProducts(products))))
)

export const fetchProduct = (productId) => (dispatch) => (
    ProductApiUtil.fetchProduct(productId)
        .then(product => (dispatch(receiveProduct(product))))
)

export const createProduct = (product) => (dispatch) => (
    ProductApiUtil.createProduct(product)
        .then(product => (dispatch(receiveProduct(product))))
)

export const updateProduct = (product) => (dispatch) => (
    ProductApiUtil.updateProduct(product)
        .then(product => (dispatch(receiveProduct(product))))
)

export const deleteProduct = (productId) => (dispatch) => (
    ProductApiUtil.deleteProduct(productId)
        .then(product => (dispatch(removeProduct(productId))))
)
