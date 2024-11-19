import React from "react"
//import { useNavigate } from "react-router-dom"
//import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'

export default function CustomerLogin(){
    //const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" })


    // const auth = getAuth()
    // const navigate = useNavigate();

    // async function handleSignIn(e){
    //     e.preventDefault();
    // signInWithEmailAndPassword(auth,email,password)
    // .then((user) => {
    //     // Success...
    //     console.log(user)
    //     navigate('/home')
    //     //...
    // })
    // .catch((error) => {
    //     // Error
    //     console.log(error)
    // })
    // }

    //onSubmit={handleSubmit} 

    return (
        <div className="login-container">
            <h1>Sign in to your account</h1>
            <form className="login-form"> 
                <input
                    name="email"
                    //onChange={handleChange}
                    type="email"
                    placeholder="Email address"
                    //value={loginFormData.email}
                />
                <input
                    name="password"
                    //onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    //value={loginFormData.password}
                />
                <button>Log in</button>
            </form>
        </div>
    )
 
}