import React from 'react'
import { Formik, Form } from 'formik';
import * as yup from "yup";
import logo from "../../../src/dJLogo.png"
import google from "../../../src/google.webp"
import { CustomInput } from '../customisedComponents/Input';
import "../../../src/Login.css"

const emailRules = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/

function LoginPage() {

    const signupSchema = yup.object({ 
        name:yup.string()
        .required('Please enter your name'),
        
        email: yup
    .string()
    .required("This Field is required")
    .matches(emailRules,{message: "Please provide a valid email address"}),

        password: yup.string()
          .required('Please enter your password')
          .matches(

            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
          )
    })
    return (
        <>

            <div className='Container'>
                <div className="main">
                        
                    
                    <div className="layer">
                        
                    </div>
                    
                <p>"We've been using Ddiiro to kick start every new project
                        and can't image working without him."</p>
                </div>
            
                <div className='container-card'>
                    <Formik
                        initialValues={{ name:"", email: "", password: "" }}
                        onSubmit={async (values, submitProps) => {
                            await new Promise((resolve) => setTimeout(resolve, 500));
                            alert(JSON.stringify(values, null, 2));
                            submitProps.resetForm()
                        }}

                        validationSchema={signupSchema}
                    >
                        <Form className='form'>
                        <img src={logo} alt="" />
                            <div className="sidebar">
                                <h2>Create an account</h2>
                                <p>Lets get started with your 30 day free trail.</p>
                                <CustomInput name="name" type="text" label="Name" />
                                <CustomInput name="email" type="email" label="Email" />
                                <CustomInput name="password" type="password" label="Password" />
                                <button className='submit' type="submit">Create account</button>
                                <div className="signin">
                                <img src={google} alt="" />
                                <button className='google' type="submit"><a href="https://www.google.com/">Sign up with Google</a></button>
                                </div>
                                
                            </div>

                           <center> <p>Already have an account? <a href="">Log in</a></p> </center>

                        </Form>
                    </Formik>
                </div>
            </div>
        </>
    )
}
export default LoginPage
