import { Link, Outlet } from "react-router-dom"
function Greet() {

    return (
        <div>
            {/* <h2>This is Greet Component</h2> */}
            <Link to="login">Login</Link>
            <Link to="create">Create Account</Link>
            <Outlet />

        </div>
    )
}
export default Greet