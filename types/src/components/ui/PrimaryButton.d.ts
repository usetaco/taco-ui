import * as React from 'react';
import PropTypes from 'prop-types';
declare const PrimaryButton: {
    ({ color, type, text, fullWidth, onClick, disabled, loading, ...rest }: any): React.JSX.Element;
    propTypes: {
        color: PropTypes.Requireable<string>;
        type: PropTypes.Requireable<string | undefined>;
        text: PropTypes.Requireable<string>;
        fullWidth: PropTypes.Requireable<boolean>;
        onClick: () => PropTypes.Requireable<(...args: any[]) => any>;
        disabled: PropTypes.Requireable<boolean>;
        loading: PropTypes.Requireable<boolean>;
        rest: PropTypes.Requireable<any>;
    };
};
declare const PrimaryButton: React.FC<PropTypes.InferProps<typeof PrimaryButton.propTypes>>;
export default PrimaryButton;
