import { atom } from 'recoil';
import { CheckBeforeSendProps } from '../components/modal/CheckBeforeSend';
import { ModalTypes } from '../components/modal/GlobalModal';
import { NoticeProps } from '../components/modal/Notice';

export type TNoticeModal = {
  modalType: typeof ModalTypes.Notice;
  modalProps: any;
};

export type TCheckBeforeSendModal = {
  modalType: typeof ModalTypes.CheckBeforeSend;
  modalProps: any;
};

export type TLocationModal = {
  modalType: typeof ModalTypes.Location;
  modalProps: any;
};

export type TDevelopersModal = {
  modalType: typeof ModalTypes.Developers;
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
