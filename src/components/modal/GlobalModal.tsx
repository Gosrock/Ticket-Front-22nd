import { useQueryClient } from 'react-query';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { modalState } from '../../stores/modal';
import Account from './Account';
import CheckBeforeSend from './CheckBeforeSend';
import Developers from './Developers';
import Location from './Location';
import Notice from './Notice';

export const MODAL_TYPES = {
  Notice: 'Notice',
  CheckBeforeSend: 'CheckBeforeSend',
  Location: 'Location',
  Developers: 'Developers',
  Account: 'Account',
} as const;

const ModalComponents: any = {
  [MODAL_TYPES.Notice]: Notice,
  [MODAL_TYPES.CheckBeforeSend]: CheckBeforeSend,
  [MODAL_TYPES.Location]: Location,
  [MODAL_TYPES.Developers]: Developers,
  [MODAL_TYPES.Account]: Account,
};

const GlobalModal = () => {
  const [modal, setModal] = useRecoilState(modalState);
  const { modalType, modalProps } = modal || {};
  const renderComponent = () => {
    if (!modalType) {
      return null;
    }
    const ModalComponent = ModalComponents[modalType];

    return (
      <Modal>
        <Overlay onClick={() => setModal(null)} />
        <Container>
          <ModalComponent {...modalProps} />
        </Container>
      </Modal>
    );
  };
  return <>{renderComponent()}</>;
};

export default GlobalModal;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  /* -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px); */
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  z-index: 10;
  width: 100%;
  max-width: 400px;
  margin: 36px;
  height: 360px;
  background-color: ${({ theme }) => theme.palette.mono.font_main};
  border-radius: 8px;

  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.25);
`;
