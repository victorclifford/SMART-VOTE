import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import logo from "../assets/svote-logo.png";
import { UserAtom } from "../atoms/userAtom";
import styled from "styled-components";
import Cookies from "js-cookie";

const HeaderComp = () => {
  const user = useRecoilValue(UserAtom);
  const [show, setShow] = useState(false);

  return (
    <Wrapper className="navbar-light bg-dark">
      <nav className="navbar  container">
        {/* <Link to="/" className="navbar-brand image1"> */}
        <div
          className="nav-logo"
          style={{
            height: "55px",
            width: "110px",
            border: "hidden",
          }}
        >
          {/* <img src={logo} alt="" style={{ width: "100", height: "100" }} /> */}
        </div>
        {/* <p className="m-0 ms-2">Smart-Vote</p>
        </Link> */}

        {user && (
          <ul className="nav">
            <li className="nav-item dropdown">
              <span
                // href="#"
                className=""
                data-bs-toggle="dropdown"
                // aria-expanded="false"
                role="button"
              >
                <img
                  src={user?.image}
                  className="avatar "
                  alt=""
                  onClick={() => setShow(!show)}
                />
              </span>
              <ul className={`dropdown-menu ${show ? "show" : ""}`}>
                <li
                  className="dropdown-item c-pointer"
                  onClick={() => {
                    Cookies.remove("token");
                    window.location.href = "/";
                  }}
                >
                  Logout
                </li>
              </ul>
            </li>
          </ul>
        )}
      </nav>
    </Wrapper>
  );
};

export default HeaderComp;

const Wrapper = styled.header`
  .navbar {
    .c-pointer {
      cursor: pointer;
    }
    &-brand {
      display: flex;
      align-items: center;
      img {
        width: 3rem;
        height: 3rem;
      }
    }
    .avatar {
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
    }
  }
`;
