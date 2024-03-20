import { FC, ReactNode} from 'react';
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../store/store.ts";

interface RequireAuth {
    children: ReactNode
}
export const RequireAuthL: FC<RequireAuth> = ({children}) => {
    const jwt = useSelector<RootState, string | null>(state=> state.user.token)

    if (!jwt){
       return <Navigate to={'/auth/login'} replace/>
    }
    return children
};