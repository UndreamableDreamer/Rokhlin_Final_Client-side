import { ModalAction } from '../../types/actionInterfaces';
import { MODAL_NULLIFY, MODAL_SET_TYPE, MODAL_SET_STATE } from '../actionTypes';

export const setModalState = (isOpen: boolean): ModalAction => ({
  type: MODAL_SET_STATE,
  payload: isOpen
});

export const setModalToRegister = (): ModalAction => ({
  type: MODAL_SET_TYPE,
});

export const nullifyModal = (): ModalAction => ({
  type: MODAL_NULLIFY,
});
