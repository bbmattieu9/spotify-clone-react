import React from 'react'
import './Login.css'
import { loginUrl } from './spotify'

function Login() {
    return (
        <div className="login">
            <img src="https://services.tegrazone.com/sites/default/files/pcgame-featured-image/Spotify-MFG-840x360.jpg" alt="spotify logo" />
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login
