import React, { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import "./navbar2.css";

function Navbar2() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });
  
  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  return (
    <header className="header2">
      <div className="header2__content2">
        <Link to="/" className="header2__content2__logo2">
          싱물
        </Link>
        <nav
          className={`${"header2__content2__nav2"} 
          ${menuOpen && size.width < 768 ? `${"isMenu"}` : ""} 
          }`}
        >
          <ul>
            <li>
              <Link to="/">홈</Link>
            </li>
            <li>
              <Link to="/Guide">사용방법</Link>
            </li>
            <li>
              <Link to="/Service">서비스</Link>
            </li>

            <Link to="/register">
              <button className="btn">회원가입</button>
            </Link>
            <Link to="/login">
              <button className="btn btn__login">로그인</button>
            </Link>
          </ul>
        </nav>
        <div className="header2__content2__toggle2">
          {!menuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
      </div>
      <div className="header2__divider"></div>
    </header>
  );
}

export default Navbar2;
