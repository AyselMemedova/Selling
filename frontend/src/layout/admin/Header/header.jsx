
import React from 'react'
import "./header.css"
import {Link} from "react-router-dom"

const Header = () => {
    return (
        <div>
            <div className="header">
                <div className="logo">
                    <h1>Admin</h1>
                </div>
                <div className="list">
                    <ul>
                        <li> <Link to={"/admin"}>Dashboard</Link> </li>
                        <li> <Link to={"/admin/add"}>Add Page</Link> </li>
                        <li><Link to={"/admin/product"}>Product</Link></li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Header
                                