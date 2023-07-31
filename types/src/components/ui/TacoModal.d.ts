import * as React from 'react';
import { FC } from 'react';
interface TacoModalProps {
    title: string;
    body: React.ReactNode;
    cancelText: string;
    confirmText: string;
    onConfirm: () => {};
    isOpen: boolean;
    onClose: any;
}
declare const TacoModal: FC<TacoModalProps>;
export default TacoModal;
