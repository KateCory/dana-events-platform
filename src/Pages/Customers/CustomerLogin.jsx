import React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

export default function CustomerLogin(){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const auth = getAuth() // instantiate the get auth instance 
    const navigate = useNavigate() 

    async function handleSignIn(e){
        e.preventDefault();

    signInWithEmailAndPassword(auth,email,password)
    .then((user) => {
        console.log(user)
        console.log("Hello", user)
        navigate('/events')

    })
    .catch((error) => {
        console.log(error)
    })
    }

    //onSubmit={handleSubmit} 

    return (
        <div className="login-container">
            <h1>Sign in to your account</h1>
            <form className="login-form"> 
                <input onChange={(e) => {setEmail(e.target.value)}}
                    name="email"
                    //onChange={handleChange}
                    type="email"
                    placeholder="Email address"
                    //value={loginFormData.email}
                />
                <input onChange={(e) => {setPassword(e.target.value)}}
                    name="password"
                    //onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    //value={loginFormData.password}
                />
                <button onClick={handleSignIn}>Log in</button>
            </form>
        </div>
    )
 
}