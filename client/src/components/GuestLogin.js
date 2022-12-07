import { useContext } from 'react';
import AuthContext from '../auth'

export default function GuestLogin() {
    const { auth } = useContext(AuthContext);

    const generateGuest  = () => {
        // var crypto = require("crypto");
        // var user = crypto.randomBytes(10).toString('hex'),
        //     password = crypto.randomBytes(10).toString('hex');
        var user = "",
            password = "";

        auth.registerUser(
            "Guest",
            "",
            user,
            password,
            password
        )

        auth.loginUser(
            user,
            password
        );
    }

    return (
        generateGuest()
    )
}