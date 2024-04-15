import { ModalActionInterface, ModalStateInterface } from '../../../types/types';
import { SET_MODAL_OPEN, SET_SHOW_ADDITIONAL_FIELD } from '../../actionTypes';

export const initialModalState: ModalStateInterface = {
  isOpen: false,
  isShowEmailField: false,
};

export const modalReducer = (
  state: ModalStateInterface = initialModalState, 
  action: ModalActionInterface
): ModalStateInterface => {
  switch (action.type) {
  case SET_MODAL_OPEN:
    return {
      ...state,
      isOpen: !state.isOpen,
    };
  case SET_SHOW_ADDITIONAL_FIELD:
    return {
      ...state,
      isShowEmailField: !state.isShowEmailField
    };
  default:
    return initialModalState;
  }
};

