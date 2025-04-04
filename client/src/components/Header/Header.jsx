import React, { useState } from "react";
import styled from "styled-components";
import { Link, useMatch } from "react-router-dom";
import { motion } from "framer-motion";  
import caffeineLogo from "../../assets/cutebean.png";
import homeIcon from "../../assets/home.svg";
import addIcon from "../../assets/add.svg";
import viewIcon from "../../assets/view.svg";
import aboutIcon from "../../assets/about.svg";

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  width: 100%;
  padding: 20px 20px 20px 0;
  top: 0;
  height: 100px;
  z-index: 1000;
  transition: background-color 0.3s ease;

  @media (max-width: 768px) {

    flex-direction: column;
    align-items: flex-start;
    height: auto;
  }
`;

const Logo = styled.div`
  font-size: 22px;
  color: #47261f;
  font-family: "Boldonse", system-ui;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  padding-left:2rem;

  @media (max-width: 768px) {
    margin-bottom: 20px; 
  }

  img {
    width: 50px;
  }
`;

const LogoAndHamburgerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;  
  padding: 0 20px;

  @media (max-width: 768px) {
    justify-content: space-between;
    align-items: center; 
  }
`;


const Items = styled.ul`
  display: flex;
  align-items: center;
  gap: 25px;
  padding-left:2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin-top: 20px;
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")}; /
    position: absolute;
    top: 100px;
    left: 0;
    background-color: white;
    width: 100%;
  
  }
`;

const Item = styled.li`
  position: relative;
  font-size: 15px;
  font-weight: 300;
  margin: 10px 0;

  &:hover {
    cursor: pointer;
    color: #99753F;
  }
`;

const SLink = styled(Link)`
  color: #333;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px;
  white-space: nowrap; 

  &:hover {
    color: #99753F;
  }
`;

const Circle = styled(motion.span)`
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #99753F;
  transition: all 0.3s ease;
`;


const HamburgerIcon = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 25px;
  cursor: pointer;

  span {
    width: 30px;
    height: 3px;
    background-color: #333;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const homeMatch = useMatch("/");
  const addMatch = useMatch("/add");  
  const detailMatch = useMatch("/detail");  
  const aboutMatch = useMatch("/about");

  const toggleMenu = () => setIsOpen((prev) => !prev); 
  const handleLinkClick = () => {
    setIsOpen(false); 
  };

  return (
    <Nav>
        <LogoAndHamburgerContainer>
        <Logo>
          <img src={caffeineLogo} alt="Caffeine Logo" />
          CaffiTrak
        </Logo>

        <HamburgerIcon onClick={toggleMenu}>
          <span />
          <span />
          <span />
        </HamburgerIcon>
      </LogoAndHamburgerContainer>

      <Items isOpen={isOpen}>
        <Item>
          <SLink to="/" onClick={handleLinkClick}>
            <img src={homeIcon} alt="Home Icon" style={{ width: '25px' }} />
            Home
            {homeMatch && <Circle layoutId="circle" />}
          </SLink>
        </Item>
        <Item>
          <SLink to="/add" onClick={handleLinkClick}>
            <img src={addIcon} alt="Add Icon" style={{ width: '25px' }} />
            Add
            {addMatch && <Circle layoutId="circle" />}
          </SLink>
        </Item>
        <Item>
          <SLink to="/detail" onClick={handleLinkClick}>
            <img src={viewIcon} alt="View Icon" style={{ width: '25px' }} />
            View
            {detailMatch && <Circle layoutId="circle" />}
          </SLink>
        </Item>
        <Item>
          <SLink to="/about" onClick={handleLinkClick}>
            <img src={aboutIcon} alt="About Icon" style={{ width: '25px' }} />
            About App
            {aboutMatch && <Circle layoutId="circle" />}
          </SLink>
        </Item>
      </Items>
    </Nav>
  );
};

export default Header;
