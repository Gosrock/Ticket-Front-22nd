import { useRecoilState } from 'recoil';
import { toastState } from '../stores/toast';

export function useToast() {
  const [toasts, setToasts] = useRecoilState(toastState);

  const removeToast = (content: string) =>
    setToasts({ content: content, isClosing: true });

  const fireToast = (content: string) => {
    setToasts({ content: content, isClosing: false });
    setTimeout(() => removeToast(content), 1500);
  };

  return { toasts, fireToast };
}
