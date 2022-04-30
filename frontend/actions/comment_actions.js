import * as CommentApiUtil from '../util/comment_api_util';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';

export const receiveComment = ({ comment, user }) => ({
    type: RECEIVE_COMMENT,
    comment,
    user
});

export const receiveComments = (comments) => ({
    type: RECEIVE_COMMENTS,
    comments
})

/////

export const createComment = (comment, productId) => (dispatch) => (
    CommentApiUtil.createComment(comment, productId)
        .then(comment => (dispatch(receiveComment(comment))))
)


export const fetchProductComments = (productId) => (dispatch) => (
    CommentApiUtil.fetchProductComments(productId)
        .then(comments => {
            
            (dispatch(receiveComments(comments)))
        })
)