import { styled } from 'baseui';
import { NavLink as NavLinks } from "react-router-dom";
import { HomeIcon } from '../../assets/images/HomeIcon';


export default function Sidebar() {
  return (
    <SidebarWrapper >
 <MenuWrapper>
        
          <NavLink
            to= '/'
            key={1}
            exact={true}
            activeStyle={{
              color: '#00C58D',
              backgroundColor: '#f7f7f7',
              borderRadius: '50px 0 0 50px',
            }}
          >
          <Svg> <HomeIcon /></Svg> 
            Home
          </NavLink>
          <NavLink
            to= '/page1'
            key={1}
            exact={true}
            activeStyle={{
              color: '#00C58D',
              backgroundColor: '#f7f7f7',
              borderRadius: '50px 0 0 50px',
            }}
          >
          <Svg> <HomeIcon /></Svg> 
            Page 1
          </NavLink>
          <NavLink
            to= '/page2'
            key={1}
            exact={true}
            activeStyle={{
              color: '#00C58D',
              backgroundColor: '#f7f7f7',
              borderRadius: '50px 0 0 50px',
            }}
          >
          <Svg> <HomeIcon /></Svg> 
            Page 2
          </NavLink>
      </MenuWrapper>
    </SidebarWrapper>
  );
};

const SidebarWrapper = styled("div",{
  width: "270px",
  height: "auto",
  display: "flex",
  flexShrink: "0",
  backgroundColor: "fffff",   
  flexDirection: "column",

  "@media only screen and (max-width: 767px)": {
    // width: 'calc(100% - 65px)',
    width: "auto",
    padding: "0",
    height: "100%",
  }  
});

const MenuWrapper = styled("div", {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  padding: "45px 0",
  overflowY: "auto",

  "@media only screen and (max-width: 767px)": {
    padding: "20px 0"
    // alignItems: 'flex-start',
  }
});


const NavLink = styled(NavLinks, {
  width: "calc(100% - 30px)",
  outline: "0",
  color: 'dark',
  display: "flex",
  alignItems: "center",
  padding: "20px 55px 20px 30px",
  textDecoration: "none",
  transition: "0.15s ease-in-out",

  "@media only screen and (max-width: 767px)": {
    width: "100%",
    padding: "20px 35px"
  },

  "&.active": {
    color: "red",
    backgroundColor: 'blue',
    borderRadius: "50px 0 0 50px"
  }
});

const Svg = styled("span", {
  width: "16px",
  marginRight: "15px",
  display: "flex",
  alignItems: "center"
});