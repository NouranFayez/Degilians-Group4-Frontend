import { useContext } from "react"
import { Link } from "react-router-dom"
import { DataContext } from "../context/context"

export const Navbar = () => {
    const { token, setToken, userData, setUserData } = useContext(DataContext)
    function handleLogout(){
        localStorage.removeItem('token')
        localStorage.removeItem('userData')
        setToken(null)
        setUserData({})

    }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" >Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="" className="nav-link active" aria-current="page" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="products" className="nav-link" >Products</Link>
                            </li>

                            {
                                token ? <>
                                    <li className="nav-item">
                                        <Link className="nav-link" onClick={handleLogout} >Logout</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="login" className="nav-link" >Welcome userName</Link>
                                    </li>
                                </> :
                                    <li className="nav-item">
                                        <Link to="login" className="nav-link" >Login</Link>
                                    </li>
                            }


                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}