import { ModalState } from '../../../types/stateInterfaces';
import { ModalAction } from '../../../types/actionInterfaces';
import { MODAL_NULLIFY, MODAL_SET_TYPE, MODAL_SET_STATE } from '../../actionTypes';

export const initialModalState: ModalState = {
  isOpen: false,
  modalType: 'login',
};

export const modalReducer = (
  state: ModalState = initialModalState, 
  action: ModalAction
): ModalState => {
  switch (action.type) {
  case MODAL_SET_STATE:
    return {
      ...state,
      isOpen: action.payload ?? false,
    };
  case MODAL_SET_TYPE:
    return {
      ...state,
      modalType: 'register',
    };
  case MODAL_NULLIFY: 
    return {
      ...state,
      isOpen: false,
      modalType: 'login',
    };
  default:
    return state;
  }
};

