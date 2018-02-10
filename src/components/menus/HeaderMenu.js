import React from 'react'
import { Button, Dropdown, Menu, Icon } from 'semantic-ui-react'

class HeaderMenu extends React.Component {

    state = { activeItem: 'home' }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render () {
        const { activeItem } = this.state

        return (
            <Menu size='massive'>

                <div style={{marginLeft:'110px', marginTop: '15px'}}>
                    <h2>Dashboard</h2>
                </div>

                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Icon name='plus' />
                    </Menu.Item>

                  <Menu.Item>
                    <Button primary>Giriş Yap</Button>
                  </Menu.Item>
                </Menu.Menu>
             </Menu>
        );
    }
}

export default HeaderMenu;
