import { NavLink } from "react-router-dom";
import { useState } from "react";


function NavBar () {
    const [showMenu, setShowMenu] = useState(false)


    return (
        <nav className="bg-transparent">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="flex space-x-2 sm:space-x-10">
                        <h1 className="text-sm sm:text-lg font-display font-bold">Grace Nieboer</h1>
                        <h1 className="text-sm sm:text-lg font-display font-bold">Software Engineer</h1>
                    </div>
                    <div onClick={()=> console.log("it works YAY")}  className="sm:hidden space-y-2">
                        <div className="w-6 h-0.5 bg-white"></div>
                        <div className="w-6 h-0.5 bg-white"></div>
                        <div className="w-6 h-0.5 bg-white"></div>
                    </div>
                    <ul className=" hidden bg-orange-600 absolute left-0 top-0 w-full p-10 space-y-8 text-center rounded-b-3xl">
                        <li>
                            <NavLink
                            to="/"
                            exact
                            className="hover:text-white rounded-md px-3 py-2 text-sm sm:text-xl font-medium"
                            >
                                HOME
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                            to="/about"
                            exact
                            className="hover:text-white rounded-md px-3 py-2 text-sm sm:text-xl font-medium"
                            >
                                ABOUT
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                            to="/portfolio"
                            exact
                            className="hover:text-white rounded-md px-3 py-2 text-sm sm:text-xl font-medium"
                            >
                                PORTFOLIO
                            </NavLink>
                        </li>
                    </ul>
                    <div className="hidden sm:flex sm:space-x-4 ">
                        <NavLink
                        to="/"
                        exact
                        className="hover:text-white rounded-md px-3 py-2 text-sm sm:text-xl font-medium"
                        >
                            HOME
                        </NavLink>
                        <NavLink
                        to="/about"
                        exact
                        className="hover:text-white rounded-md px-3 py-2 text-sm sm:text-xl font-medium"
                        >
                            ABOUT
                        </NavLink>
                        <NavLink
                        to="/portfolio"
                        exact
                        className="hover:text-white rounded-md px-3 py-2 text-sm sm:text-xl font-medium"
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