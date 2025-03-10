import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/logo.webp";
import styles from "../styles/Header.module.css";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutsideOrScroll = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutsideOrScroll);
    document.addEventListener("scroll", handleClickOutsideOrScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideOrScroll);
      document.removeEventListener("scroll", handleClickOutsideOrScroll);
    };
  }, []);

  // Check if we are on the Gallery page
  const isGalleryPage = location.pathname === "/gallery";

  return (
    <nav className={styles.nav}>
      <div className={styles.nav__bar}>
        <div className={styles.nav__header}>
          <div className={styles.nav__logo}>
            <RouterLink to="/">
              <img className={styles.logo} src={logo} alt="House of gains" />
            </RouterLink>
          </div>
          <div
            className={styles.nav__menu__btn}
            id="menu-btn"
            onClick={toggleMenu}
          >
            {menuOpen ? <RxCross2 /> : <IoMdMenu />}
          </div>
        </div>
        <ul
          className={`${styles.nav__links} ${menuOpen ? styles.open : ""}`}
          id="nav-links"
          ref={menuRef}
        >
          <li>
            <RouterLink to="/">HOME</RouterLink>
          </li>
          {/* Only show the links if we're not on the Gallery page */}
          {!isGalleryPage && (
            <>
              <li>
                <ScrollLink to="about" smooth={true} duration={500} offset={-70} className="cursor-pointer">
                  ABOUT
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="clients" smooth={true} duration={500} offset={-70} className="cursor-pointer">
                  CLIENT
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="contact" smooth={true} duration={500} offset={-70} className="cursor-pointer">
                  CONTACT US
                </ScrollLink>
              </li>
            </>
          )}
          {/* Show gallery link only if not on the gallery page */}
          {!isGalleryPage && (
            <li>
              <RouterLink to="/gallery">GALLERY</RouterLink>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
