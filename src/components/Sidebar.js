import React, { useState } from "react";
import "./Sidebar.css";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons";

const Nav = styled.div`
background: url('./images/newwave.png');
  background-size: cover;
  height: 150px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  // position: relative;
  width: max-width;
  border-bottom: none:
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const Heading = styled.div`
  color: white;
  z-index: 100;
`;

const SidebarNav = styled.nav`
  background: #000080;
  width: 260px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;
// background: linear-gradient(90deg, rgba(37,50,229,1) 27%, rgba(6,201,252,1) 100%),
const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#15171c" }}>
        <div className="nav">
          <Nav>
            <NavIcon to="#">
              <FaIcons.FaBars onClick={showSidebar} />
            </NavIcon>
            <Heading className="text">
                <div className="logo-container">
                <img
                 className="logo"
                 src="./images/aries-logo.png"
                   alt="aries-logo"
                 />
                 <h1>BOT</h1>
                 </div>
            </Heading>
          </Nav>
          <SidebarNav sidebar={sidebar}>
            <SidebarWrap>
              <NavIcon to="#">
                <AiIcons.AiOutlineClose onClick={showSidebar} />
              </NavIcon>
              {SidebarData.map((item, index) => (
                <SubMenu item={item} key={index} />
              ))}
            </SidebarWrap>
          </SidebarNav>
        </div>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
