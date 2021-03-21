import React from 'react'
import useDarkMode from '../hooks/useDarkMode'

const Nav = (props) => {
    const [colorTheme, setTheme] = useDarkMode()
    
    return (
        <nav className="static top-0 flex p-2 dark:bg-black">
            <button
                onClick={() => setTheme(colorTheme)}
                className="place-self-center focus:outline-none"
            >
                <img
                    alt="dark mode"
                    src="/moon.svg"
                    className="dark:hidden"
                    width="25"
                    height="25"
                />
                <img
                    alt="light mode"
                    src="/sun.svg"
                    className="hidden dark:block"
                    width="25"
                    height="25"
                />
            </button>
        </nav>
    )
}

export default Nav
