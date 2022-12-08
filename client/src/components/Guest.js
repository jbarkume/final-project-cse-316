import { useContext } from 'react';
import AuthContext from '../auth'
import MUIErrorModal from './MUIErrorModal'
import Copyright from './Copyright'

export default function Guest() {
    const { auth } = useContext(AuthContext);

    const generateGuest  = () => {
        let crypto = require("crypto");
        let user = crypto.randomBytes(10).toString('hex');
        let password = crypto.randomBytes(10).toString('hex');

        console.log(user, password)

        auth.registerUser(
            "Guest",
            "",
            user,
            password,
            password
        )
        
        let modalJSX = ""
        console.log(auth);
        if (auth.errorMessage !== null){
            modalJSX = <MUIErrorModal />;
        }
        console.log(modalJSX);

        auth.loginUser(
            user,
            password
        );

        return null
    }

    return (
        generateGuest()
    )
}