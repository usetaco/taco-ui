import * as React from 'react';
import { FC } from 'react';
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import SecondaryButton from './SecondaryButton';
import SaveButton from './SaveButton';

interface TacoModalProps {
  title: string;
  body: React.ReactNode;
  cancelText: string;
  confirmText: string;
  onConfirm: () => {};
  isOpen: boolean;
  onClose: any;
}

const TacoModal: FC<TacoModalProps> = ({
  title,
  body,
  cancelText,
  confirmText,
  onConfirm,
  isOpen,
  onClose,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{body}</ModalBody>
        <ModalFooter justifyContent="space-between">
          <SecondaryButton text={cancelText} onClick={onClose} />
          <SaveButton text={confirmText} onClick={onConfirm} />
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default TacoModal;
