import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import logo from '../image/logo.png';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Navigate, useNavigate } from 'react-router-dom';

const Navbar = () => {

    const menulist = ["여성", "Divided", "남성", "신생아/유아", "아동", "H&M Home", "Sale", "지속가능성 " ];

    const navigate = useNavigate()

    const goToLogin = () => {
        navigate("/login");
    }


  return (
    <div>
        <div>
            <div className = "login-button" onClick={goToLogin}>
                <FontAwesomeIcon icon={faUser} />
                <div>로그인</div>   
            </div>
        </div>
        <div className = "nav-section">
            <img width={100} src= {logo} />
        </div>
        <div className="menu-area">
                <ul className="menu-list" >
                    {menulist.map(menu=><li>{menu}</li>)}
                </ul>
            <div className="search-bar">
                <FontAwesomeIcon icon={faSearch} />
                <input type = "text" />
            </div>
        </div>
    </div>
  )
}

export default Navbar
