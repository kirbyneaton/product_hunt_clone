export const createComment = (comment, productId) => {
    // debugger
return(
    $.ajax({
        method: 'POST',
        url: `/api/products/${productId}/comments`,
        data: { comment }
    })
);
}

export const fetchProductComments = productId => (
    $.ajax({
        method: 'GET',
        url: `/api/products/${productId}/comments`,
    })
);

export const deleteComment = (commentId, productId) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/products/${productId}/comments/${commentId}`
    })
);