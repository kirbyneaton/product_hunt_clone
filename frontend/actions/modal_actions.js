export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

import { removeErrors } from "./comment_actions";

export const openModal = (modal) => ({
    type: OPEN_MODAL,
    modal
});

export const hideModal = () => ({
    type: CLOSE_MODAL
});

///

export const closeModal = () => (dispatch) => {dispatch(removeErrors());
(dispatch(hideModal()))
};