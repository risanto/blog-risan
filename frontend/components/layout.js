import Nav from './nav'
import Categories from './categories'

const Layout = ({ children, categories, languages }) => {
    return (
        <>
            <Nav/>
            <Categories categories={categories} languages={languages}/>
            {children}
        </>
    )
}

export default Layout