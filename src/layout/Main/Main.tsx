import {LeftPanel} from "../LeftPanel/LeftPanel.tsx";
import {RightPanel} from "../RightPanel/RightPanel.tsx";
import {FC} from "react";
import styles from "./Main.module.scss";

export const Main: FC = () => {
    return (
        <div className={styles.wrapper}>
            <LeftPanel/>
            <RightPanel/>
        </div>
    );
};
