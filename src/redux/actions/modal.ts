import { ModalAction } from '../../types/action-interfaces';
import { NULLIFY_MODAL, SET_MODAL_REGISTER, SET_MODAL_STATE } from '../actionTypes';

export const setModalState = (isOpen: boolean): ModalAction => ({
  type: SET_MODAL_STATE,
  payload: isOpen
});

export const setModalToRegister = (): ModalAction => ({
  type: SET_MODAL_REGISTER,
});

export const nullifyModal = (): ModalAction => ({
  type: NULLIFY_MODAL,
});
