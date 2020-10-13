import React from 'react';
import { FiX } from 'react-icons/fi';

import {
  ModalContainer,
  ModalContent,
  ModalContentHeader,
  ModalContentBody,
  ModalContentFooter,
} from './styles';

interface IModalProps {
  message: string;
  action: () => Promise<void>;
  handleClickVerifyModal: () => void;
}

export const Modal: React.FC<IModalProps> = ({
  message,
  action,
  handleClickVerifyModal,
}) => {
  return (
    <ModalContainer>
      <ModalContent>
        <ModalContentHeader>
          <button type="button" onClick={handleClickVerifyModal}>
            <FiX size={20} />
          </button>
        </ModalContentHeader>

        <ModalContentBody>{message}</ModalContentBody>

        <ModalContentFooter>
          <button type="submit" onClick={action}>
            Sim
          </button>
          <button type="button" onClick={handleClickVerifyModal}>
            Não
          </button>
        </ModalContentFooter>
      </ModalContent>
    </ModalContainer>
  );
};
