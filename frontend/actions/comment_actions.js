import * as CommentApiUtil from '../util/comment_api_util';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';

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

/////

export const createComment = (comment, productId) => (dispatch) => {
    // debugger
    return (
    CommentApiUtil.createComment(comment, productId)
        .then((comment, user) => (dispatch(receiveComment(comment, user))))
    )
}

// export const deleteComment = (comment, productId) => (dispatch) => (
//     CommentApiUtil.deleteComment(comment, productId)
//         .then(comment => (dispatch(receiveComment(comment))))
// )

export const fetchProductComments = (productId) => (dispatch) => (
    CommentApiUtil.fetchProductComments(productId)
        .then(comments => {
            
            (dispatch(receiveComments(comments)))
        })
)