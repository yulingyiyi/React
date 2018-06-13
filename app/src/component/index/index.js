import React,{Component} from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import SliderMenu from '../common/sliderMenu';
import { Layout, Menu, Icon } from 'antd';
import Routers from '../../router/index';
// import Dash from '../dash/index';
// import User from '../user/index';

const { Header, Sider, Content } = Layout;

export default class Index extends Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    return (
      <BrowserRouter>
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <SliderMenu/>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', height: '100%' }}>
            {/* <Route path='/dash' component={Dash}/>
            <Route path='/user' component={User}/> */}
            <Routers/>
          </Content>
          <footer  style={{ margin: 0,height: 50,textAlign:'center' }} >
                   Ant Design ©2016 Created by yuling 
          </footer>
        </Layout>
        
      </Layout>
      </BrowserRouter>
    );
  }
}

