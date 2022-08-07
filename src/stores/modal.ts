import { atom } from 'recoil';
import { CheckBeforeSendProps } from '../components/modal/CheckBeforeSend';
import { ModalTypes } from '../components/modal/GlobalModal';
import { NoticeProps } from '../components/modal/Notice';

export type TNoticeModal = {
  modalType: typeof ModalTypes.Notice;
  modalProps: NoticeProps | any;
};

export type TCheckBeforeSendModal = {
  modalType: typeof ModalTypes.CheckBeforeSend;
  modalProps: CheckBeforeSendProps | any;
};

export type ModalType = TNoticeModal | TCheckBeforeSendModal;
export const modalState = atom<ModalType | null>({
  key: 'modalState',
  default: null,
});
