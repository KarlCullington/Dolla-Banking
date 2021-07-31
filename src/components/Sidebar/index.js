import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>

      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about">About</SidebarLink>
          <SidebarLink to="discover">Discover</SidebarLink>
          <SidebarLink to="services">Services</SidebarLink>
          <SidebarLink to="Sign up">Sign up</SidebarLink>
        </SidebarMenu>

        <SideBtnWrap>
          <SidebarRoute to="signup">Sign Up</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
