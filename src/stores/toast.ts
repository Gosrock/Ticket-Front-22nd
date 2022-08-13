import { atom } from 'recoil';

export interface Toast {
  content: string;
  isClosing: boolean;
}

export const toastState = atom<Toast>({
  key: 'toastState',
  default: { content: '', isClosing: true },
});
