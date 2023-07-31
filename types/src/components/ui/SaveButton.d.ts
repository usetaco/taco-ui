import { FC } from 'react';
interface SaveButtonProps {
    text: string;
    onClick: () => any;
    disabled?: boolean;
    loading?: boolean;
}
declare const SaveButton: FC<SaveButtonProps>;
export default SaveButton;
