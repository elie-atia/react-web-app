import { HomeIcon } from '../../assets/images/HomeIcon';
import { SidebarWrapper, MenuWrapper, NavLink, Svg } from './Sidebar.style';

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

