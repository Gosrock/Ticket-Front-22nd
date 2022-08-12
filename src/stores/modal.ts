import { atom } from 'recoil';
import { MODAL_TYPES } from '../components/modal/GlobalModal';

export type TNoticeModal = {
  modalType: typeof MODAL_TYPES.Notice;
  modalProps: any;
};

export type TCheckBeforeSendModal = {
  modalType: typeof MODAL_TYPES.CheckBeforeSend;
  modalProps: any;
};

export type TLocationModal = {
  modalType: typeof MODAL_TYPES.Location;
  modalProps: any;
};

export type TDevelopersModal = {
  modalType: typeof MODAL_TYPES.Developers;
  modalProps: any;
};

export type ModalType =
  | TNoticeModal
  | TCheckBeforeSendModal
  | TLocationModal
  | TDevelopersModal;
export const modalState = atom<ModalType | null>({
  key: 'modalState',
  default: null,
});
