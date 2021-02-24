import { SideNav, SideNavItem } from 'react-materialize';

const SideNavigation = () =>{
  return(
    <SideNav
          className="dashboard-nav"
          id="SideNav-10"
          fixed={ true }
          options={{
            
            draggable: true
          }}
          
        >
          <SideNavItem>
            Dashboard
          </SideNavItem>
          <SideNavItem>
            Products
          </SideNavItem>
          <SideNavItem>
            Reports
          </SideNavItem>
          <SideNavItem>
            Support
          </SideNavItem>
          
        </SideNav>
  )
}

export default SideNavigation;