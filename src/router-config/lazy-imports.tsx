import React, { Suspense, lazy } from 'react'


const LazyImports = (Component: any) =>{
    const ComponentLoadable = lazy(Component)

    return (props: any) =>(
        <Suspense fallback={<div>Loading...</div>}>
            <ComponentLoadable  {...props}/>
        </Suspense>
    )
}

export default LazyImports

//LAZY LOAD MODULES
export const Login = LazyImports(() => import('../pages/Login'/* webpackChunkName: 'Login' */))
export const Register = LazyImports(() => import('../pages/Register'/* webpackChunkName: 'Login' */))
