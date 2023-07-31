import { FC } from 'react';
interface StepProgressProps {
    title: string;
    currentStep: number;
    stepLabels: string[];
}
declare const StepProgress: FC<StepProgressProps>;
export default StepProgress;
