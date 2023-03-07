import * as yup from "yup";

const loginSchema = yup.object({
    email: yup.string().required().email(),
    password:yup.string().required().min(8)
})

const signUpSchema = yup.object({
    firstName: yup.string().required().min(3).label('First Name'),
    lastName:yup.string().required().min(3).label('Last Name'),
    email: yup.string().required().email(),
    password: yup.string().required().min(8),
    confirmPassword:yup.string().oneOf([yup.ref('password')],'password did not match'),
})
export {loginSchema,signUpSchema}