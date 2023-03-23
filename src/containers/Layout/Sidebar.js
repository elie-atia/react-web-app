import { HomeIcon } from '../../assets/images/HomeIcon';
import { SidebarWrapper, MenuWrapper, NavLink, Svg } from './Sidebar.style';

export default function Sidebar() {

  const sidebarMenus = [
    {
      name: 'Home',
      path: './',
      exact: true,
      icon: <HomeIcon />,
    },
    {
      name: 'Page 1',
      path: '/page1',
      exact: false,
      icon: <HomeIcon />,
    },
    {
      name: 'Page 2',
      path: './page2',
      exact: false,
      icon: <HomeIcon />,
    }
  ];
  return (
    <SidebarWrapper >
 <MenuWrapper>
        {sidebarMenus.map((menu,index)=>(
        <NavLink  
        to= {menu.path}
        key={index}
        exact={menu.exact}
        activeStyle={{
          color: '#00C58D',
          backgroundColor: '#f7f7f7',
          borderRadius: '50px 0 0 50px',
        }}
      >
      <Svg> {menu.icon}</Svg> 
        {menu.name}
      </NavLink>))
        }
        
      </MenuWrapper>
    </SidebarWrapper>
  );
};

