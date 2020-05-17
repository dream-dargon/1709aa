import React, { Component } from 'react'
import { get, post } from '@/utils/request'
import {
  Form,
  Input,
  Button,
  Modal,
  Table, 
  Progress,
} from 'antd';
import './style.less'

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};


export default @Form.create({
  mapPropsToFields(props) {
    return {
      username: Form.createFormField({
        // value: props.username.value,
      }),
    };
  },
})
class Tables extends Component {
  state = {
    visible: false,
    data: []
  };

  componentDidMount () {
    get('https://api.baxiaobu.com/index.php/home/v5/findUser')
      .then(res => {
        this.setState({
          data:res.users
        })
      })
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  deleFn = (val) => {
    console.log(val)
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        post('https://api.baxiaobu.com/index.php/home/v5/add',values)
          .then(res => {
            if(res.status === '200'){
              get('https://api.baxiaobu.com/index.php/home/v5/findUser')
                .then(res => {
                  this.setState({
                    data:res.users
                  })
                })
            }
          })
        this.handleOk();
      }
    });
  }

  render() {
    const columns = [
      {
        title: 'User',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'First name',
        dataIndex: 'name',
        key: 'gender',
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        render: (age) => (
          <Progress percent={age*1} />
        )
      },
      {
        title: 'Price',
        dataIndex: 'msg',
        key: 'msg',
        render: (msg) => (
          <span>${msg}</span>
        )
      },
      {
        title: 'Deadline',
        dataIndex: 'hospital',
        key: 'hospital',
      },
      {
        title: '',
        render: (text, record) => (
          <span>
            <Button>编辑</Button>
            <Button onClick={() => this.deleFn(text)}>删除</Button>
          </span>
        ),
      },
    ];
    const { getFieldDecorator } = this.props.form;
    const { data } = this.state;
    return (
      <div className="pages-table">
        <div className="table-head">
          <Button type="primary" onClick={this.showModal}>
            添加
          </Button>
          <Modal
            title="添加"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
              <Form.Item label="用户名">
                {getFieldDecorator('name', {
                  rules: [
                    {
                      required: true,
                      message: '请输入名字!',
                    },
                  ],
                })(<Input />)}
              </Form.Item>

              <Form.Item label="年龄">
                {getFieldDecorator('age', {
                  rules: [
                    {
                      required: true,
                      message: '请输入年龄!',
                    },
                  ],
                })(<Input />)}
              </Form.Item>

              <Form.Item label="价格">
                {getFieldDecorator('msg', {
                  rules: [
                    {
                      required: true,
                      message: '请输入价格!',
                    },
                  ],
                })(<Input />)}
              </Form.Item>

              <Form.Item label="信息">
                {getFieldDecorator('hospital', {
                  rules: [
                    {
                      required: true,
                      message: '请输入信息!',
                    },
                  ],
                })(<Input />)}
              </Form.Item>

              <Form.Item label="标题">
                {getFieldDecorator('gender', {
                  rules: [
                    {
                      required: true,
                      message: '请输入标题!',
                    },
                  ],
                })(<Input />)}
              </Form.Item>

              <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                  提交
                </Button>
              </Form.Item>
            </Form>
          </Modal>
        </div>
        <div className="table-content">
          <Table columns={columns} dataSource={data} rowKey={v => v.id} />
        </div>
      </div>
    )
  }
}
