import React, { useState } from 'react'
import "./Login.css"
import imgLoginleftside from "./../assets/images/loginrightside.png"
import axios from 'axios'
function Login() {
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const handleLogin = async (email, pass) => {
        const response = await axios.post("http://192.168.1.25:3050/api/auth/login", {
            username: email,
            password: pass
        })
        localStorage.setItem("token", response.data.data.access_token)
        localStorage.setItem("refresh_token", response.data.data.refresh_token)
        window.location.href="/"
    }
    return (
        <div className="container login-container">
            <div className="login-left">
                <div className="logo">Digital</div>
                <h1 className="headline">
                    Artificial Intelligence Driving Results For The Travel Industry
                </h1>
                <p className="subtext">Welcome back! Please login to your account.</p>
                <div className="login-form" >
                    <label className="form-label">Email Address</label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        className="form-input"
                        placeholder="hakeem@digital.com"
                    />
                    <label className="form-label">Password</label>
                    <input
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                        type="password"
                        className="form-input"
                        placeholder="****************"
                    />
                    <div className="form-options">
                        <a href="#" className="forgot-password">
                            Forgot Password?
                        </a>
                    </div>
                    <div className="form-buttons">
                        <button type="button" className="btn login-btn" onClick={() => handleLogin(email, pass)} >
                            Login
                        </button>
                        <button type="button" className="btn signup-btn">
                            Sign Up
                        </button>
                    </div>
                </div>
                <div className="social-login">
                    <p>Or login with</p>
                    <div className="social-buttons">
                        <a href="#" className="social-btn">Facebook</a>
                        <a href="#" className="social-btn">LinkedIn</a>
                        <a href="#" className="social-btn">Google</a>
                    </div>
                </div>
            </div>
            <div className="login-right">
                <img
                    src={imgLoginleftside} // Replace with your bike illustration URL
                    alt="Illustration"
                    className="illustration"
                />
            </div>
        </div>
    )
}

export default Login
