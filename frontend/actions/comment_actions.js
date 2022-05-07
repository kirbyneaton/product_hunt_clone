import * as CommentApiUtil from '../util/comment_api_util';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export const receiveComment = ( comment, user ) => {
    // debugger
    return ({
    type: RECEIVE_COMMENT,
    comment,
    user
})};

export const receiveComments = (comments) => ({
    type: RECEIVE_COMMENTS,
    comments
})

export const removeComment = (commentId, productId) => ({
    type: REMOVE_COMMENT,
    commentId,
    productId
});

/////

export const createComment = (comment, productId) => (dispatch) => {
    // debugger
    return (
    CommentApiUtil.createComment(comment, productId)
        .then((comment, user) => (dispatch(receiveComment(comment, user))))
    )
}

export const deleteComment = (commentId, productId) => (dispatch) => (
    CommentApiUtil.deleteComment(commentId, productId)
        .then(comment => (dispatch(removeComment(commentId,productId))))
)

export const fetchProductComments = (productId) => (dispatch) => (
    CommentApiUtil.fetchProductComments(productId)
        .then(comments => {
            
            (dispatch(receiveComments(comments)))
        })
)