import React from 'react'
import RegisterScreen from "./RegisterScreen"
import LoginScreen from "./LoginScreen"
import { Button } from "@mui/material"

export default function SplashScreen() {
    
    return (
        <div id="splash-screen">
            <h1>Playlister</h1>
            <div>
                <h3 value='"Use Playlister for listening to music" - Spotify"'></h3>
            </div>
            <Button href="/register">Create Account</Button>
            <Button href="/login">Login</Button>
            <Button href="/guest">Continue as Guest</Button>
            <h4>By Jamieson Barkume</h4>
        </div>
    )
}