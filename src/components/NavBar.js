import { NavLink } from "react-router-dom";


function NavBar () {
    return (
        <nav className="bg-transparent">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="flex space-x-10">
                        <h1 className="text-lg font-display font-bold">Grace Nieboer</h1>
                        <h1 className="text-lg font-display font-bold">Software Engineer</h1>
                    </div>
                    <div className="flex space-x-4">
                        <NavLink
                        to="/"
                        exact
                        className="hover:text-white rounded-md px-3 py-2 text-xl font-medium"
                        >
                            HOME
                        </NavLink>
                        <NavLink
                        to="/about"
                        exact
                        className="hover:text-white rounded-md px-3 py-2 text-xl font-medium"
                        >
                            ABOUT
                        </NavLink>
                        <NavLink
                        to="/portfolio"
                        exact
                        className="hover:text-white rounded-md px-3 py-2 text-xl font-medium"
                        >
                            PORTFOLIO
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;