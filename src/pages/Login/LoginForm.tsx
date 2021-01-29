import React from 'react'
import { TextField  } from '@material-ui/core'
import { Link } from "react-router-dom"
import  google from './../../assets/images/Google__G__Logo.svg'
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as validation from './validations'
import * as actions from './login.action'
import { LoginInterface } from '../../interfaces/login'

const LoginForm = ({isLogin}: any) =>{

    const {register, handleSubmit, errors } = useForm<LoginInterface>({
        resolver: yupResolver(validation.loginSchema)
    });

    return(
        <>
            <h1 className="form-wrapper__form-title">Invision</h1>
            <p className="form-wrapper__form-subtitle">Welcome to Invision</p>

            <form>
                <div className="form-wrapper__form-input-control">
                    <TextField 
                        inputRef={register}
                        name="email"
                        className="form-wrapper__form-input-control-input" 
                        label="User name or Email" 
                        error={!!errors.email}
                        type="email"/> 
                    <b className="form-wrapper__form-input-control-error-msg">{errors.email?.message}</b>
                </div>

                <div className="form-wrapper__form-input-control">
                    <TextField 
                        name="password"
                        inputRef={register}
                        className="form-wrapper__form-input-control-input second" 
                        label="Password" 
                        error={!!errors.password}
                        type="password" /> 
                     <b className="form-wrapper__form-input-control-error-msg">{errors.password?.message}</b>
                    <a href="" className="form-wrapper__form-input-control-forgot">Forgot password?</a>
                </div>

                <button type="submit" className="form-wrapper__form-signin" onClick={handleSubmit(actions.login)}>Sign in</button>

                    <p className="form-wrapper__form-line"><span>Or</span></p>

                    <button  className="form-wrapper__form-google">
                        <img src={google} alt="google logo"/>
                        Sign in with Google
                    </button>
                        
            </form>

            <small className="form-wrapper__form-register">New in <b> Invision?</b><Link className="link" to="/register">Create Account</Link></small>
        </>        
    )
}

export default LoginForm