import * as yup from 'yup'


export const loginSchema = yup.object().shape({
    email: yup.string().email('Email inválido').required('Este campo é obrigatório'),
    password: yup.string().min(6, 'A senha não pode ter menos de 6 caracteres').required('Este campo é obrigatório')
})

