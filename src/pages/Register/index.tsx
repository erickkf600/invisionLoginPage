import React from 'react'
import CarouselInfo from '../Login/Carousel'
import RegisterForm from './RegisterForm'
const Register = () =>{
    return (
        <section className="form-wrapper">
        <div className="form-wrapper__carousel">
            <CarouselInfo />
        </div>

        <div  className="form-wrapper__form">
            <RegisterForm />
        </div>
    </section>
    )
}

export default Register