import React from 'react';
import {ButtonProps} from './Button.props.ts';
import cn from 'classnames';
import styles from './Button.module.scss';

export const Button: React.FC<ButtonProps> = ({ size='small', children, className, ...props}) => {
    return (
        <button {...props} className={cn(styles.button, className, styles[size])}>
            {children}
        </button>
    );
};