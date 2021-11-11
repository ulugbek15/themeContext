import { createContext, useState, useEffect } from "react";

const Context = createContext()

function Provider({children}){

    const [theme, setTheme] = useState(window.localStorage.getItem('theme') || 'light')

    useEffect(() => {
        window.localStorage.setItem('theme', theme)
    }, [theme])

    let value = {
        theme: theme,
        setTheme: setTheme
    }

    return(
        <Context.Provider value={value}>{children}</Context.Provider>
    )
}

export {Context, Provider}