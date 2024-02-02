import {FC} from "react";
import {InputProps} from "./Input.props.ts";
import cn from "classnames";
import styles from './Input.module.scss';

export const Input: FC<InputProps> = ({className, ...props}) => {
    return (
        <input {...props} className={cn(styles.input, className)} />

    );
};