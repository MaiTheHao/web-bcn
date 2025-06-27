import React from "react";
import "./AppNavbar.css";

function Navbar() {
    return (
   <ul className="navbar-menu">
       <li><a href="/">Trang chủ</a></li>
       <li><a href="/blog">Bài viết</a></li>
       <li><a href="/services">Năng lực</a></li>
       <li><a href="/contact">Hoạt động</a></li>
       <li><a href="/about">Về chúng tôi</a></li>
       <li><a href="/contact">Portfolio</a></li>
   </ul>
   );
}

export default Navbar;