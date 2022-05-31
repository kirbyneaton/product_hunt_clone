export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

import { removeErrors } from "./comment_actions";

export const openModal = (modal) => ({
    type: OPEN_MODAL,
    modal
});

export const onlyCloseModal = () => ({
    type: CLOSE_MODAL
});

///

//closeModal really means closeModalAndClearErrors
export const closeModal = () => (dispatch) => {dispatch(removeErrors());
(dispatch(onlyCloseModal()))
};