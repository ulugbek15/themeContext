import { useContext } from "react"
import {Context} from '../Context/ThemeContext'

function useTheme(){

    let {theme, setTheme} = useContext(Context)

    return {theme, setTheme}
}

export default useTheme;