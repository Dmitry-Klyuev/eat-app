import styles from "./RightPanel.module.scss";
import {FC} from "react";
import {Outlet} from "react-router-dom";

export const RightPanel: FC = () => {
    return (
        <div className={styles.wrapper}>
            <Outlet/>
        </div>
    );
};