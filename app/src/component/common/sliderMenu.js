import React,{ Component } from 'react';
import { Menu,Icon,Button } from  'antd';

import { Link } from 'react-router-dom';
import './sliderMenu.css';

const SubMenu = Menu.SubMenu;

export default class SliderMenu extends Component {
    state={
        collapsed : false
    };
    toggleCollapsed= ()=>{
        this.setState({
            collapsed:!this.state.collapsed
        });
    };
    render() {
        return (
            <div>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={this.state.collapsed}
                >
                    <Menu.Item key="1">
                        <Link to="/dash">
                            <Icon type="pie-chart" />
                            <span>Option 1</span>
                         </Link>
                         
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/user">
                            <Icon type="desktop" />
                            <span>Option 2</span>
                         </Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="inbox" />
                        <span>Option 3</span>
                    </Menu.Item>
                    <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                        <Menu.Item key="5">Option 5</Menu.Item>
                        <Menu.Item key="6">Option 6</Menu.Item>
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
                        <Menu.Item key="9">Option 9</Menu.Item>
                        <Menu.Item key="10">Option 10</Menu.Item>
                        <SubMenu key="sub3" title="Submenu">
                            <Menu.Item key="11">Option 11</Menu.Item>
                            <Menu.Item key="12">Option 12</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}