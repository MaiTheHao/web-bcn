import React from "react";
import "./AppNavbar.css";
import { Link } from 'react-router-dom';

function Navbar() {
    return (
   <ul className="navbar-menu">
       <li><Link to="/">Trang chủ</Link></li>
       <li><Link>Bài viết</Link></li>
       <li><Link>Dịch vụ</Link></li>
       <li><Link>Hoạt động</Link></li>
       <li><Link to="/about" >Về chúng tôi</Link></li>
       <li><Link to="/members" >Portfolio</Link></li>
   </ul>
   );
}

export default Navbar;