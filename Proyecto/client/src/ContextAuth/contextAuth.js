import { useContext } from "react";
import { createContext } from "react";

const authContext=()=>{
    createContext();
};  //nos devuelve un objeto con multiples propiedades

const useAuth =()=>{
    const contexAuth= useContext(authContext); //esta incluido el valor de login(useAurh en cualquier lugar)
    return contexAuth;
}

const AuthProvider= ({children})=>{
    const user={ //porpiedades de AuthProvider
        login: true
    };

    return ( //los componetes que quiero mostrar deben estar dentro del provider para acceder a sus propiedades (user)
        <authContext.Provider value={{user}}>
            {children} 
        </authContext.Provider>
    );
}

export default {AuthProvider, useAuth, authContext};
