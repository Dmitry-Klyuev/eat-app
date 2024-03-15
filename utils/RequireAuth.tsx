import { FC, ReactNode} from 'react';
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";

interface RequireAuth {
    children: ReactNode
}
export const RequireAuthL: FC<RequireAuth> = ({children}) => {

    const jwt = localStorage.getItem('token')
    if (!jwt){
       return <Navigate to={'/auth/login'} replace/>
    }
    return children
};