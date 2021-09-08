import React, {useEffect, useState} from "react";


const AuthContext = React.createContext({
    isLoggedIn: false,
    loginHandler:(email, password) =>{},
    logoutHandler: () =>{}

})

export const AuthContextProvider = (props) =>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const loginHandler = (email, password) => {
        localStorage.setItem('logIn', '1');
        setIsLoggedIn(true);
    };

    const logoutHandler = () => {
        localStorage.removeItem('logIn');
        setIsLoggedIn(false);
    };

    useEffect(() => {
        const storage = localStorage.getItem('logIn');
        if (storage === '1') setIsLoggedIn(true);
    });

    return(
        <AuthContext.Provider value={{
                isLoggedIn:isLoggedIn,
                onLogout:logoutHandler,
                onLogin:loginHandler
            }}>
            {props.children}
        </AuthContext.Provider>)
}

export default AuthContext