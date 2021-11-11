import useTheme from "../../Hook/useTheme";

function Header () {

    let {theme, setTheme} = useTheme()

    return(<>
        <header className={`header ${theme}`}>
        <h1>Header ({theme})</h1>
        
        <select onChange={(e)=>{
            setTheme(e.target.value)
        }} defaultValue={theme}>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
        </select>
        </header>
        </>)
    }
    
export default Header;