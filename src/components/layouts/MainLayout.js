import React from 'react';
import HeaderMenu from '../menus/HeaderMenu';
import SideMenu from '../menus/SideMenu';
import {Container} from  'semantic-ui-react';

const MainLayout = props => (
  <div>
    <HeaderMenu />
    <SideMenu />
    <div style={{marginLeft:'85px', padding:'20px'}}>
        {props.children}
    </div>
  </div>
)

export default MainLayout;
