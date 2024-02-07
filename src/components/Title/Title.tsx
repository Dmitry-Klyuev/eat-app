import {FC} from "react";
import {TitleProps} from "./Title.props.ts";
import styles from "./Title.module.scss";

export const Title: FC<TitleProps> = ({children,  ...props}) => {
    return (
        <h1 {...props} className={styles.title}>
            {children}
        </h1>
    );
};
