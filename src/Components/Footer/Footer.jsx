import useTheme from '../../Hook/useTheme'

function Footer () {

    let {theme} = useTheme()

    return(<>
        <footer className={`footer ${theme}`}>
            <h1>Footer ({theme})</h1>
        </footer>
    </>)
}

export default Footer;