import { NavLink } from "react-router-dom";


function NavBar () {
    return (
        <div>
            <div>
                <h1>GRACE NIEBOER</h1>
                <h1>Software Engineer</h1>
            </div>
            <div>
                <NavLink
                to="/"
                exact
                >
                    HOME
                </NavLink>
                <NavLink
                to="/about"
                exact
                >
                    ABOUT
                </NavLink>
                <NavLink
                to="/portfolio"
                exact>
                    PORTFOLIO
                </NavLink>
            </div>
        </div>
    )
}

export default NavBar;