import React from 'react';
import {ButtonProps} from './Button.props.ts';
import cn from 'classnames';

export const Button: React.FC<ButtonProps> = ({children, className, ...props}) => {
    return (
        <button {...props} className={cn('button', className)}>
            {children}
        </button>
    );
};