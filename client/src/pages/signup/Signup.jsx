import React, { useState} from "react";
import "./signup.css";
import axios from 'axios';

const Signup = () => {

    const [ user, setUser]=useState({
        name: "",
        email: "",
        password: "",
        reEnterPassword: ""
    })

    const handleChange= e => {
        const {name, value}=e.target
        setUser({
            ...user,
            [name]:value
        })
    }

    const signup=() => {
        const {name, email, password, reEnterPassword}=user
        if (name && email && password && (password===reEnterPassword)){
            axios.post("http://localhost:9005/signup", user)
            .then(res=>console.log(res))
        }
        else{
            alert("Invalid input")
            if (password!==reEnterPassword)
            {
                alert("Please enter the same password in the re enter field")
            }
        }
    }

    return (
        <div className="signup">
            {console.log("User", user)}
            <h1>Signup</h1>
            <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={handleChange}></input>
            <input type="text" name="email" value={user.email} placeholder="Your Email address" onChange={handleChange}></input>
            <input type="password" name="password" value={user.password} placeholder="Enter a strong Password" onChange={handleChange}></input>
            <input type="text" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter the Password" onChange={handleChange}></input>
            <div className="button" onClick={signup}>Signup</div>
            <div>Have an account already?</div>
            <div className="button">Login</div>
        </div>
    )
       

}

export default Signup