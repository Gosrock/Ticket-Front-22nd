import { useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { modalState, ModalType } from '../stores/modal';

const useModal = () => {
  const [modal, setModal] = useRecoilState(modalState);

  const openModal = ({ modalType, modalProps }: ModalType) => {
    setModal({ modalType, modalProps });
  };

  const closeModal = () => {
    setModal(null);
  };

  return { openModal, closeModal };
};

export default useModal;
