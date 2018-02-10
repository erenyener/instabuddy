import React from 'react'
import { Icon, Menu, Divider, Container } from 'semantic-ui-react'

class SideMenu extends React.Component {

    state = { activeItem: 'inbox' }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render () {
        const { activeItem } = this.state
        return (


            <Menu compact icon='labeled' vertical borderless fixed={'left'}>

                <div style={{'marginTop' : '15px'}}>
                    <Icon name='instagram' size='big'/>
                </div>

                <Divider />
                <Menu.Item name='plus' active={activeItem === 'plus'} onClick={this.handleItemClick}>
                  <Icon name='plus' />
                </Menu.Item>

                <Menu.Item name='calendar' active={activeItem === 'calendar'} onClick={this.handleItemClick}>
                  <Icon name='calendar' />
                </Menu.Item>

                <Menu.Item name='users' active={activeItem === 'users'} onClick={this.handleItemClick}>
                  <Icon name='users' />
                </Menu.Item>

                <Menu.Item name='tasks' active={activeItem === 'tasks'} onClick={this.handleItemClick}>
                  <Icon name='tasks' />
                </Menu.Item>

            </Menu>
        );
    }
}

export default SideMenu;
