import React from 'react';
import HeaderMenu from '../menus/HeaderMenu';
import SideMenu from '../menus/SideMenu';
import {Container} from  'semantic-ui-react';

const MainLayout = props => (
  <div>
    <HeaderMenu />
    <SideMenu />
    <Container>
        {props.children}
    </Container>
  </div>
)

export default MainLayout;
