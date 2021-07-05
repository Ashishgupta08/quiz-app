import React, {  ReactElement } from 'react'
import { Route, Navigate } from 'react-router-dom'
import { useAuth } from '../Contexts'

type PathType = {path: string, element: ReactElement}

export default function PrivateRoute({path, element, ...props}:PathType) {

    const { authState } = useAuth();

    return authState.isUserLoggedIn 
        ? <Route path={path} element={element} {...props} /> 
        : <Navigate state={{from: path}} replace to='/login' />
}
