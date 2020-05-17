import React, { Component } from 'react'
import { Form, Input, Button, Icon } from 'antd';
import { Link } from 'react-router-dom'
import { post } from '@/utils/request'
import './style.less'

export default @Form.create({})
class Reg extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        post('http://api.baxiaobu.com/index.php/home/v1/register',values)
          .then(res => {
            if(res.status === '200'){
              this.props.history.push('/login');
            }
          })
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="pages-reg">
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: '请输入姓名!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('pwd', {
              rules: [{ required: true, message: '请输入密码!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />,
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              注册
            </Button>
            Or <Link to="/login">to login now!</Link>
          </Form.Item>
        </Form>
      </div>
    )
  }
}
