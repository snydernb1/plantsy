import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import OpenModalButton from "../OpenModalButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import { useHistory } from "react-router-dom";

import './ProfileButton.css'

function ProfileButton({ user }) {
  const history = useHistory()
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");

  const closeMenu = () => setShowMenu(false);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    closeMenu()
    history.push('/')

  };

  return (
    <section>

      <i onClick={openMenu} className="fas fa-user-circle" />

      <div className={ulClassName} ref={ulRef}>
        {user ? (
          <>
            <p>{user.first_name}</p>
            <div onClick={handleLogout} className="signOut">
            <i className="fas fa-arrow-right-from-bracket" />
            <p>sign out</p>
            </div>

          </>
        ) : (
          <>
            <div className="authButtons" onClick={closeMenu}>
              <i class="fas fa-tree"></i>
            <OpenModalButton
              buttonText="Sign in"
              modalComponent={<LoginFormModal form={true}/>}
              />
            </div>

            <div className="authButtons" onClick={closeMenu}>
            <i className="fas fa-seedling" />
            <OpenModalButton
              buttonText="Sign up"
              modalComponent={<LoginFormModal form={false}/>}
              />
              </div>
          </>
        )}
      </div>
    </section>
  );
}

export default ProfileButton;
