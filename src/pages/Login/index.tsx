import React from 'react'
import LoginForm from './LoginForm'
import CarouselInfo from './Carousel'


const Login = () =>{

    return (
        <section className="form-wrapper">
            <div className="form-wrapper__carousel">
                <CarouselInfo />
            </div>

            <div  className="form-wrapper__form">
                <LoginForm />
            </div>
        </section>
    )
}

export default Login