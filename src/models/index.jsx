import * as Yup from "yup"

export const signUpSchema=Yup.object({
    name:Yup.string().min(2).max(25).required('please enter your name'),
    email:Yup.string().email().required('please enter your email'),
    note:Yup.string().min(2).max(200).required('please enter your note'),
})