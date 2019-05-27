import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
// import "./HomeNav.css";
import { Dropdown, Icon } from "semantic-ui-react";
import { GlobalColors, GlobalSizes } from "../styles/GlobalStyles";

const Navbar = props => {
  const [activeItem, setActiveItem] = useState(0);

  useEffect(() => {
    const url = window.location.pathname;
    switch (url) {
      case "/":
        setActiveItem(1);
        break;
      case "/features":
        setActiveItem(2);
        break;
      case "/pricing":
        setActiveItem(3);
        break;
      default:
        setActiveItem(0);
        break;
    }
  }, []);

  const activateItem = MenuItem => {
    setActiveItem(MenuItem);
  };

  const isActive = MenuItem => {
    return MenuItem === activeItem ? ActiveMenuItem : null;
  };

  const centerNavItems = textColor => {
    return (
      <>
        <CenterMenu>
          <NavLink to="/use-cases ">
            <MenuItem as={isActive(1)} onClick={() => activateItem(1)}>
              <Item textColor={textColor}>Use Cases</Item>
            </MenuItem>
          </NavLink>
          <NavLink to="/features">
            <MenuItem as={isActive(2)} onClick={() => activateItem(2)}>
              <Item textColor={textColor}>Features</Item>
            </MenuItem>
          </NavLink>
          <NavLink to="/docs">
            <MenuItem as={isActive(3)} onClick={() => activateItem(3)}>
              <Item textColor={textColor}>Docs</Item>
            </MenuItem>
          </NavLink>
          <NavLink to="/contact">
            <MenuItem as={isActive(4)} onClick={() => activateItem(4)}>
              <Item textColor={textColor}>Contact</Item>
            </MenuItem>
          </NavLink>
        </CenterMenu>
      </>
    );
  };

  // const rightNavItems = textColor => {
  //   return (
  //     <>
  //       <RightMenu>
  //         <NavLink to="/dashboard" onClick={() => activateItem(1)}>
  //           <MenuItem as={isActive(1)}>
  //             <Item textColor={textColor}>
  //             </Item>
  //           </MenuItem>
  //         </NavLink>
  //         <NavLink to="/login">
  //           <MenuItem>
  //             <Item textColor={textColor}>Logout</Item>
  //           </MenuItem>
  //         </NavLink>
  //       </RightMenu>
  //     </>
  //   );
  // };

  const compactNavMenu = () => {
    return (
      <>
        <CompactNavContainer>
          <Dropdown
            button
            className="icon"
            size="huge"
            direction="left"
            fluid
            icon="bars"
          >
            <Dropdown.Menu>
              <Dropdown.Item>
                <NavLink to="/">
                  {/* <MenuItem as={isActive(1)} onClick={() => activateItem(1)}> */}
                  <Item textColor={GlobalColors.PrimaryGrey}>Home</Item>
                  {/* </MenuItem> */}
                </NavLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <NavLink to="/how-it-works">
                  {/* <MenuItem as={isActive(2)} onClick={() => activateItem(2)}> */}
                  <Item textColor={GlobalColors.PrimaryGrey}>How It Works</Item>
                  {/* </MenuItem> */}
                </NavLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <NavLink to="/gifts">
                  {/* <MenuItem as={isActive(3)} onClick={() => activateItem(3)}> */}
                  <Item textColor={GlobalColors.PrimaryGrey}>
                    Corporate Gifts
                  </Item>
                  {/* </MenuItem> */}
                </NavLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <NavLink to="/contact">
                  {/* <MenuItem as={isActive(4)} onClick={() => activateItem(4)}> */}
                  <Item textColor={GlobalColors.PrimaryGrey}>Contact Us</Item>
                  {/* </MenuItem> */}
                </NavLink>
              </Dropdown.Item>
              <Dropdown.Item>
                {/* <MenuItem> */}
                <SupportLink
                  href="https://audio-grenade.freshdesk.com/support/home"
                  target="_blank"
                >
                  <Item textColor={GlobalColors.PrimaryGrey}>Support</Item>
                </SupportLink>
                {/* </MenuItem> */}
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>
                <SupportLink
                  href="https://audio-grenade.mybigcommerce.com/"
                  // target="_blank"
                >
                  {/* <MenuItem> */}
                  <Item textColor={GlobalColors.PrimaryGrey}>Shop</Item>
                  {/* </MenuItem> */}
                </SupportLink>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </CompactNavContainer>
      </>
    );
  };

  return (
    <NavContainer>
      <NavLink to="/">
        <LogoContainer>
          <Logo>
            <Icon size="big" name="code branch" />
          </Logo>
          <CompanyName>The Code Learning Project</CompanyName>
        </LogoContainer>
      </NavLink>
      <NavMenu>
        {compactNavMenu()}
        {centerNavItems(props.textColor)}
        {/* {rightNavItems(props.textColor)} */}
      </NavMenu>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  position: absolute;
  top: 0rem;
  width: 100%;
`;

const NavMenu = styled.div`
  list-style-type: none;
  margin-left: 6rem;
  background-color: rgba(0, 0, 0, 0);
  display: flex;
  justify-content: center;
`;

const CompactNavContainer = styled.div`
  display: none;
  position: absolute;
  top: 2rem;
  right: 2rem;

  @media (max-width: ${GlobalSizes.ScreenWidth}) {
    display: inline;
  }
`;

const MenuItem = styled.div`
  float: left;
  font-size: 1.25rem;
`;

const ActiveMenuItem = styled.div`
  float: left;
  font-size: 1.25rem;
  border-bottom: ${GlobalColors.PrimaryGreen};
  border-bottom-width: thin;
  border-bottom-style: solid;
`;

const Item = styled.p`
  display: block;
  color: ${props => props.textColor || GlobalColors.PrimaryGrey};
  text-align: center;
  padding: 10px 16px 5px 16px;
  text-decoration: none;
  z-index: 1;
  letter-spacing: 1px !important;
`;

const SupportLink = styled.a`
  :hover {
    cursor: pointer;
  }
`;

const LogoContainer = styled.div`
  position: absolute;
  top: 1.5rem;
  left: 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Logo = styled.div`
  /* height: 4rem;
  width: 4rem; */
`;

const CompanyName = styled.h1`
  font-size: 1.6rem !important;
  border: none;
  margin: 0;
  letter-spacing: 0.5px !important;
`;

const RightMenu = styled.div`
  position: relative;
  text-align: center;
  border-bottom: 5px !important;
  display: flex;
  justify-content: flex-end;
  padding: 2rem 2rem 1rem 0rem;

  @media (max-width: ${GlobalSizes.ScreenWidth}) {
    display: none;
  }
`;

// const CenterContainer = styled.div`
//   position: absolute;
//   top: 1.5rem;
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

const CenterMenu = styled.div`
  text-align: center;
  border-bottom: 5px !important;
  display: flex;
  justify-content: center;
  padding-top: 1.5rem;
  /* padding: 2rem 2rem 1rem 2rem; */
  /* padding-left: 15%; */

  @media (max-width: ${GlobalSizes.ScreenWidth}) {
    display: none;
  }
`;

export default Navbar;
