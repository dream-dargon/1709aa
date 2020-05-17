import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd';
import { NavLink, Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Charts from '@/pages/charts'
import './style.less'

const { Header, Content, Sider } = Layout;

export default @connect(state => {
  return { login: state.login }
}, {

})

class App extends Component {
  constructor(props) {
    super(props);
    const { userData } = this.props.login;
    if (!userData.user_id) {
      this.props.history.push('/login');
    }
  }

  render() {
    return (
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline">
            <Menu.Item key="1">
              <NavLink to='/chart'>
                <Icon type="user" />
                <span className="nav-text">Chart</span>
              </NavLink>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span className="nav-text">Table</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span className="nav-text">Form Elements</span>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="user" />
              <span className="nav-text">Sammple Pages</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              <Switch>
                <Route path="/chart" component={Charts} />
                <Redirect to='/chart' />
              </Switch>
            </div>
          </Content>
        </Layout>
      </Layout>
    )
  }
}
