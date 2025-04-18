import React, { useState } from "react";
import styled from "styled-components";
import { Link, useMatch } from "react-router-dom";
import { motion } from "framer-motion";  
import roastedBeanIcon from "../assets/roasted-coffee-bean.svg";


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
      <SLink to="/" onClick={handleLinkClick}>
        <Logo>
          CaffiTrak
        </Logo>
       </SLink>

        <HamburgerIcon onClick={toggleMenu}>
          <span />
          <span />
          <span />
        </HamburgerIcon>
      </LogoAndHamburgerContainer>

      <Items isOpen={isOpen}>
        <Item>
          <SLink to="/add" onClick={handleLinkClick}>
            {/* <img src={addIcon} alt="Add Icon" style={{ width: '25px' }} /> */}
            Add
            {addMatch && <RoastedBeanIcon src={roastedBeanIcon} alt="Roasted Bean Icon" />}
          </SLink>
        </Item>
        <Item>
          <SLink to="/detail" onClick={handleLinkClick}>
            {/* <img src={viewIcon} alt="View Icon" style={{ width: '25px' }} /> */}
            View
            {detailMatch && <RoastedBeanIcon src={roastedBeanIcon} alt="Roasted Bean Icon" />}
          </SLink>
        </Item>
        <Item>
          <SLink to="/about" onClick={handleLinkClick}>
            {/* <img src={aboutIcon} alt="About Icon" style={{ width: '25px' }} /> */}
            About App
            {aboutMatch && <RoastedBeanIcon src={roastedBeanIcon} alt="Roasted Bean Icon" />}
          </SLink>
        </Item>
      </Items>
    </Nav>
  );
};


const Nav = styled.nav`
  display: flex;
   background-color:#FCFBF4;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  padding:2rem;
  z-index: 1000;
  transition: background-color 0.3s ease;

  @media (max-width: 768px) {

    flex-direction: column;
    align-items: flex-start;
    height: auto;
  }
`;

const Logo = styled.div`
  font-size:1.2rem;
  color: #47261f;
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
  gap: 3rem;
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
    width: 100%;
    gap:1rem;
 background-color:#FCFBF4;
 padding-bottom:2rem;
 border-bottom:1px solid  #47261f;
  }
`;

const Item = styled.li`
  position: relative;
  font-size: 1rem;
  font-weight: 300;
  margin: 10px 0;
  color: #47261f;
  

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


const HamburgerIcon = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  
  width: 30px;
  height: 25px;
  cursor: pointer;

  span {
    width: 25px;
    height: 2px;
    background-color: #333;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;
const RoastedBeanIcon = styled.img`
  position: absolute;
  width: 30px;
  height: auto;
  bottom: -30px;
  left: 50%;
  transform:  rotate(-70deg);
  transition: all 0.3s ease;
`;

export default Header;
