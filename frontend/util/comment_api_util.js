export const createComment = comment => (
    $.ajax({
        method: 'POST',
        url: `/api/products/${productId}/comments`,
        data: { comment }
    })
);

export const fetchProductComments = productId => (
    $.ajax({
        method: 'GET',
        url: `/api/products/${productId}/comments`,
    })
);

