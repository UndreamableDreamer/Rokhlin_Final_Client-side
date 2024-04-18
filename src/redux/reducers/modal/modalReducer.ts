import { ModalState } from '../../../types/state-interfaces';
import { ModalAction } from '../../../types/action-interfaces';
import { NULLIFY_MODAL, SET_MODAL_REGISTER, SET_MODAL_STATE } from '../../actionTypes';

export const initialModalState: ModalState = {
  isOpen: false,
  modalType: 'login',
};

export const modalReducer = (
  state: ModalState = initialModalState, 
  action: ModalAction
): ModalState => {
  switch (action.type) {
  case SET_MODAL_STATE:
    return {
      ...state,
      isOpen: action.payload ?? false,
    };
  case SET_MODAL_REGISTER:
    return {
      ...state,
      modalType: 'register',
    };
  case NULLIFY_MODAL: 
    return {
      ...state,
      isOpen: false,
      modalType: 'login',
    };
  default:
    return state;
  }
};

