import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import PandaIcon from './pandaIcon';
import ROUTES from '../common/routes.cnfigs';
import { Route, Redirect } from 'react-router-dom';
import './index.less';

const { Header, Content, Footer } = Layout;

const defaultSelectedKeys = '/home';
export default class Layouts extends Component {
    onChangemenu = (o: any) => {
        // @ts-ignore
        this.props.history.push(o.key); // 改变导航栏上的地址展示
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
                        defaultSelectedKeys={[defaultSelectedKeys]}
                        style={{ lineHeight: '64px' }}
                        onClick={this.onChangemenu}
                    >
                        {ROUTES.filter(item => item.show).map(menu => (
                            // @ts-ignore
                            <Menu.Item key={menu.path} component={menu.component}>
                                {menu.name}
                            </Menu.Item>
                        ))}
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px', margin: '128px 0 0px 0' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ background: '#fff', padding: 24, minHeight: 'calc(100vh - 251px)' }}>
                        <Redirect from='/' to='/home' />
                        {ROUTES.map(item => (
                            <Route key={item.key} path={item.path} render={props => <item.component {...props} />} />
                        ))}
                    </div>
                </Content>
                <Footer>贺贺 版权所有 | 采用默认主题 | 基于 React+Antd+Node 构建©2019 | 托管于xxx</Footer>
            </Layout>
        );
    }
}
