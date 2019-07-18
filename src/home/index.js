import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import './index.less';
import PandaIcon from './pandaIcon';
import menuConfigs from '../common/menuConfigs';
import Introduction from '../introduction';
const { Header, Content, Footer } = Layout;
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedMenu: { component: <Introduction /> }
        };
    }

    onChangemenu = ({ item, key, keyPath, domEvent }) => {
        debugger;
        this.setState({ selectedMenu: item.props });
        // this.props.history.push(key);
    };
    render() {
        return (
            <Layout className='layout'>
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                    <div className='title'>
                        <span>贺贺</span>的个人博客
                    </div>
                    <div className='logo'>
                        <PandaIcon style={{ fontSize: '28px' }} />
                        <span>个人博客</span>
                    </div>
                    <Menu
                        theme='dark'
                        mode='horizontal'
                        defaultSelectedKeys={['/home']}
                        style={{ lineHeight: '64px' }}
                        onClick={this.onChangemenu}
                    >
                        {menuConfigs.map(menu => (
                            <Menu.Item key={menu.key} component={menu.component}>
                                {menu.name}
                            </Menu.Item>
                        ))}
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px', margin: '128px 0 0 0' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ background: '#fff', padding: 24, minHeight: '100%' }}>{this.state.selectedMenu.component}</div>
                </Content>
                <Footer>贺贺 版权所有 | 采用默认主题 | 基于 React+Antd+Node 构建©2019 | 托管于xxx</Footer>
            </Layout>
        );
    }
}
