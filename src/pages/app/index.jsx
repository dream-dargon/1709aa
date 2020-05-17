import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd';
import { NavLink, Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Charts from '@/pages/charts'
import Tables from '@/pages/table'
import Forms from '@/pages/forms'
import List from '@/pages/list'
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
    this.state = {
      user: ''
    }
  }

  componentDidMount () {
    const { userData } = this.props.login;
    this.setState({
      user: userData.user_name
    })
  }

  render() {
    const { user } = this.state;
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
              <NavLink to='/table'>
                <Icon type="video-camera" />
                <span className="nav-text">Table</span>
              </NavLink>
            </Menu.Item>
            <Menu.Item key="3">
              <NavLink to='/form'>
                <Icon type="upload" />
                <span className="nav-text">Form Elements</span>
              </NavLink>
            </Menu.Item>
            <Menu.Item key="4">
              <NavLink to='/list'>
                <Icon type="user" />
                <span className="nav-text">Sammple Pages</span>
              </NavLink>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} ><span className="userS">{ user }</span></Header>
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              <Switch>
                <Route path="/table" component={Tables} />
                <Route path="/chart" component={Charts} />
                <Route path="/form" component={Forms} />
                <Route path="/list" component={List} />
                <Redirect to='/chart' />
              </Switch>
            </div>
          </Content>
        </Layout>
      </Layout>
    )
  }
}
